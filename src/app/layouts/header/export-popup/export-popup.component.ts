import { Component, ViewChild, OnDestroy, OnInit, NgZone } from '@angular/core';
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
    showOutputFile: boolean;

    constructor(private importService: ImportService, private ngZone: NgZone) { }

    setParameters() {
        const savedMeta = this.importService.getSavedMetadata();

        this.schemeName = this.importService.getColorSchemeName();
        this.outputFile = savedMeta.outputFile;
        this.makeSwatch = !!savedMeta.makeSwatch;
        this.outputFileName = this.outputFile &&
                              this.outputFile.replace(/^.*[\\\/]/, '').replace(/\.(css|json|less|scss)/, '') ||
                              `dx.${this.importService.getThemeName()}.${this.schemeName}`;
    }

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
        this.setParameters();
        this.subscription = this.importService.changed.subscribe(change => this.ngZone.run((change) => {
            this.setParameters();
            this.showOutputFile = this.outputFile && this.outputFile.length > 0;
        }));
    }

    ngOnDestroy() {
        if(this.subscription) {
            this.subscription.unsubscribe();
        }
    }
}
