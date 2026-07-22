import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
    selector: 'app-fieldset',
    templateUrl: './fieldset.component.html',
    styleUrls: ['./fieldset.component.css'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class FieldSetComponent {
    widgetGroup = 'fieldset';
    isExpanded = new Subject<boolean>();
}
