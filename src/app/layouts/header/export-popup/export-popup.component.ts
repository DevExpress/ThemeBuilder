import { Component, Input } from '@angular/core';
import { ImportService } from '../../../import.service';
import { fileSaver } from 'devextreme/client_exporter';

@Component({
    selector: 'app-export-popup',
    templateUrl: './export-popup.component.html',
    styleUrls: ['./export-popup.component.css']
})
export class ExportPopupComponent {

    @Input() visible: boolean;
    schemeName: string;
    makeSwatch = false;
    outputFile: string;
    outputFileName: string;

    constructor(private importService: ImportService) {
        this.schemeName = this.importService.getColorSchemeName();
        this.outputFile = this.importService.getSavedMetadata().outputFile;
        this.outputFileName = this.outputFile &&
                              this.outputFile.replace(/^.*[\\\/]/, '') ||
                              `dx.${this.importService.getThemeName()}.${this.schemeName}`;
    }

    exportCss(): void {
        this.importService.exportCss(this.schemeName, this.makeSwatch).then(css => {
            fileSaver.saveAs(this.outputFileName, 'CSS', new Blob([css]));
        });
    }

    exportMeta(): void {
        const metaString = this.importService.exportMetadata(this.schemeName, this.makeSwatch);
        fileSaver.saveAs(this.outputFileName, 'JSON', new Blob([metaString]));
    }
}
