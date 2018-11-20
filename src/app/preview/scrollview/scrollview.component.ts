import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
    selector: 'app-scrollview',
    templateUrl: './scrollview.component.html',
    styleUrls: ['./scrollview.component.css']
})
export class ScrollviewComponent {
    widgetGroup = 'scrollview';
    isExpanded = new BehaviorSubject<boolean>(false);
}
