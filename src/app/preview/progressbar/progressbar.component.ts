import { Component, ChangeDetectionStrategy } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
    selector: 'app-progressbars',
    templateUrl: './progressbar.component.html',
    styleUrls: ['./progressbar.component.css'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class ProgressbarComponent {
    widgetGroup = 'progressbars';
    isExpanded = new BehaviorSubject<boolean>(false);
}
