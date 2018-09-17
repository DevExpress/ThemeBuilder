import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as MetadataLoader from 'devextreme-themebuilder/modules/metadata-loader';
import * as MetadataRepository from 'devextreme-themebuilder/modules/metadata-repository';
import * as themes from 'devextreme-themebuilder/modules/themes';
import { LeftMenuAlias, LeftMenuItem, MetaItem } from './left-menu.aliases';

@Component({
    selector: 'app-left-menu',
    templateUrl: './left-menu.component.html',
    styleUrls: ['./left-menu.component.css']
})

export class LeftMenuComponent {

    BASE_THEMING_NAME = 'Base Theming';
    ORDER_REGEX = /^(\d+).\s/;

    constructor(private route: ActivatedRoute) {
        this.metadataRepository = new MetadataRepository(new MetadataLoader());
        this.metadataPromise = this.metadataRepository.init(themes);
        this.route.params.subscribe(params => {
            this.theme = params['theme'];
            this.colorScheme = params['color-scheme'];
            this.changeTheme(this.theme, this.colorScheme).then(() => {
                this.changeWidget(params['widget']);
            });
        });
    }

    theme: string;
    colorScheme: string;

    metadataPromise: Promise<any>;
    metadataRepository: MetadataRepository;

    menuData: Array<LeftMenuItem>;

    menuClosed = true;
    workArea: Array<MetaItem>;
    workAreaName = this.BASE_THEMING_NAME;

    openMenu() {
        this.menuClosed = false;
    }

    changeWidget(widget: string) {
        if(!this) { return; }
        for(const item of this.menuData) {
            if(item.groupKey === widget) {
                this.openWorkArea(item.items, item.groupName);
                break;
            }
        }
    }

    openWorkArea(items: Array<MetaItem>, name: string) {
        const workItems = items || [];

        workItems.forEach(item => {
            if(item.TypeValues) {
                item.TypeValuesArray = item.TypeValues.split('|');
            }
        });

        this.workArea = workItems.sort((item1, item2) => {
            const orders = [item1, item2].map(value => Number.parseInt(value.Name.match(this.ORDER_REGEX)[1]));
            return orders[0] - orders[1];
        });

        this.workAreaName = name || this.BASE_THEMING_NAME;
        this.menuClosed = true;
    }

    getRealName(name) {
        return name.replace(this.ORDER_REGEX, '');
    }

    changeTheme(theme: string, colorScheme: string) {
        // менюха будет только для отображения, при обновлении репозитория надо обновить данные в menuData
        // и в this.workArea, если они не обновятся сами

        // рпепозиторий сделать сервисом с возможностью подписки


        return new Promise(resolve => {
            this.metadataPromise.then(() => {
                const groupedMetadata = this.metadataRepository.getData({
                    name: theme,
                    colorScheme: colorScheme
                });

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
                resolve();
            });
        });
    }
}
