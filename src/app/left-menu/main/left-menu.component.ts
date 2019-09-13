import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { MetadataRepositoryService } from '../../meta-repository.service';
import { NamesService } from '../../names.service';
import { LeftMenuItem } from '../../types/left-menu-item';
import { MetaItem } from '../../types/meta-item';
import { LeftMenuAlias } from '../left-menu.aliases';

@Component({
    selector: 'app-left-menu',
    templateUrl: './left-menu.component.html',
    styleUrls: ['./left-menu.component.css']
})

export class LeftMenuComponent implements OnDestroy, OnInit {

    private BASE_THEMING_NAME = 'Basic Settings';

    @ViewChild('searchInput') searchInput: ElementRef;

    theme: string;
    colorScheme: string;
    widget: string;

    subscription: Subscription;
    menuData: LeftMenuItem[];
    filteredData: LeftMenuItem[] = [];
    menuClosed = false;
    searchOpened = false;
    searchKeyword = '';
    previousSearchKeyword = '';
    workArea: LeftMenuItem;
    workAreaName = this.BASE_THEMING_NAME;

    constructor(private route: ActivatedRoute, private metaRepository: MetadataRepositoryService, private names: NamesService) {
        this.route.params.subscribe((params) => {
            this.widget = params['group'];
            this.changeWidget(this.widget);
        });
    }

    openMenu() {
        this.menuClosed = false;
    }

    toggleSearch(e: any) {
        this.searchOpened = !this.searchOpened;
        this.searchKeyword = '';
        setTimeout(() => this.searchInput.nativeElement.focus(), 100);
        e.stopPropagation();
    }

    menuSearch() {
        if(this.previousSearchKeyword === this.searchKeyword) return;

        this.previousSearchKeyword = this.searchKeyword;
        const keyword = this.names.getRealName(this.searchKeyword.toLowerCase());

        const addFilteredMenuItem = (item: LeftMenuItem, itemsArray: LeftMenuItem[]): void => {
            if(!item.items) return;

            const filteredItems = item.items.filter((metaItem) => {
                const itemName = this.names.getRealName(metaItem.Name).toLowerCase();
                return itemName.indexOf(keyword) >= 0;
            });

            if(filteredItems.length) {
                itemsArray.push({ name: item.name, items: filteredItems });
            }
        };

        if(!keyword.length) {
            this.filteredData = [];
            this.filteredData[0] = this.workArea;
            return;
        }

        this.filteredData = [];

        this.menuData.forEach((menuDataItem) => {
            console.log(menuDataItem.name.toLowerCase(), keyword);
            if(menuDataItem.name.toLowerCase().indexOf(keyword) >= 0) {
                this.filteredData.push(menuDataItem);
            } else {
                addFilteredMenuItem(menuDataItem, this.filteredData);

                if(menuDataItem.groups) {
                    const filteredDataGroups: LeftMenuItem[] = [];

                    menuDataItem.groups.forEach((group) => addFilteredMenuItem(group, filteredDataGroups));

                    if(filteredDataGroups.length) {
                        this.filteredData.push({ name: menuDataItem.name, groups: filteredDataGroups });
                    }
                }
            }
        });
    }

    changeWidget(widget: string) {
        const item = this.menuData && this.menuData.find((value) => value.route === widget);
        if(item) {
            this.workArea = item;
            this.workAreaName = item.name || this.BASE_THEMING_NAME;
            this.menuClosed = true;
        }
        this.filteredData[0] = this.workArea;
    }

    getRealName = (name) => this.names.getHighlightedForLeftMenuName(name, this.searchKeyword);

    loadThemeMetadata() {
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

    ngOnInit() {
        this.loadThemeMetadata();

        this.subscription = this.metaRepository.css.subscribe(() => {
            this.loadThemeMetadata().then(() => {
                this.changeWidget(this.widget);
            });
        });

        setInterval(() => {
            this.menuSearch();
        }, 500);
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
}
