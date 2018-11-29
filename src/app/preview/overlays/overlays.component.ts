import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
    selector: 'app-overlays',
    templateUrl: './overlays.component.html',
    styleUrls: ['./overlays.component.css']
})
export class OverlaysComponent  {
    widgetGroup = 'overlays';
    isExpanded = new BehaviorSubject<boolean>(false);

    actionSheetData: Array<any> = [
        { 'text': 'Command 1' },
        { 'text': 'Command 2' },
        { 'text': 'Command 3' },
        { 'text': 'Command 4' }
    ];

    toastInit(e) {
        const toastContainer = this.isExpanded.getValue() ? '#target-block': '#toast-block';
        e.component.option('container', toastContainer);
    }
}
