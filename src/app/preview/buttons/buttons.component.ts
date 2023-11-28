import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { DxButtonTypes } from 'devextreme-angular/ui/button';

@Component({
    selector: 'app-buttons',
    templateUrl: './buttons.component.html',
    styleUrls: ['./buttons.component.css']
})

export class ButtonsComponent {
    typeValue = 'default';

    initStateHover(event: DxButtonTypes.ClickEvent) {
        event.component.element().classList.add('dx-state-hover');
    }

    initStateActive(event: DxButtonTypes.ClickEvent) {
        event.component.element().classList.add('dx-state-active');
    }

    initStateFocused(event: DxButtonTypes.ClickEvent) {
        event.component.element().classList.add('dx-state-focused');
    }

    isExpanded = new BehaviorSubject<boolean>(false);

    buttonModes: DxButtonTypes.ButtonStyle[] = ['contained', 'outlined', 'text'];

    widgetGroup = 'buttons';
}
