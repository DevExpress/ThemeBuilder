import { Component, OnInit, ViewChild } from '@angular/core';
import { fileSaver } from 'devextreme/exporter';
import validationEngine from 'devextreme/ui/validation_engine';
import { saveAs } from 'file-saver';
import * as JSZip from 'jszip';
import * as JSZipUtils from 'jszip-utils';
import { GoogleAnalyticsEventsService } from '../../../google-analytics-events.service';
import { ImportService } from '../../../import.service';
import { PopupComponent } from '../popup/popup.component';
import { DxTreeViewComponent, DxScrollViewComponent } from 'devextreme-angular';

class WidgetData {
    widget: string;
    selected: boolean;
    visible: boolean;
}

class TreeData {
    group: string;
    expanded: boolean;
    visible: boolean;
    items: WidgetData[];
}


@Component({
    selector: 'app-export-popup',
    templateUrl: './export-popup.component.html',
    styleUrls: ['./export-popup.component.css']
})
export class ExportPopupComponent implements OnInit {
    @ViewChild('popup') popup: PopupComponent;
    @ViewChild('widgetsTreeView') treeView: DxTreeViewComponent;
    @ViewChild('scrollView') scrollView: DxScrollViewComponent;

    viewIndex = 0;

    mainWidgets: string[] = ['Scheduler', 'Diagram', 'Gantt', 'DataGrid', 'PivotGrid', 'TreeList'];
    widgetGroups: any[] = [{
        group: 'Navigation and Layout',
        items: ['Tabs', 'NavBar', 'Toolbar', 'Menu', 'TreeView', 'TileView', 'Accordion', 'SlideOutView', 'SlideOut', 'ContextMenu', 'TabPanel', 'MultiView', 'Drawer', 'Box', 'ResponsiveBox']
    }, {
        group: 'Forms and Editors',
        items: ['Form', 'CheckBox', 'Calendar', 'Validation', 'Switch', 'TextBox', 'DropDownBox', 'Autocomplete', 'DateBox', 'SelectBox', 'NumberBox', 'Slider', 'RangeSlider', 'Lookup', 'TagBox', 'RadioGroup', 'ColorBox', 'HtmlEditor']
    }, {
        group: 'Actions and Buttons',
        items: ['Button', 'ButtonGroup', 'DropDownButton', 'ActionSheet', 'SpeedDialAction']
    }, {
        group: 'Overlays and Utilities',
        items: ['LoadPanel', 'LoadIndicator', 'ProgressBar', 'ScrollView', 'Sortable', 'FilterBuilder', 'Popup', 'Popover', 'Toast', 'Tooltip']
    }, {
        group: 'File Management',
        items: ['FileUploader', 'FileManager']
    }, {
        group: 'Lists and Collections',
        items: ['List', 'Gallery']
    }];

    treeData: TreeData[] = [];
    mainData: WidgetData[] = [];
    searchValue = '';

    schemeName: string;
    makeSwatch = false;
    needMeta = false;
    outputFile: string;
    textContent: string;
    contentReady = true;
    copyAreaActive = false;

    constructor(
        private importService: ImportService,
        private googleAnalyticsEventsService: GoogleAnalyticsEventsService
    ) {
        const defaultWidgetConfig = (widget): WidgetData => ({
            widget,
            selected: true,
            visible: true
        });

        const widgetComparer = (a: WidgetData, b: WidgetData): number => a.widget.localeCompare(b.widget);

        this.treeData = this.widgetGroups.map((group) => {
            group.expanded = false;
            group.visible = true;
            group.items = group.items
                .map(defaultWidgetConfig)
                .sort(widgetComparer);
            return group;
        });

        this.mainData = this.mainWidgets
            .map(defaultWidgetConfig)
            .sort(widgetComparer);
    }

    changeStep(index: number): void {
        const START_PAGE_INDEX = 0;
        if(this.viewIndex === START_PAGE_INDEX) {
            if(!this.validate().isValid) return;
        }

        this.copyAreaActive = false;
        this.viewIndex = index;
    }

    selectGroup(e: any, groupItems: WidgetData[]): void {
        if(e.event === undefined) return;
        groupItems.forEach((item) => {
            item.selected = e.value;
        });
    }

    selectAll(e: any): void {
        if(e.event === undefined) return;

        const select = (item: WidgetData, value: boolean): boolean => item.selected = value;

        this.mainData.forEach((item) => select(item, e.value));

        this.treeData.forEach((g) => {
            g.items.forEach((item) => select(item, e.value));
        });
    }

    groupValue(groupItems: WidgetData[]): boolean {
        const count = groupItems.length;
        const selectedCount = groupItems.filter((w) => w.selected).length;

        if(selectedCount === 0) return false;
        if(selectedCount === count) return true;
        return undefined;
    }

    allWidgetsSelected(treeData: TreeData[], mainData: WidgetData[]): boolean {
        const groupsCount = treeData.length;
        const selectedGroupsCount = treeData.filter((g) => this.groupValue(g.items)).length;

        const mainCount = mainData.length;
        const selectedMainCount = mainData.filter((w) => w.selected).length;

        if(selectedGroupsCount === 0 && selectedMainCount === 0) return false;
        if(selectedGroupsCount === groupsCount && selectedMainCount === mainCount) return true;
        return undefined;
    }

    getSelectedWidgets(): string[] {
        const getSelected = (widgetData: WidgetData[]): string[] => widgetData
            .filter((w) => w.selected)
            .map((i) => i.widget);

        let result = getSelected(this.mainData);
        this.treeData.forEach((treeItem) => {
            result.push(...getSelected(treeItem.items));
        });

        if(this.allWidgetsSelected(this.treeData, this.mainData)) result = [];

        return result;
    }

    search(): void {
        const isSearchMatch = (name: string): boolean => name.toLowerCase().indexOf(this.searchValue.toLowerCase()) >= 0;

        this.treeData.forEach((treeItem) => {
            const groupName = treeItem.group;
            treeItem.items.forEach((item: WidgetData) => {
                item.visible = isSearchMatch(groupName) || isSearchMatch(item.widget);
            });
            const hasChildItems = treeItem.items.findIndex((i) => i.visible) >= 0;
            treeItem.visible = hasChildItems;
            treeItem.expanded = hasChildItems && this.searchValue.length > 0;
        });
    }

    getFileNameWithoutExt(): string {
        return this.outputFile &&
               this.outputFile.replace(/^.*[\\/]/, '').replace(/\.(css|json|less|scss)/, '') ||
               `dx.${this.importService.getThemeName()}.${this.schemeName}`;
    }

    validate(): any {
        return validationEngine.validateGroup();
    }

    setParameters(): void {
        const savedMeta = this.importService.getSavedMetadata();
        this.schemeName = this.importService.getColorSchemeName();
        this.outputFile = savedMeta.outputFile;
        this.makeSwatch = !!savedMeta.makeSwatch;
    }

    fileSave(cssContent): void {
        fileSaver.saveAs(this.getFileNameWithoutExt(), 'CSS', new Blob([cssContent]));
    }

    exportCss(save: boolean): Promise<void> {
        this.googleAnalyticsEventsService.emitEvent(
            'export',
            'save css (' + this.importService.getThemeName() + ')');

        this.contentReady = false;
        return this.importService.exportCss(this.schemeName, this.makeSwatch)
            .then((css) => {
                this.contentReady = true;
                this.textContent = css;
                if(save) this.fileSave(css);
            })
            .catch((e) => {
                this.contentReady = true;
                console.log('Css export fails', e);
            });
    }

    exportMeta(save: boolean): void {
        this.googleAnalyticsEventsService.emitEvent(
            'export',
            'save metadata (' + this.importService.getThemeName() + ')');

        const metaString = this.importService.exportMetadata(this.schemeName, this.makeSwatch, this.getSelectedWidgets());
        this.textContent = metaString;
        if(save) fileSaver._saveBlobAs(this.getFileNameWithoutExt() + '.json', 'JSON', new Blob([metaString]));
    }

    exportZip(): void {
        const zip = new JSZip();
        const fontExtension = ['ttf', 'woff', 'woff2'];
        const fontFilePath = 'icons/dxicons' + (this.importService.getThemeName() === 'generic' ? '' : 'material');
        this.contentReady = false;

        fontExtension.forEach((extension) => {
            zip.file(`${fontFilePath}.${extension}`, JSZipUtils.getBinaryContent(`content/css/${fontFilePath}.${extension}`));
        });

        const fileName = 'dx.' + this.importService.getThemeName() + '.' + this.schemeName;
        zip.file(fileName + '.css', this.importService.exportCss(this.schemeName, this.makeSwatch));

        zip.generateAsync({type: 'blob'})
            .then((content) => {
                this.contentReady = true;
                saveAs(content, fileName + '.zip');
            });
    }

    copy(): void {
        if(this.needMeta) {
            this.exportMeta(false);
            this.copyAreaActive = true;
        } else {
            this.exportCss(false)
                .then(() => this.copyAreaActive = true)
                .catch((e) => {
                    console.log(e);
                });
        }
    }

    copyFileContent(): void {
        this.googleAnalyticsEventsService.emitEvent(
            'export',
            'copy ' + (this.needMeta ? 'metadata' : 'css') + ' (' + this.importService.getThemeName() + ')');
    }

    ngOnInit(): void {
        this.setParameters();
        this.importService.changed.subscribe(() => this.setParameters());
    }
}
