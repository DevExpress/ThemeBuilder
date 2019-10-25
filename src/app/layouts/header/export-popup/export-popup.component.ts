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
    disabled: boolean;
    selectByUser: boolean;
    linksCount: number;
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
    // interface
    viewIndex = 0;
    allWidgetsText = 'All Widgets';

    // data for interface
    dependencies: any = { 'Box': [], 'ResponsiveBox': [], 'Button': [], 'ButtonGroup': ['Button'], 'ScrollView': ['LoadPanel', 'LoadIndicator'], 'LoadPanel': ['LoadIndicator'], 'LoadIndicator': [], 'CheckBox': ['Validation'], 'Validation': [], 'Switch': ['Validation'], 'Tabs': ['Button'], 'Map': [], 'NavBar': ['Tabs', 'Button'], 'TextBox': ['Validation', 'Button'], 'DropDownBox': ['TextBox', 'DropDownButton', 'Popup', 'Validation', 'Button', 'ButtonGroup', 'List', 'Toolbar', 'ScrollView', 'ActionSheet', 'Autocomplete', 'CheckBox', 'DateBox', 'Menu', 'SelectBox', 'Tabs', 'LoadPanel', 'LoadIndicator', 'Popover', 'Box', 'Calendar', 'TreeView', 'NumberBox'], 'DropDownButton': ['ButtonGroup', 'Popup', 'List', 'Button', 'Toolbar', 'ScrollView', 'ActionSheet', 'Autocomplete', 'CheckBox', 'DateBox', 'Menu', 'SelectBox', 'Tabs', 'TextBox', 'LoadPanel', 'LoadIndicator', 'Popover', 'Validation', 'Box', 'Calendar', 'TreeView', 'DropDownBox', 'NumberBox'], 'Popup': ['Button', 'Toolbar', 'List', 'ActionSheet', 'Autocomplete', 'CheckBox', 'DateBox', 'Menu', 'SelectBox', 'Tabs', 'TextBox', 'ButtonGroup', 'DropDownButton', 'ScrollView', 'Popover', 'Validation', 'Box', 'Calendar', 'TreeView', 'LoadPanel', 'LoadIndicator', 'DropDownBox', 'NumberBox'], 'Toolbar': ['List', 'ActionSheet', 'Button', 'Autocomplete', 'CheckBox', 'DateBox', 'Menu', 'SelectBox', 'Tabs', 'TextBox', 'ButtonGroup', 'DropDownButton', 'ScrollView', 'Popup', 'Popover', 'Validation', 'Box', 'Calendar', 'TreeView', 'LoadPanel', 'LoadIndicator', 'DropDownBox', 'NumberBox'], 'List': ['Button', 'ScrollView', 'LoadPanel', 'LoadIndicator'], 'ActionSheet': ['Button', 'Popup', 'Popover', 'Toolbar', 'List', 'Autocomplete', 'CheckBox', 'DateBox', 'Menu', 'SelectBox', 'Tabs', 'TextBox', 'ButtonGroup', 'DropDownButton', 'ScrollView', 'Validation', 'Box', 'Calendar', 'TreeView', 'LoadPanel', 'LoadIndicator', 'DropDownBox', 'NumberBox'], 'Autocomplete': ['DropDownBox', 'List', 'TextBox', 'DropDownButton', 'Popup', 'Validation', 'Button', 'ButtonGroup', 'Toolbar', 'ScrollView', 'ActionSheet', 'CheckBox', 'DateBox', 'Menu', 'SelectBox', 'Tabs', 'LoadPanel', 'LoadIndicator', 'Popover', 'Box', 'Calendar', 'TreeView', 'NumberBox'], 'Menu': ['Button', 'TreeView', 'CheckBox', 'LoadIndicator', 'Validation'], 'DateBox': ['Box', 'Calendar', 'List', 'NumberBox', 'SelectBox', 'Validation', 'Button', 'ScrollView', 'LoadPanel', 'LoadIndicator', 'DropDownBox', 'TextBox', 'DropDownButton', 'Popup', 'ButtonGroup', 'Toolbar', 'ActionSheet', 'Autocomplete', 'CheckBox', 'Menu', 'Tabs', 'Popover', 'TreeView'], 'SelectBox': ['DropDownBox', 'List', 'TextBox', 'DropDownButton', 'Popup', 'Validation', 'Button', 'ButtonGroup', 'Toolbar', 'ScrollView', 'ActionSheet', 'Autocomplete', 'CheckBox', 'DateBox', 'Menu', 'Tabs', 'LoadPanel', 'LoadIndicator', 'Popover', 'Box', 'Calendar', 'TreeView', 'NumberBox'], 'Popover': ['Popup', 'Button', 'Toolbar', 'List', 'ActionSheet', 'Autocomplete', 'CheckBox', 'DateBox', 'Menu', 'SelectBox', 'Tabs', 'TextBox', 'ButtonGroup', 'DropDownButton', 'ScrollView', 'Validation', 'Box', 'Calendar', 'TreeView', 'LoadPanel', 'LoadIndicator', 'DropDownBox', 'NumberBox'], 'Calendar': ['Button'], 'TreeView': ['CheckBox', 'LoadIndicator', 'Validation'], 'NumberBox': ['Validation', 'Button'], 'TextArea': ['TextBox', 'Validation', 'Button'], 'TileView': ['ScrollView', 'LoadPanel', 'LoadIndicator'], 'Toast': [], 'ProgressBar': [], 'Tooltip': ['Popover', 'Popup', 'Button', 'Toolbar', 'List', 'ActionSheet', 'Autocomplete', 'CheckBox', 'DateBox', 'Menu', 'SelectBox', 'Tabs', 'TextBox', 'ButtonGroup', 'DropDownButton', 'ScrollView', 'Validation', 'Box', 'Calendar', 'TreeView', 'LoadPanel', 'LoadIndicator', 'DropDownBox', 'NumberBox'], 'Slider': [], 'RangeSlider': ['Slider'], 'Gallery': [], 'Lookup': ['Popover', 'TextBox', 'DropDownBox', 'List', 'DropDownButton', 'Popup', 'Validation', 'Button', 'ButtonGroup', 'Toolbar', 'ScrollView', 'ActionSheet', 'Autocomplete', 'CheckBox', 'DateBox', 'Menu', 'SelectBox', 'Tabs', 'LoadPanel', 'LoadIndicator', 'Box', 'Calendar', 'TreeView', 'NumberBox'], 'TagBox': ['SelectBox', 'DropDownBox', 'List', 'TextBox', 'DropDownButton', 'Popup', 'Validation', 'Button', 'ButtonGroup', 'Toolbar', 'ScrollView', 'ActionSheet', 'Autocomplete', 'CheckBox', 'DateBox', 'Menu', 'Tabs', 'LoadPanel', 'LoadIndicator', 'Popover', 'Box', 'Calendar', 'TreeView', 'NumberBox'], 'RadioGroup': [], 'Accordion': [], 'SlideOutView': [], 'SlideOut': ['SlideOutView', 'List', 'Button', 'ScrollView', 'LoadPanel', 'LoadIndicator'], 'ColorBox': ['DropDownBox', 'NumberBox', 'TextBox', 'DropDownButton', 'Popup', 'Validation', 'Button', 'ButtonGroup', 'List', 'Toolbar', 'ScrollView', 'ActionSheet', 'Autocomplete', 'CheckBox', 'DateBox', 'Menu', 'SelectBox', 'Tabs', 'LoadPanel', 'LoadIndicator', 'Popover', 'Box', 'Calendar', 'TreeView'], 'DataGrid': ['Form', 'Button', 'TreeView', 'Popup', 'ContextMenu', 'ScrollView', 'FilterBuilder', 'CheckBox', 'Menu', 'List', 'Toolbar', 'LoadIndicator', 'LoadPanel', 'Validation', 'Tooltip', 'TextBox', 'NumberBox', 'SelectBox', 'DateBox', 'ResponsiveBox', 'TabPanel', 'ActionSheet', 'Autocomplete', 'Tabs', 'ButtonGroup', 'DropDownButton', 'Popover', 'Box', 'Calendar', 'DropDownBox', 'MultiView'], 'Form': ['ResponsiveBox', 'TabPanel', 'Validation', 'TextBox', 'NumberBox', 'DateBox', 'Button', 'MultiView', 'Tabs', 'Box', 'Calendar', 'List', 'SelectBox', 'ScrollView', 'LoadPanel', 'LoadIndicator', 'DropDownBox', 'DropDownButton', 'Popup', 'ButtonGroup', 'Toolbar', 'ActionSheet', 'Autocomplete', 'CheckBox', 'Menu', 'Popover', 'TreeView'], 'ContextMenu': [], 'FilterBuilder': ['TreeView', 'Popup', 'TextBox', 'NumberBox', 'CheckBox', 'SelectBox', 'DateBox', 'LoadIndicator', 'Validation', 'Button', 'Toolbar', 'List', 'ActionSheet', 'Autocomplete', 'Menu', 'Tabs', 'ButtonGroup', 'DropDownButton', 'ScrollView', 'Popover', 'Box', 'Calendar', 'LoadPanel', 'DropDownBox'], 'TabPanel': ['MultiView', 'Tabs', 'Button'], 'MultiView': [], 'PivotGrid': ['Popup', 'ContextMenu', 'TreeView', 'Button', 'Toolbar', 'List', 'ActionSheet', 'Autocomplete', 'CheckBox', 'DateBox', 'Menu', 'SelectBox', 'Tabs', 'TextBox', 'ButtonGroup', 'DropDownButton', 'ScrollView', 'Popover', 'Validation', 'Box', 'Calendar', 'LoadPanel', 'LoadIndicator', 'DropDownBox', 'NumberBox'], 'TreeList': ['Form', 'Button', 'TreeView', 'Popup', 'ContextMenu', 'ScrollView', 'FilterBuilder', 'CheckBox', 'Menu', 'List', 'Toolbar', 'LoadIndicator', 'LoadPanel', 'Validation', 'Tooltip', 'TextBox', 'NumberBox', 'SelectBox', 'DateBox', 'ResponsiveBox', 'TabPanel', 'ActionSheet', 'Autocomplete', 'Tabs', 'ButtonGroup', 'DropDownButton', 'Popover', 'Box', 'Calendar', 'DropDownBox', 'MultiView'], 'FileUploader': ['Button', 'ProgressBar'], 'Scheduler': ['Popup', 'Popover', 'Tooltip', 'Button', 'List', 'LoadPanel', 'Form', 'Tabs', 'Calendar', 'Toolbar', 'ActionSheet', 'Autocomplete', 'CheckBox', 'DateBox', 'Menu', 'SelectBox', 'TextBox', 'ButtonGroup', 'DropDownButton', 'ScrollView', 'Validation', 'Box', 'TreeView', 'LoadIndicator', 'DropDownBox', 'NumberBox', 'ResponsiveBox', 'TabPanel', 'MultiView', 'RadioGroup'], 'Drawer': [], 'HtmlEditor': ['Popup', 'List', 'Toolbar', 'SelectBox', 'ColorBox', 'Form', 'Button', 'ActionSheet', 'Autocomplete', 'CheckBox', 'DateBox', 'Menu', 'Tabs', 'TextBox', 'ButtonGroup', 'DropDownButton', 'ScrollView', 'Popover', 'Validation', 'Box', 'Calendar', 'TreeView', 'LoadPanel', 'LoadIndicator', 'DropDownBox', 'NumberBox', 'ResponsiveBox', 'TabPanel', 'MultiView'], 'SpeedDialAction': [], 'FileManager': ['Toast', 'Drawer', 'Menu', 'ContextMenu', 'Popup', 'TextBox', 'Button', 'TreeView', 'DataGrid', 'ProgressBar', 'ScrollView', 'Toolbar', 'CheckBox', 'LoadIndicator', 'Validation', 'List', 'ActionSheet', 'Autocomplete', 'DateBox', 'SelectBox', 'Tabs', 'ButtonGroup', 'DropDownButton', 'Popover', 'Box', 'Calendar', 'LoadPanel', 'DropDownBox', 'NumberBox', 'Form', 'FilterBuilder', 'Tooltip', 'ResponsiveBox', 'TabPanel', 'MultiView'], 'Diagram': ['Drawer', 'LoadIndicator', 'Tooltip', 'Accordion', 'ScrollView', 'Form', 'Toolbar', 'ContextMenu', 'FileUploader', 'Popup', 'Popover', 'Button', 'List', 'ActionSheet', 'Autocomplete', 'CheckBox', 'DateBox', 'Menu', 'SelectBox', 'Tabs', 'TextBox', 'ButtonGroup', 'DropDownButton', 'Validation', 'Box', 'Calendar', 'TreeView', 'LoadPanel', 'DropDownBox', 'NumberBox', 'ResponsiveBox', 'TabPanel', 'MultiView', 'ProgressBar'], 'Gantt': ['ScrollView', 'TreeList', 'LoadPanel', 'LoadIndicator', 'Form', 'Button', 'TreeView', 'Popup', 'ContextMenu', 'FilterBuilder', 'CheckBox', 'Menu', 'List', 'Toolbar', 'Validation', 'Tooltip', 'TextBox', 'NumberBox', 'SelectBox', 'DateBox', 'ResponsiveBox', 'TabPanel', 'ActionSheet', 'Autocomplete', 'Tabs', 'ButtonGroup', 'DropDownButton', 'Popover', 'Box', 'Calendar', 'DropDownBox', 'MultiView'], 'Splitter': [], 'Sortable': [] };
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

    // data for export
    schemeName: string;
    makeSwatch = false;
    needMeta = false;
    outputFile: string;
    textContent: string;
    contentReady = true;

    // unused?
    //fileContent: string[] = [];
    //
    //subscription: Subscription;
    //showOutputFile: boolean;
    //loadIndicatorVisible = false;
    //saveButtonDisabled = false;


    //selectedIndex = 0;
    //timerId = null;

    constructor(
        private importService: ImportService,
        private googleAnalyticsEventsService: GoogleAnalyticsEventsService
    ) {
        const defaultWidgetConfig = (widget): WidgetData => ({
            widget,
            selected: true,
            disabled: true,
            selectByUser: false,
            linksCount: 0,
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

        this.mainData.unshift({
            widget: this.allWidgetsText,
            selected: true,
            disabled: false,
            selectByUser: true,
            linksCount: 0,
            visible: true
        });

        this.dependencies[this.allWidgetsText] = Object.keys(this.dependencies);
    }

    changeStep(index: number): void {
        const START_PAGE_INDEX = 0;
        if(this.viewIndex === START_PAGE_INDEX) {
            if(!this.validate().isValid) return;
        }

        this.viewIndex = index;
    }

    // groupDisabled(groupItems: WidgetData[]): boolean {
    //     return groupItems.findIndex((i) => !i.disabled) < 0;
    // }

    // groupValue(groupItems: WidgetData[]): boolean {
    //     // TODO refactor
    //     let value: boolean = undefined;
    //     if(groupItems.filter((i) => i.selected).length === groupItems.length) {
    //         value = true;
    //     } else if(groupItems.filter((i) => !i.selected).length === groupItems.length) {
    //         value = false;
    //     }

    //     return value;
    // }

    setDependensies(widgetName: string, selected: boolean): void {
        const dependencySetter = (items: WidgetData[], widget: string): void => {
            items.forEach((widgetData) => {
                if(this.dependencies[widget].includes(widgetData.widget)) {
                    if(selected) {
                        widgetData.linksCount++;
                        widgetData.selected = true;
                        widgetData.disabled = true;
                    } else {
                        if(widgetData.linksCount > 0) widgetData.linksCount--;
                        if(!widgetData.linksCount) {
                            widgetData.disabled = false;
                            if(!widgetData.selectByUser) {
                                widgetData.selected = false;
                            }
                        }
                    }
                }
            });
        };

        dependencySetter(this.mainData, widgetName);
        this.treeData.forEach((treeItem) => dependencySetter(treeItem.items, widgetName));
    }

    selectWidget(e: any, item: WidgetData): void {
        if(!e.event) return;
        const selected = item.selected;
        item.selectByUser = selected;

        this.setDependensies(item.widget, selected);
    }

    // selectGroup(e: any, widgetsInGroup: WidgetData[]): void {
    //     if(!e.event) return;
    //     widgetsInGroup.forEach((item) => {
    //         item.selected = e.value;
    //         item.selectByUser = e.value;
    //         this.setDependensies(item.widget, e.value);
    //     });
    // }

    getSelectedWidgets(): string[] {
        const getSelected = (widgetData: WidgetData[]): string[] => widgetData
            .filter((w) => w.selected)
            .map((i) => i.widget);

        let result = getSelected(this.mainData);
        this.treeData.forEach((treeItem) => {
            result.push(...getSelected(treeItem.items));
        });

        if(result.includes(this.allWidgetsText)) result = [];

        return result;
    }

    search(): void {
        const isSearchMatch = (name: string): boolean => name.toLowerCase().indexOf(this.searchValue.toLowerCase()) >= 0;

        this.treeData.forEach((treeItem) => {
            const groupName = treeItem.group;
            treeItem.items.forEach((item: WidgetData) => {
                item.visible = isSearchMatch(groupName) || isSearchMatch(item.widget);
            });
            treeItem.visible = treeItem.items.findIndex((i) => i.visible) >= 0;
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
        //this.showOutputFile = this.outputFile && this.outputFile.length > 0;
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
        const COPY_PAGE_INDEX = 3;
        if(this.needMeta) {
            this.exportMeta(false);
            this.changeStep(COPY_PAGE_INDEX);
        } else {
            this.exportCss(false)
                .then(() => this.changeStep(COPY_PAGE_INDEX))
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
