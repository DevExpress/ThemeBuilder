import { Component, Input, OnChanges, Output, SimpleChanges, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LeftMenuAlias, LeftMenuItem, MetaItem } from './left-menu.aliases';
import { MetadataRepositoryService } from '../meta-repository.service';

@Component({
    selector: 'app-left-menu',
    templateUrl: './left-menu.component.html',
    styleUrls: ['./left-menu.component.css']
})

export class LeftMenuComponent implements OnChanges {

    private BASE_THEMING_NAME = 'Base Theming';
    private ORDER_REGEX = /^(\d+).\s/;

    @Output() variableChange = new EventEmitter<any>();
    @Input('metaValues') metaValues: Array<any>;
    @Input('theme') theme: string;
    @Input('colorScheme') colorScheme: string;
    widget: string;

    menuData: Array<LeftMenuItem>;

    menuClosed = true;
    workArea: Array<MetaItem>;
    workAreaName = this.BASE_THEMING_NAME;

    constructor(private route: ActivatedRoute, private metaRepository: MetadataRepositoryService) {
        this.route.params.subscribe(params => {
            this.widget = params['widget'];
            this.changeWidget(this.widget);
        });
    }

    valueChanged(e: any, key: string) {
        this.metaRepository.getDataItemByKey(key, { name: this.theme, colorScheme: this.colorScheme }).then(dataItem => {
            if(dataItem.Value === e.value) {
                return;
            }

            dataItem.Value = e.value;

            if(e.previousValue === undefined) {
                return;
            }

            dataItem.IsModified = true;
            this.variableChange.emit();
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
        return this.metaRepository.getData({
            name: theme,
            colorScheme: colorScheme
        }).then(groupedMetadata => {
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

    ngOnChanges(changes: SimpleChanges) {
        if(changes.theme && changes.theme.currentValue || changes.colorScheme && changes.colorScheme.currentValue) {
            const theme = changes.theme.currentValue;
            const colorScheme = changes.colorScheme.currentValue;
            this.changeTheme(theme, colorScheme).then(() => {
                this.changeWidget(this.widget);
            });
        }

        if(changes.metaValues && changes.metaValues.currentValue) {
            const meta = changes.metaValues.currentValue;
            for(const menuItem of this.menuData) {
                for(const data of menuItem.items) {
                    data.Value = meta[data.Key];

                    if(data.Items && data.Items.length) {
                        for(const nestedData of data.Items) {
                            nestedData.Value = meta[nestedData.Key];
                        }
                    }
                }
            }
        }
    }
}
