import { Component, ViewChild, OnDestroy, OnInit } from '@angular/core';
import { ImportService } from '../../../import.service';
import { fileSaver } from 'devextreme/client_exporter';
import { PopupComponent } from '../popup/popup.component';
import { Subscription } from 'rxjs';

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
    outputFileName: string;
    subscription: Subscription;

    constructor(private importService: ImportService) { }

    exportCss(): void {
        this.importService.exportCss(this.schemeName, this.makeSwatch).then(css => {
            fileSaver.saveAs(this.outputFileName, 'CSS', new Blob([css]));
            this.popup.hide();
        });
    }

    exportMeta(): void {
        const metaString = this.importService.exportMetadata(this.schemeName, this.makeSwatch);
        fileSaver._saveBlobAs(this.outputFileName + '.json', 'JSON', new Blob([metaString]));
        this.popup.hide();
    }

    ngOnInit() {
        this.schemeName = this.importService.getColorSchemeName();
        this.outputFile = this.importService.getSavedMetadata().outputFile;
        // TODO make this on every value change
        this.outputFileName = this.outputFile &&
                              this.outputFile.replace(/^.*[\\\/]/, '') ||
                              `dx.${this.importService.getThemeName()}.${this.schemeName}`;

        this.subscription = this.importService.changed.subscribe(changed => {
            if(changed) {
                console.log(this.importService.getSavedMetadata().outputFile);
                this.outputFile = this.importService.getSavedMetadata().outputFile;
            }
        });
    }

    ngOnDestroy() {
        if(this.subscription) {
            this.subscription.unsubscribe();
        }
    }
}
