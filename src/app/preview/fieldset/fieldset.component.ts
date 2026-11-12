import { Component, ChangeDetectionStrategy, signal } from '@angular/core';

@Component({
    selector: 'app-fieldset',
    templateUrl: './fieldset.component.html',
    styleUrls: ['./fieldset.component.css'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class FieldSetComponent {
    widgetGroup = 'fieldset';
    isExpanded = signal<boolean>(false);
}
