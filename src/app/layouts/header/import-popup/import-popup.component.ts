import { Component, ViewChild } from '@angular/core';
import { GoogleAnalyticsEventsService } from '../../../google-analytics-events.service';
import { ImportService } from '../../../import.service';
import { PopupComponent } from '../popup/popup.component';

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
        text: 'Bootstrap 5',
        value: 0,
        version: 5,
        acceptFormat: '.scss',
        uploadButtonText: 'Upload SCSS Variables'
    }, {
        text: 'Bootstrap 4',
        value: 1,
        version: 4,
        acceptFormat: '.scss',
        uploadButtonText: 'Upload SCSS Variables'
    }, {
        text: 'Bootstrap 3',
        value: 2,
        version: 3,
        acceptFormat: '.less',
        uploadButtonText: 'Upload LESS Variables'
    }];

    selectedIndex = 0;
    importValue = '';

    applyClick(t): void {
        this.googleAnalyticsEventsService.emitEvent('import', 'metadata');

        this.importService.importMetadata(t.value, 'advanced').then(() => {
            this.popup.hide();
            t.value = '';
        });
    }

    imported(): void {
        this.popup.hide();
    }
}
