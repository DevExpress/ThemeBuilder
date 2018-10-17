import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
    selector: 'app-buttons',
    templateUrl: './buttons.component.html',
    styleUrls: ['./buttons.component.css']
})
export class ButtonsComponent {
    widgetGroup = 'buttons';
    isExpanded = new BehaviorSubject<boolean>(false);
}
