import { Component, signal } from '@angular/core';

@Component({
    selector: 'app-progressbars',
    templateUrl: './progressbar.component.html',
    styleUrls: ['./progressbar.component.css'],
    standalone: false
})
export class ProgressbarComponent {
    widgetGroup = 'progressbars';
    isExpanded = signal<boolean>(false);
}
