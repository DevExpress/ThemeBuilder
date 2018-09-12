import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
// import * as metadata from 'devextreme-themebuilder/data/metadata/dx-theme-builder-metadata';
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

    constructor(private route: ActivatedRoute) {
        this.metadataRepository = new MetadataRepository(new MetadataLoader());
        this.metadataPromise = this.metadataRepository.init(themes);
        this.route.params.subscribe(params => {
            this.changeTheme(params['theme'], params['color-scheme']);
        });
    }

    metadataPromise: Promise<any>;
    metadataRepository: MetadataRepository;

    menuData: Array<LeftMenuItem>;

    changeTheme(theme: string, colorScheme: string) {
        this.metadataPromise.then(() => {
            const groupedMetadata = this.metadataRepository.getData({
                name: theme,
                colorScheme: colorScheme
            });

            const itemArray: Array<LeftMenuItem> = [];
            const widgetGroups: any = {};

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
                            Separator: true,
                            Name: groupName
                        });
                        Array.prototype.push.apply(widgetGroups[mainGroupKey], groupedMetadata[groupKey]);
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
}
