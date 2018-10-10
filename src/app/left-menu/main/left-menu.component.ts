import { Component, Input, OnChanges, Output, SimpleChanges, EventEmitter, ViewChild, OnDestroy, OnInit, ElementRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LeftMenuAlias } from '../left-menu.aliases';
import { LeftMenuItem } from '../../types/left-menu-item';
import { MetaItem } from '../../types/meta-item';

import { MetadataRepositoryService } from '../../meta-repository.service';
import { NamesService } from '../../names.service';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-left-menu',
    templateUrl: './left-menu.component.html',
    styleUrls: ['./left-menu.component.css']
})

export class LeftMenuComponent implements OnDestroy, OnInit {

    private BASE_THEMING_NAME = 'Base Theming';

    @ViewChild('searchInput') searchInput: ElementRef;

    theme: string;
    colorScheme: string;
    widget: string;

    subscription: Subscription;
    menuData: Array<LeftMenuItem>;
    filteredMenuData: Array<LeftMenuItem>;

    menuClosed = true;
    searchOpened = false;
    searchKeyword = '';
    workArea: Array<MetaItem>;
    workAreaName = this.BASE_THEMING_NAME;

    constructor(private route: ActivatedRoute, private metaRepository: MetadataRepositoryService, private names: NamesService) {
        this.route.params.subscribe(params => {
            this.widget = params['widget'];
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
        this.filteredMenuData = this.menuData.filter(value => {
            const groupName = value.groupName.toLowerCase();
            const checkName = word => word.indexOf(keyword) !== -1;
            return checkName(groupName) || checkName(groupName.replace(/\s/, ''));
        });
    }

    changeWidget(widget: string) {
        const item = this.menuData && this.menuData.find(value => value.groupKey === widget);
        if(item) {
            this.openWorkArea(item.items, item.groupName);
        }
    }

    openWorkArea(items: Array<MetaItem>, name: string) {
        const workItems = items || [];

        workItems.forEach(item => {
            if(item.TypeValues) {
                item.TypeValuesArray = item.TypeValues.split('|');
            }
        });

        this.workArea = workItems.sort((item1, item2) => this.names.sortNames(item1.Name, item2.Name));

        this.workAreaName = name || this.BASE_THEMING_NAME;
        this.menuClosed = true;
    }

    getRealName = name => this.names.getRealName(name);

    loadThemeMetadata() {
        return this.metaRepository.getData().then(metadata => {
            this.theme = this.metaRepository.theme.name;
            this.colorScheme = this.metaRepository.theme.colorScheme;

            const widgetGroups: Array<MetaItem> = [];
            const itemArray: Array<LeftMenuItem> = [];

            const processedGroups: any = {};

            metadata.forEach(metaItem => {
                const group = metaItem.Group;

                if(processedGroups[group]) return;
                processedGroups[group] = true;

                const aliasInfo = LeftMenuAlias.getAlias(group);

                if(!aliasInfo) return;

                const groupName = aliasInfo.name;
                const groupItems = metadata.filter(i => i.Group === group);

                if(aliasInfo.widgetGroup) {
                    const groupKey = group.substring(0, group.indexOf('.'));

                    widgetGroups.push({
                        Key: null,
                        Value: null,
                        Group: groupKey,
                        GroupHeader: true,
                        Name: '0. ' + groupName,
                        Items: groupItems
                    });
                } else {
                    itemArray.push({
                        order: aliasInfo.order,
                        groupKey: group,
                        groupName: groupName,
                        items: groupItems
                    });
                }
            });

            widgetGroups.forEach(groupItem => {
                const mainGroupKey = groupItem.Group;
                if(processedGroups[mainGroupKey]) return;
                processedGroups[mainGroupKey] = true;

                const aliasInfo = LeftMenuAlias.getAlias(mainGroupKey);

                itemArray.push({
                    order: aliasInfo.order,
                    groupKey: mainGroupKey,
                    groupName: aliasInfo.name,
                    items: widgetGroups.filter(i => i.Group === mainGroupKey)
                });
            });

            this.menuData = itemArray.sort((item1, item2) => item1.order - item2.order);
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
