import { Component, ViewChild } from '@angular/core';
import { ImportService } from '../../../import.service';
import { alert } from 'devextreme/ui/dialog';
import { PopupComponent } from '../popup/popup.component';

@Component({
    selector: 'app-import-popup',
    templateUrl: './import-popup.component.html',
    styleUrls: ['./import-popup.component.css']
})
export class ImportPopupComponent {
    @ViewChild('popup') popup: PopupComponent;

    constructor(private importService: ImportService) { }

    radioGroupData = [{
        text: 'Bootstrap 4',
        value: 0,
        version: 4,
        acceptFormat: '.scss',
        uploadButtonText: 'Upload SCSS Variables'
    }, {
        text: 'Bootstrap 3',
        value: 1,
        version: 3,
        acceptFormat: '.less',
        uploadButtonText: 'Upload LESS Variables'
    }];

    selectedIndex = 0;

    applyClick(t) {
        this.importService.importMetadata(t.value, 'advanced').then(() => {
            this.popup.hide();
        }, () => {
            alert('It is unable to import this metadata.', 'ThemeBuilder');
        });
    }

    uploaded(e) {
        const file = e.value[0];
        if(file) {
            let fileReader: FileReader;
            fileReader = new FileReader();
            fileReader.onload = () => {
                this.importService.importBootstrapVariables(fileReader.result, this.radioGroupData[this.selectedIndex].version, 'advanced');
                this.popup.hide();
            };
            fileReader.readAsText(file);
        }
    }
}
