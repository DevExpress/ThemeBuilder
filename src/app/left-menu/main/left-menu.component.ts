import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { LeftMenuItem } from 'src/app/types/left-menu-item';
import { MetadataRepositoryService } from '../../meta-repository.service';
import { NamesService } from '../../names.service';
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
    filteredMenuData: LeftMenuItem[] = [];

    menuClosed = true;
    searchOpened = false;
    searchKeyword = '';
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
        this.menuSearch();
        e.stopPropagation();
    }

    menuSearch() {
        const keyword = this.searchKeyword.toLowerCase();
        this.filteredMenuData = this.menuData.filter((value) => {
            const name = value.name.toLowerCase();
            const searchString = name + ', ' + value.equivalents;
            return searchString.toLowerCase().indexOf(keyword) !== -1;
        });
    }

    changeWidget(widget: string) {
        const item = this.menuData && this.menuData.find((value) => value.route === widget);
        if(item) {
            this.workArea = item;

            this.workAreaName = name || this.BASE_THEMING_NAME;
            this.menuClosed = true;
        }
    }

    getRealName = (name) => this.names.getRealName(name);

    loadThemeMetadata() {
        return this.metaRepository.getData().then((metadata: MetaItem[]) => {
            this.theme = this.metaRepository.theme.name;
            this.colorScheme = this.metaRepository.theme.colorScheme;

            const getMatchedItems = (regex: RegExp): MetaItem[] => {
                return metadata
                    .filter((value) => value.Name && regex.test(value.Key));
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

            this.filteredMenuData = this.menuData;
        });
    }

    ngOnInit() {
        this.loadThemeMetadata();

        this.subscription = this.metaRepository.css.subscribe(() => {
            this.loadThemeMetadata().then(() => {
                this.changeWidget(this.widget);
            });
        });
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
}
