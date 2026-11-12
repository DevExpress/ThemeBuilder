import { Component, ChangeDetectionStrategy, signal } from '@angular/core';
import validationEngine from 'devextreme/ui/validation_engine';
import { onExpandedChange } from '../expandable';

@Component({
    selector: 'app-editors',
    templateUrl: './editors.component.html',
    styleUrls: ['./editors.component.css'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class EditorsComponent {
    widgetGroup = 'editors';
    isExpanded = signal<boolean>(false);
    dropDownOptions = {hideOnParentScroll: true};
    labelMode = 'floating';
    stylingModeValue = 'outlined';

    constructor() {
        onExpandedChange(this.isExpanded, (expanded) => {
            if(expanded) setTimeout(() => validationEngine.validateGroup());
        });
    }
}
