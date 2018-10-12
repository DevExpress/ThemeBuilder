import { Component } from '@angular/core';

@Component({
    templateUrl: './import-bootstrap.component.html',
    styleUrls: ['./import-bootstrap.component.css']
})

export class ImportBootstrapComponent {
    tabPanelData = [{
        name: 'Bootstrap 4',
        acceptFormat: '.scss',
        uploadButtonText: 'Upload SCSS Variables'
    }, {
        name: 'Bootstrap 3',
        acceptFormat: '.less',
        uploadButtonText: 'Upload LESS Variables'
    }];
}
