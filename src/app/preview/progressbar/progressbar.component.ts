import { Component, ChangeDetectionStrategy, signal } from '@angular/core';

@Component({
    selector: 'app-progressbars',
    templateUrl: './progressbar.component.html',
    styleUrls: ['./progressbar.component.css'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class ProgressbarComponent {
    widgetGroup = 'progressbars';
    isExpanded = signal<boolean>(false);
}
