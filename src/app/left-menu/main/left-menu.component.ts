import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
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
    workArea: LeftMenuItem;
    workAreaName = this.BASE_THEMING_NAME;

    constructor(private route: ActivatedRoute, private metaRepository: MetadataRepositoryService, private names: NamesService,
                private sanitizer: DomSanitizer) {
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

    changeColor(text: string) {
       const keyword = this.getRealName(this.searchKeyword.toLowerCase());
       if (keyword.length >= 3) {
        text = '<span style="color:#f05b41">' + text.slice(0, keyword.length) + '</span>' + text.slice(keyword.length);
        return this.sanitizer.bypassSecurityTrustHtml(text);
       }
       return text;
    }

    menuSearch() {
        const keyword = this.getRealName(this.searchKeyword.toLowerCase());

        if (keyword.length < 3) {
            this.filteredData = [];
            this.filteredData[0] = this.workArea;
        }

        if (keyword.length >= 3) {
            this.filteredData = this.deepClone(this.menuData);

            this.filteredData.forEach((data) => {
                if (data.groups) {
                    data.groups.forEach((group) => {
                        if (group.items) {
                            group.items = group.items.filter((value) => {
                                const searchString = this.getRealName(value.Name);
                                if(searchString.toLowerCase() === keyword) {
                                    return true;
                                } else if(searchString.toLowerCase().slice(0, keyword.length - searchString.length) === keyword) {
                                    return true;
                                } else {
                                    return false;
                                }
                            });
                        }
                    });
                } else {
                    data.items = data.items.filter((value) => {
                        const searchString = this.getRealName(value.Name);
                        if (searchString.toLowerCase() === keyword) {
                            return true;
                        } else if (searchString.toLowerCase().slice(0, keyword.length - searchString.length) === keyword) {
                            return true;
                        } else {
                            return false;
                        }
                    });
                }
            });

            for(let i = 0; i < this.filteredData.length; i++) {
                if(this.filteredData[i].items) {
                    if(this.filteredData[i].items.length === 0) {
                        this.filteredData.splice(i, 1);
                        i--;
                    }
                } else {
                    for(let k = 0; k < this.filteredData[i].groups.length; k++) {
                        if(this.filteredData[i].groups[k].items) {
                            if(this.filteredData[i].groups[k].items.length === 0) {
                                this.filteredData[i].groups.splice(k, 1);
                                k--;
                            }
                        }
                    }
                    if(this.filteredData[i].groups.length === 0 || (this.filteredData[i].groups.length === 4 && this.filteredData[i].name === 'Editors')) {
                        this.filteredData.splice(i, 1);
                        i--;
                    }
                }
            }
        }

    }

    deepClone(obj: any) {
        if (typeof (obj) !== 'object' || obj === null) {
            return obj;
        }

        let clone;

        if (Array.isArray(obj)) {
            clone = obj.slice();
        } else {
            clone = Object.assign({}, obj);
        }

        const keys = Object.keys(clone);

        for (let i = 0; i < keys.length; i++) {
            clone[keys[i]] = this.deepClone(clone[keys[i]]);
        }

        return clone;

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

    getRealName = (name) => this.names.getRealName(name);

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
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
}
