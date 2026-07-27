import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
    selector: 'app-scrollview',
    templateUrl: './scrollview.component.html',
    styleUrls: ['./scrollview.component.css'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class ScrollviewComponent {
    widgetGroup = 'scrollview';
    isExpanded = new Subject<boolean>();
}
