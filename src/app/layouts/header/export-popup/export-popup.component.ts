import { Component, ViewChild, OnDestroy, OnInit } from '@angular/core';
import { ImportService } from '../../../import.service';
import { fileSaver } from 'devextreme/exporter';
import { PopupComponent } from '../popup/popup.component';
import { Subscription } from 'rxjs';
import validationEngine from 'devextreme/ui/validation_engine';
import * as JSZip from 'jszip';
import * as JSZipUtils from 'jszip-utils';
import { saveAs } from "file-saver";

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
    saveButtonDisabled = false;

    selectedIndex = 0;
    timerId = null;

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
        this.displayFileContent(0);
    }

    exportCss(): void {
        if(!this.validate().isValid) return;
        const fileContentReady = !this.loadIndicatorVisible;
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

    exportZip():void{
        var zip=new JSZip();
        var generic=["content/css/icons/dxicons.ttf","content/css/icons/dxicons.woff","content/css/icons/dxicons.woff2"];
        var material=["content/css/icons/dxiconsmaterial.ttf","content/css/icons/dxiconsmaterial.woff","content/css/icons/dxiconsmaterial.woff2"];
        var choice=[];
        var name="dx."+this.importService.getThemeName()+"."+this.schemeName+".css";

        if(this.importService.getThemeName()=="generic"){
            choice=generic;
        }
        else{
            choice=material;
        }

        for(var i=0;i<3;i++){
            zip.file(choice[i],JSZipUtils.getBinaryContent(choice[i]));
            if(i==2){
                this.importService.exportCss(this.schemeName,this.makeSwatch).then(css=>{
                    zip.file(name,css);
                    zip.generateAsync({type:'blob'})
                    .then(function(content){
                        saveAs(content,name+'.zip');
                    });
                });
            }
        }
    }


    displayCss() {
        this.importService.exportCss(this.schemeName, this.makeSwatch).then(css => {
            this.fileContent[0] = css;
            this.loadIndicatorVisible = false;
            this.saveButtonDisabled = false;
        });
    }

    displayMeta() {
        this.fileContent[1] = this.importService.exportMetadata(this.schemeName, this.makeSwatch);
    }

    displayFileContent(timeout: number) {
        if(!this.validate().isValid) return;

        this.loadIndicatorVisible = true;
        this.saveButtonDisabled = true;

        clearTimeout(this.timerId);
        this.timerId = setTimeout(() => {
            this.displayCss();
        }, timeout);

        this.displayMeta();
    }

    schemeNameChange() {
        if(this.makeSwatch)
            this.displayFileContent(1000);
        else
            this.displayMeta();
    }

    swatchChange() {
        this.displayFileContent(0);
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
