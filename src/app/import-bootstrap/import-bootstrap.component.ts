import { Component } from '@angular/core';

@Component({
    templateUrl: './import-bootstrap.component.html',
    styleUrls: ['./import-bootstrap.component.css']
})

export class ImportBootstrapComponent {
    tabPanelData = [{
        name: 'Bootstrap 4',
        uploadButtonText: 'Upload SCSS Variables',
        commonText: `You can use colors defined in a custom theme in the current Generic theme
        if the initial theme is based on Bootstrap and colors are defined in the "_variables.scss" file.
        Upload this file to apply colors defined in it.`
    }, {
        name: 'Bootstrap 3',
        uploadButtonText: 'Upload Less Variables',
        commonText: `You can use colors defined in a custom theme in the current Generic theme
        if the initial theme is based on Bootstrap and colors are defined in the less file.
        Upload this file to apply colors defined in it.`
    }];
}
