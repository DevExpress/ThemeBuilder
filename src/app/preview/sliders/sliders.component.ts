import { Component, ChangeDetectionStrategy, signal } from '@angular/core';

@Component({
    selector: 'app-sliders',
    templateUrl: './sliders.component.html',
    styleUrls: ['./sliders.component.css'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class SlidersComponent {
    widgetGroup = 'sliders';
    isExpanded = signal<boolean>(false);
}
