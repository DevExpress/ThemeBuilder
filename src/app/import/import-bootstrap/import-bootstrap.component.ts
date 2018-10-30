import { Component } from '@angular/core';
import { ImportService } from '../../import.service';

@Component({
    templateUrl: './import-bootstrap.component.html',
    styleUrls: ['./import-bootstrap.component.css']
})

export class ImportBootstrapComponent {
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

    constructor(private importService: ImportService) {}

    uploaded(e) {
        const file = e.value[0];
        if(file) {
            let fileReader: FileReader;
            fileReader = new FileReader();
            fileReader.onload = () => {
                this.importService.importBootstrapVariables(fileReader.result, this.tabPanelData[this.selectedIndex].version, 'advanced');
            };
            fileReader.readAsText(file);
        }
    }
}
