import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { DxButtonTypes } from 'devextreme-angular/ui/button';
import { DxButtonGroupTypes } from 'devextreme-angular/ui/button-group';

type CustomButtonGroupItem = DxButtonGroupTypes.Item & {
    key: string
};

@Component({
    selector: 'app-button-group',
    templateUrl: './button-group.component.html',
    styleUrls: ['./button-group.component.css']
})
export class ButtonGroupComponent {
    constructor() {
    }

    initStateHover(event: DxButtonGroupTypes.ContentReadyEvent) {
        event.element.querySelector('.dx-button:first-child').classList.add('dx-state-hover');
    }

    initStateActive(event: DxButtonGroupTypes.ContentReadyEvent) {
        event.element.querySelector('.dx-button:first-child').classList.add('dx-state-active');
    }

    initStateFocused(event: DxButtonGroupTypes.ContentReadyEvent) {
        event.element.querySelector('.dx-button:first-child').classList.add('dx-state-focused');
    }

    initStateDisabled(event: DxButtonGroupTypes.ContentReadyEvent) {
        event.element.querySelectorAll('.dx-button').forEach((button) => {
            button.classList.add('dx-state-disabled');
        });
    }

    isExpanded = new BehaviorSubject<boolean>(false);

    buttonModes: DxButtonTypes.ButtonStyle[] = ['contained', 'outlined', 'text'];

    fullButtonItems: CustomButtonGroupItem[] = [
        {
            key: 'left',
            icon: 'alignleft',
            text: 'Left',
            type: 'default'
        },
        {
            key: 'center',
            icon: 'aligncenter',
            text: 'Center',
            type: 'default'
        },
        {
            key: 'right',
            icon: 'alignright',
            text: 'Right',
            type: 'default'
        }
    ];

    shortButtonItems: DxButtonGroupTypes.Item[] = [
        {
            icon: 'alignleft',
            type: 'default'
        },
        {
            icon: 'aligncenter',
            type: 'default'
        },
        {
            icon: 'alignright',
            type: 'default'
        }
    ];

    widgetGroup = 'button-group';
}
