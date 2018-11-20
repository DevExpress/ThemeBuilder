import { Component } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
    selector: 'app-overlays',
    templateUrl: './overlays.component.html',
    styleUrls: ['./overlays.component.css']
})
export class OverlaysComponent  {
    widgetGroup = 'overlays';
    isExpanded = new Subject<boolean>();

    actionSheetData: Array<any> = [
        { 'text': 'Command 1' },
        { 'text': 'Command 2' },
        { 'text': 'Command 3' },
        { 'text': 'Command 4' }
    ];
}
