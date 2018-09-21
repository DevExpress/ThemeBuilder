import { Component, Input, OnChanges, Output, SimpleChanges, EventEmitter, OnDestroy, OnInit } from '@angular/core';
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

    theme: string;
    colorScheme: string;
    widget: string;

    subscription: Subscription;
    menuData: Array<LeftMenuItem>;

    menuClosed = true;
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
        return this.metaRepository.getData().then(groupedMetadata => {
            this.theme = this.metaRepository.theme.name;
            this.colorScheme = this.metaRepository.theme.colorScheme;

            const widgetGroups: any = {};
            const itemArray: Array<LeftMenuItem> = [];

            for(const groupKey in groupedMetadata) {
                if(groupedMetadata.hasOwnProperty(groupKey)) {
                    const aliasInfo = LeftMenuAlias.getAlias(groupKey);
                    const groupName = aliasInfo.name;
                    if(!aliasInfo) { continue; }

                    if(aliasInfo.widgetGroup) {
                        const mainGroupKey = groupKey.substring(0, groupKey.indexOf('.'));
                        if(!widgetGroups[mainGroupKey]) {
                            widgetGroups[mainGroupKey] = [];
                        }
                        widgetGroups[mainGroupKey].push({
                            GroupHeader: true,
                            Name: '0. ' + groupName,
                            Items: groupedMetadata[groupKey]
                        });
                    } else {
                        itemArray.push({
                            order: aliasInfo.order,
                            groupKey: groupKey,
                            groupName: groupName,
                            items: groupedMetadata[groupKey]
                        });
                    }
                }
            }

            for(const widgetGroupKey in widgetGroups) {
                if(widgetGroups.hasOwnProperty(widgetGroupKey)) {
                    const aliasInfo = LeftMenuAlias.getAlias(widgetGroupKey);
                    itemArray.push({
                        order: aliasInfo.order,
                        groupKey: widgetGroupKey,
                        groupName: aliasInfo.name,
                        items: widgetGroups[widgetGroupKey]
                    });
                }
            }

            this.menuData = itemArray.sort((item1, item2) => item1.order - item2.order);
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
