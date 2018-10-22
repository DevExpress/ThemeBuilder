import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
    selector: 'app-editors',
    templateUrl: './editors.component.html',
    styleUrls: ['./editors.component.css']
})
export class EditorsComponent {
    widgetGroup = 'editors';
    isExpanded = new BehaviorSubject<boolean>(false);
}
