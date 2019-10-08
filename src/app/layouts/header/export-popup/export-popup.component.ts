import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { fileSaver } from 'devextreme/exporter';
import validationEngine from 'devextreme/ui/validation_engine';
import { saveAs } from 'file-saver';
import * as JSZip from 'jszip';
import * as JSZipUtils from 'jszip-utils';
import { Subscription } from 'rxjs';
import { GoogleAnalyticsEventsService } from '../../../google-analytics-events.service';
import { ImportService } from '../../../import.service';
import { PopupComponent } from '../popup/popup.component';

@Component({
    selector: 'app-export-popup',
    templateUrl: './export-popup.component.html',
    styleUrls: ['./export-popup.component.css']
})
export class ExportPopupComponent implements OnInit, OnDestroy {
    @ViewChild('popup') popup: PopupComponent;
    schemeName: string;
    makeSwatch = false;
    fileContent: string[] = [];
    outputFile: string;
    subscription: Subscription;
    showOutputFile: boolean;
    loadIndicatorVisible = false;
    saveButtonDisabled = false;

    selectedIndex = 0;
    timerId = null;

    constructor(
        private importService: ImportService,
        private googleAnalyticsEventsService: GoogleAnalyticsEventsService
    ) { }

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
        this.showOutputFile = this.outputFile && this.outputFile.length > 0;
    }

    fileSave(cssContent): void {
        fileSaver.saveAs(this.getFileNameWithoutExt(), 'CSS', new Blob([cssContent]));
    }

    popupShown(): void {
        this.displayFileContent(0);
    }

    exportCss(): void {
        if(!this.validate().isValid) return;

        this.googleAnalyticsEventsService.emitEvent(
            'export',
            'save css (' + this.importService.getThemeName() + ')');

        const fileContentReady = !this.loadIndicatorVisible;
        if(fileContentReady) {
            this.fileSave(this.fileContent[0]);
            return;
        }
        this.importService.exportCss(this.schemeName, this.makeSwatch).then((css) => {
            this.fileSave(css);
            this.popup.hide();
        });
    }

    exportMeta(): void {
        if(!this.validate().isValid) return;

        this.googleAnalyticsEventsService.emitEvent(
            'export',
            'save metadata (' + this.importService.getThemeName() + ')');

        const metaString = this.importService.exportMetadata(this.schemeName, this.makeSwatch);
        fileSaver._saveBlobAs(this.getFileNameWithoutExt() + '.json', 'JSON', new Blob([metaString]));
        this.popup.hide();
    }

    exportZip(): void {
        const zip = new JSZip();
        const fontExtension = ['ttf', 'woff', 'woff2'];
        const fontFilePath = 'icons/dxicons' + (this.importService.getThemeName() === 'generic' ? '' : 'material');

        fontExtension.forEach((extension) => {
            zip.file(`${fontFilePath}.${extension}`, JSZipUtils.getBinaryContent(`content/css/${fontFilePath}.${extension}`));
        });

        const fileName = 'dx.' + this.importService.getThemeName() + '.' + this.schemeName;
        zip.file(fileName + '.css', this.importService.exportCss(this.schemeName, this.makeSwatch));

        zip.generateAsync({type: 'blob'})
            .then((content) => {
                saveAs(content, fileName + '.zip');
            });
    }

    displayCss(): void {
        this.importService.exportCss(this.schemeName, this.makeSwatch).then((css) => {
            this.fileContent[0] = css;
            this.loadIndicatorVisible = false;
            this.saveButtonDisabled = false;
        });
    }

    displayMeta(): void {
        this.fileContent[1] = this.importService.exportMetadata(this.schemeName, this.makeSwatch);
    }

    displayFileContent(timeout: number): void {
        if(!this.validate().isValid) return;

        this.loadIndicatorVisible = true;
        this.saveButtonDisabled = true;

        clearTimeout(this.timerId);
        this.timerId = setTimeout(() => {
            this.displayCss();
        }, timeout);

        this.displayMeta();
    }

    copyFileContent(): void {
        this.googleAnalyticsEventsService.emitEvent(
            'export',
            'copy ' + (this.selectedIndex ? 'metadata' : 'css') + ' (' + this.importService.getThemeName() + ')');
    }

    schemeNameChange(): void {
        if(this.makeSwatch) {
            this.displayFileContent(1000);
        } else {
            this.displayMeta();
        }
    }

    swatchChange(): void {
        this.displayFileContent(0);
    }

    ngOnInit(): void {
        this.setParameters();
        this.importService.changed.subscribe(() => this.setParameters());
    }

    ngOnDestroy(): void {
        if(this.subscription) {
            this.subscription.unsubscribe();
        }
    }
}
