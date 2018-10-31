import { Component,Input } from '@angular/core';
import { ImportService } from '../../../import.service';
import { alert } from 'devextreme/ui/dialog';

@Component({
    selector: 'app-import-popup',
    templateUrl: './import-popup.component.html',
    styleUrls: ['./import-popup.component.css']
})
export class ImportPopupComponent {
    @Input() visible: boolean;

    constructor(private importService: ImportService) { }

    tabPanelData = [{
        name: 'Bootstrap 4',
        version: 4,
        acceptFormat: '.scss',
        uploadButtonText: 'Upload SCSS Variables'
    }, {
        name: 'Bootstrap 3',
        version: 3,
        acceptFormat: '.less',
        uploadButtonText: 'Upload LESS Variables'
    }];

    selectedIndex = 0;

    applyClick(t) {
        this.importService.importMetadata(t.value, 'advanced').then(() => {
            this.visible = false;
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
                this.importService.importBootstrapVariables(fileReader.result, this.tabPanelData[this.selectedIndex].version, 'advanced');
                this.visible = false;
            };
            fileReader.readAsText(file);
        }
    }
}
