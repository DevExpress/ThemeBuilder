import { Component } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
    selector: 'app-fieldset',
    templateUrl: './fieldset.component.html',
    styleUrls: ['./fieldset.component.css']
})
export class FieldSetComponent {
    widgetGroup = 'fieldset';
    isExpanded = new Subject<boolean>();
}
