import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
    selector: 'app-progressbars',
    templateUrl: './progressbar.component.html',
    styleUrls: ['./progressbar.component.css']
})
export class ProgressbarComponent {
    widgetGroup = 'progressbars';
    isExpanded = new BehaviorSubject<boolean>(false);
}
