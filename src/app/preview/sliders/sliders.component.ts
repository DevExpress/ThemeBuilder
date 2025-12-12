import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
    selector: 'app-sliders',
    templateUrl: './sliders.component.html',
    styleUrls: ['./sliders.component.css'],
    standalone: false
})
export class SlidersComponent {
    widgetGroup = 'sliders';
    isExpanded = new BehaviorSubject<boolean>(false);
}
