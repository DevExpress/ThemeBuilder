import { Component, signal } from '@angular/core';

@Component({
    selector: 'app-scrollview',
    templateUrl: './scrollview.component.html',
    styleUrls: ['./scrollview.component.css'],
    standalone: false
})
export class ScrollviewComponent {
    widgetGroup = 'scrollview';
    isExpanded = signal<boolean>(false);
}
