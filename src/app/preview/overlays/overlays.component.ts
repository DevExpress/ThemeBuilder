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
}
