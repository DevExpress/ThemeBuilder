import { Component, ViewChild } from '@angular/core';
import { ImportService } from '../../../import.service';
import { alert } from 'devextreme/ui/dialog';
import { PopupComponent } from '../popup/popup.component';
import { GoogleAnalyticsEventsService } from '../../../google-analytics-events.service';

@Component({
    selector: 'app-import-popup',
    templateUrl: './import-popup.component.html',
    styleUrls: ['./import-popup.component.css']
})
export class ImportPopupComponent {
    @ViewChild('popup') popup: PopupComponent;

    constructor(
        private importService: ImportService,
        private googleAnalyticsEventsService: GoogleAnalyticsEventsService
    ) { }

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
    importValue = '';

    applyClick(t) {
        this.googleAnalyticsEventsService.emitEvent('ThemeBuilder', 'import', 'metadata');

        this.importService.importMetadata(t.value, 'advanced').then(() => {
            this.popup.hide();
            t.value = '';
        }, () => {
            alert('Metadata has a wrong format.', 'Error');
        });
    }

    imported() {
        this.popup.hide();
    }
}
