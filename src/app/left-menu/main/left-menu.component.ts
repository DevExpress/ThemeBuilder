import { Component, ElementRef, ViewChild, effect, signal, untracked } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { UntypedFormControl, UntypedFormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { DxScrollViewComponent } from 'devextreme-angular';
import { debounceTime } from 'rxjs/operators';
import { MetadataRepositoryService } from '../../meta-repository.service';
import { NamesService } from '../../names.service';
import { LeftMenuItem } from '../../types/left-menu-item';
import { MetaItem } from '../../types/meta-item';
import { LeftMenuAlias } from '../left-menu.aliases';
import { AnalyticsEventsService } from '../../analytics-events.service';

const BASE_THEMING_NAME = 'Basic Settings';

@Component({
    selector: 'app-left-menu',
    templateUrl: './left-menu.component.html',
    styleUrls: ['./left-menu.component.css'],
    standalone: false
})

export class LeftMenuComponent {
    @ViewChild('searchInput') searchInput: ElementRef;
    @ViewChild(DxScrollViewComponent) scrollView: DxScrollViewComponent;

    theme: string;
    colorScheme: string;
    widget: string;

    menuData = signal<LeftMenuItem[]>([]);
    filteredData = signal<LeftMenuItem[]>([]);
    menuClosed = true;
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

        // Reload the menu on each theme build
        effect(() => {
            this.metaRepository.css();
            untracked(() => {
                // eslint-disable-next-line @typescript-eslint/no-floating-promises
                this.loadThemeMetadata().then(() => {
                    if(this.searchKeyword) this.menuSearch();
                    else this.changeWidget(this.widget);
                });
            });
        });

        const SEARCH_DEBOUNCE_TIMEOUT = 500;

        this.formGroup.valueChanges.pipe(
            debounceTime(SEARCH_DEBOUNCE_TIMEOUT),
            takeUntilDestroyed()
        ).subscribe((data) => {
            this.searchKeyword = data.formControl;
            this.menuSearch();
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
            this.filteredData.set([this.workArea]);
            return;
        }

        const filteredData: LeftMenuItem[] = [];

        this.menuData().forEach((menuDataItem) => {
            addFilteredMenuItem(menuDataItem, filteredData);

            if(menuDataItem.groups) {
                const filteredDataGroups: LeftMenuItem[] = [];

                menuDataItem.groups.forEach((group) => addFilteredMenuItem(group, filteredDataGroups));

                if(filteredDataGroups.length) {
                    const existingGroup = filteredData.filter((i) => i.name === menuDataItem.name);
                    if(!existingGroup.length) {
                        filteredData.push({ name: menuDataItem.name, groups: filteredDataGroups, route: menuDataItem.route });
                    }
                }
            }
        });

        this.filteredData.set(filteredData);

        this.analyticsEventsService.trackEvent(
            'TB: Settings',
            'Tb search',
            keyword
        );
    }

    changeWidget(widget: string): void {
        const item = this.menuData().find((value) => value.route === widget);
        if(item) {
            this.workArea = item;
            this.workAreaName = item.name || BASE_THEMING_NAME;
            this.menuClosed = true;
        }

        if(this.scrollView) this.scrollView.instance.scrollTo(0);

        this.searchKeyword = '';
        this.searchOpened = false;
        this.filteredData.set([this.workArea]);
    }

    getRealName(name): string {
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

            const menuData = LeftMenuAlias.getMenu();

            menuData.forEach((item) => {
                fillItems(item);
                if(item.groups) {
                    item.groups.forEach((groupItem) => fillItems(groupItem));
                }
            });

            this.menuData.set(menuData);
        });
    }

    fireScrollEventForClosingDropdowns() {
        document.body.dispatchEvent(new Event('scroll'));
    }
}
