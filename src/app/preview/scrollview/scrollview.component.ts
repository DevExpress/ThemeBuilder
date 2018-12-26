import { Component } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
    selector: 'app-scrollview',
    templateUrl: './scrollview.component.html',
    styleUrls: ['./scrollview.component.css']
})
export class ScrollviewComponent {
    widgetGroup = 'scrollview';
    isExpanded = new Subject<boolean>();
}
