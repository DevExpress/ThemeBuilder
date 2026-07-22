import { Component, ChangeDetectionStrategy } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
    selector: 'app-sliders',
    templateUrl: './sliders.component.html',
    styleUrls: ['./sliders.component.css'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class SlidersComponent {
    widgetGroup = 'sliders';
    isExpanded = new BehaviorSubject<boolean>(false);
}
