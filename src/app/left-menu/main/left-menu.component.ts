import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
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

@Component({
    selector: 'app-left-menu',
    templateUrl: './left-menu.component.html',
    styleUrls: ['./left-menu.component.css']
})

export class LeftMenuComponent implements OnDestroy, OnInit {

    private BASE_THEMING_NAME = 'Basic Settings';

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
    workAreaName = this.BASE_THEMING_NAME;
    formGroup = new FormGroup({
        formControl: new FormControl('')
    });

    constructor(private route: ActivatedRoute, private metaRepository: MetadataRepositoryService, private names: NamesService) {
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
            setTimeout(() => this.searchInput.nativeElement.focus(), 100);
        } else {
            this.menuSearch();
        }

        e.stopPropagation();
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
                    if(!existingGroup.length)
                        this.filteredData.push({ name: menuDataItem.name, groups: filteredDataGroups, route: menuDataItem.route });
                }
            }
        });
    }

    changeWidget(widget: string): void {
        const item = this.menuData && this.menuData.find((value) => value.route === widget);
        if(item) {
            this.workArea = item;
            this.workAreaName = item.name || this.BASE_THEMING_NAME;
            this.menuClosed = true;
        }

        if(this.scrollView)
            this.scrollView.instance.scrollTo(0);

        this.searchKeyword = '';
        this.searchOpened = false;
        this.filteredData = [];
        this.filteredData[0] = this.workArea;
    }

    getRealName = (name): SafeHtml => this.names.getHighlightedForLeftMenuName(name, this.searchKeyword);

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

        this.formGroup.valueChanges.pipe(
            debounceTime(500)
        ).subscribe((data) => {
            this.searchKeyword = data.formControl;
            this.menuSearch();
        });
    }

    ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }
}
