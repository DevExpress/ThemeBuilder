import { Component, ViewChild, OnDestroy, OnInit } from '@angular/core';
import { ImportService } from '../../../import.service';
import { fileSaver } from 'devextreme/exporter';
import { PopupComponent } from '../popup/popup.component';
import { Subscription } from 'rxjs';
import validationEngine from 'devextreme/ui/validation_engine';

@Component({
    selector: 'app-export-popup',
    templateUrl: './export-popup.component.html',
    styleUrls: ['./export-popup.component.css']
})
export class ExportPopupComponent implements OnInit, OnDestroy {
    @ViewChild('popup') popup: PopupComponent;
    schemeName: string;
    makeSwatch = false;
    fileContent: Array<string> = [];
    outputFile: string;
    subscription: Subscription;
    showOutputFile: boolean;
    loadIndicatorVisible = false;
    applyButtonDisabled = true;
    settingDisabled = false;

    selectedIndex = 0;

    constructor(private importService: ImportService) { }

    getFileNameWithoutExt(): string {
        return this.outputFile &&
               this.outputFile.replace(/^.*[\\\/]/, '').replace(/\.(css|json|less|scss)/, '') ||
               `dx.${this.importService.getThemeName()}.${this.schemeName}`;
    }

    validate() {
        return validationEngine.validateGroup();
    }

    setParameters(): void {
        const savedMeta = this.importService.getSavedMetadata();

        this.schemeName = this.importService.getColorSchemeName();
        this.outputFile = savedMeta.outputFile;
        this.makeSwatch = !!savedMeta.makeSwatch;
        this.showOutputFile = this.outputFile && this.outputFile.length > 0;
    }

    fileSave(cssContent) {
        fileSaver.saveAs(this.getFileNameWithoutExt(), 'CSS', new Blob([cssContent]));
    }


    popupShown() {
        this.displayFileContent();
    }

    exportCss(): void {
        if(!this.validate().isValid) return;
        const fileContentReady = this.applyButtonDisabled && !this.loadIndicatorVisible;
        if(fileContentReady) {
            this.fileSave(this.fileContent[0]);
            return;
        }
        this.importService.exportCss(this.schemeName, this.makeSwatch).then(css => {
            this.fileSave(css);
            this.popup.hide();
        });
    }

    exportMeta(): void {
        if(!this.validate().isValid) return;
        const metaString = this.importService.exportMetadata(this.schemeName, this.makeSwatch);
        fileSaver._saveBlobAs(this.getFileNameWithoutExt() + '.json', 'JSON', new Blob([metaString]));
        this.popup.hide();
    }

    displayFileContent() {
        if(!this.validate().isValid) return;

        this.applyButtonDisabled = this.settingDisabled = this.loadIndicatorVisible = true;
        this.importService.exportCss(this.schemeName, this.makeSwatch).then(css => {
            this.fileContent[0] = css;
            this.loadIndicatorVisible = false;
            this.settingDisabled = false;
            this.applyButtonDisabled = true;
        });
        this.fileContent[1] = this.importService.exportMetadata(this.schemeName, this.makeSwatch);
    }

    valueChange() {
        this.applyButtonDisabled = false;
    }

    ngOnInit() {
        this.setParameters();
        this.importService.changed.subscribe(() => this.setParameters());
    }

    ngOnDestroy() {
        if(this.subscription) {
            this.subscription.unsubscribe();
        }
    }
}
