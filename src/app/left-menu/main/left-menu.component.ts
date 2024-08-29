import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { DxScrollViewComponent } from 'devextreme-angular';
import { Subscription } from 'rxjs/internal/Subscription';
import { debounceTime } from 'rxjs/operators';
import { MetadataRepositoryService } from '../../meta-repository.service';
import { NamesService } from '../../names.service';
import { LeftMenuItem } from '../../types/left-menu-item';
import { MetaItem } from '../../types/meta-item';
import { LeftMenuAlias } from '../left-menu.aliases';
import { SafeHtml } from '@angular/platform-browser';
import { AnalyticsEventsService } from '../../analytics-events.service';

const BASE_THEMING_NAME = 'Basic Settings';

@Component({
    selector: 'app-left-menu',
    templateUrl: './left-menu.component.html',
    styleUrls: ['./left-menu.component.css']
})

export class LeftMenuComponent implements OnDestroy, OnInit {
    @ViewChild('searchInput') searchInput: ElementRef;
    @ViewChild(DxScrollViewComponent) scrollView: DxScrollViewComponent;

    theme: string;
    colorScheme: string;
    widget: string;

    subscription: Subscription;
    menuData: LeftMenuItem[];
    filteredData: LeftMenuItem[] = [];
    menuClosed = false;
    searchOpened = false;
    searchKeyword = '';
    workArea: LeftMenuItem;
    workAreaName = BASE_THEMING_NAME;
    formGroup = new UntypedFormGroup({
        formControl: new UntypedFormControl('')
    });

    constructor(private route: ActivatedRoute,
        private metaRepository: MetadataRepositoryService,
        private names: NamesService,
        private analyticsEventsService: AnalyticsEventsService
    ) {
        this.route.params.subscribe((params) => {
            this.widget = params['group'];
            this.changeWidget(this.widget);
        });
    }

    openMenu(): void {
        this.menuClosed = false;
    }

    toggleSearch(e: MouseEvent): void {
        this.searchOpened = !this.searchOpened;
        this.searchKeyword = '';

        if(this.searchOpened) {
            const FUCUS_SETTING_TIMEOUT = 100;
            setTimeout(() => this.searchInput.nativeElement.focus(), FUCUS_SETTING_TIMEOUT);
        } else {
            this.menuSearch();
        }

        e.stopPropagation();
    }

    selectComponent(componentName: string): void {
        this.analyticsEventsService.trackEvent(
            'TB: Settings',
            'Tb select subgroup',
            componentName
        );
        this.menuClosed = true;
    }

    menuSearch(): void {
        const keyword = this.names.getRealName(this.searchKeyword.toLowerCase());

        const addFilteredMenuItem = (item: LeftMenuItem, itemsArray: LeftMenuItem[]): void => {
            if(item.name.toLowerCase().indexOf(keyword) >= 0) {
                itemsArray.push(item);
                return;
            }

            if(!item.items) return;

            const filteredItems = item.items.filter((metaItem) => {
                const itemName = this.names.getRealName(metaItem.Name).toLowerCase();
                return itemName.indexOf(keyword) >= 0;
            });

            if(filteredItems.length) {
                itemsArray.push({ name: item.name, items: filteredItems, route: item.route });
            }
        };

        if(!keyword.length) {
            this.filteredData = [];
            this.filteredData[0] = this.workArea;
            return;
        }

        this.filteredData = [];

        this.menuData.forEach((menuDataItem) => {
            addFilteredMenuItem(menuDataItem, this.filteredData);

            if(menuDataItem.groups) {
                const filteredDataGroups: LeftMenuItem[] = [];

                menuDataItem.groups.forEach((group) => addFilteredMenuItem(group, filteredDataGroups));

                if(filteredDataGroups.length) {
                    const existingGroup = this.filteredData.filter((i) => i.name === menuDataItem.name);
                    if(!existingGroup.length) {
                        this.filteredData.push({ name: menuDataItem.name, groups: filteredDataGroups, route: menuDataItem.route });
                    }
                }
            }
        });

        this.analyticsEventsService.trackEvent(
            'TB: Settings',
            'Tb search',
            keyword
        );
    }

    changeWidget(widget: string): void {
        const item = this.menuData && this.menuData.find((value) => value.route === widget);
        if(item) {
            this.workArea = item;
            this.workAreaName = item.name || BASE_THEMING_NAME;
            this.menuClosed = true;
        }

        if(this.scrollView) this.scrollView.instance.scrollTo(0);

        this.searchKeyword = '';
        this.searchOpened = false;
        this.filteredData = [];
        this.filteredData[0] = this.workArea;
    }

    getRealName(name): SafeHtml {
        return this.names.getHighlightedForLeftMenuName(name, this.searchKeyword);
    }

    loadThemeMetadata(): Promise<any> {
        return this.metaRepository.getData().then((metadata: MetaItem[]) => {
            this.theme = this.metaRepository.theme.name;
            this.colorScheme = this.metaRepository.theme.colorScheme;

            const getMatchedItems = (regex: RegExp): MetaItem[] => {
                return metadata.filter((value) => value.Name && regex.test(value.Key));
            };

            const fillItems = (menuItem: LeftMenuItem): void => {
                if(menuItem.regs) {
                    menuItem.items = [];
                    menuItem.regs.forEach((regex) => {
                        Array.prototype.push.apply(menuItem.items, getMatchedItems(regex));
                    });

                    menuItem.items.forEach((metaItem: MetaItem) => {
                        if(metaItem.TypeValues) {
                            metaItem.TypeValuesArray = metaItem.TypeValues.split('|');
                        }
                    });

                    menuItem.items.sort((item1, item2) => this.names.sortNames(item1.Name, item2.Name));
                }
            };

            this.menuData = LeftMenuAlias.getMenu();

            this.menuData.forEach((item) => {
                fillItems(item);
                if(item.groups) {
                    item.groups.forEach((groupItem) => fillItems(groupItem));
                }
            });
        });
    }

    ngOnInit(): void {
        this.loadThemeMetadata();
        this.subscription = this.metaRepository.css.subscribe(() => {
            this.loadThemeMetadata().then(() => {
                if(this.searchKeyword) this.menuSearch();
                else this.changeWidget(this.widget);
            });
        });

        const SEARCH_DEBOUNCE_TIMEOUT = 500;

        this.formGroup.valueChanges.pipe(
            debounceTime(SEARCH_DEBOUNCE_TIMEOUT)
        ).subscribe((data) => {
            this.searchKeyword = data.formControl;
            this.menuSearch();
        });
    }

    fireScrollEventForClosingDropdowns() {
        document.body.dispatchEvent(new Event('scroll'));
    }

    ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }
}
