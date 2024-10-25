import { Component } from '@angular/core';

@Component({
    templateUrl: './import-bootstrap.component.html',
    styleUrls: ['./import-bootstrap.component.css']
})
export class ImportBootstrapComponent {
    bootstrapVariantsData = [{
        text: 'Bootstrap 5',
        value: 0,
        version: 5,
        acceptFormat: '.scss',
        uploadButtonText: 'Upload SCSS Variables'
    }];

    selectedIndex = 0;
}
