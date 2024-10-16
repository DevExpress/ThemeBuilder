import { Component } from '@angular/core';

@Component({
    templateUrl: './import-bootstrap.component.html',
    styleUrls: ['./import-bootstrap.component.css']
})

export class ImportBootstrapComponent {
    tabPanelData = [{
        name: 'Bootstrap 5',
        version: 5,
        acceptFormat: '.scss',
        uploadButtonText: 'Upload SCSS Variables'
    }];
}
