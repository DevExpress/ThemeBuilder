import { Component, ViewChild, OnDestroy, OnInit } from '@angular/core';
import { ImportService } from '../../../import.service';
import { fileSaver } from 'devextreme/client_exporter';
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
    outputFile: string;
    subscription: Subscription;
    showOutputFile: boolean;

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

    exportCss(): void {
        if(!this.validate().isValid) return;
        this.importService.exportCss(this.schemeName, this.makeSwatch).then(css => {
            fileSaver.saveAs(this.getFileNameWithoutExt(), 'CSS', new Blob([css]));
            this.popup.hide();
        });
    }

    exportMeta(): void {
        if(!this.validate().isValid) return;
        const metaString = this.importService.exportMetadata(this.schemeName, this.makeSwatch);
        fileSaver._saveBlobAs(this.getFileNameWithoutExt() + '.json', 'JSON', new Blob([metaString]));
        this.popup.hide();
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
