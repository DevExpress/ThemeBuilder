import { Component, ChangeDetectionStrategy, signal } from '@angular/core';

@Component({
    selector: 'app-scrollview',
    templateUrl: './scrollview.component.html',
    styleUrls: ['./scrollview.component.css'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class ScrollviewComponent {
    widgetGroup = 'scrollview';
    isExpanded = signal<boolean>(false);
}
