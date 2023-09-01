import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { DxButtonGroupTypes } from 'devextreme-angular/ui/button-group';
import { DxButtonTypes } from 'devextreme-angular/ui/button';

@Component({
    selector: 'app-button-group',
    templateUrl: './button-group.component.html',
    styleUrls: ['./button-group.component.css']
})
export class ButtonGroupComponent {
    constructor() {
    }

    isExpanded = new BehaviorSubject<boolean>(false);

    buttonModes: DxButtonTypes.ButtonStyle[] = ['contained', 'outlined', 'text'];
    buttonStates: string[] = ['normal', 'hover', 'active', 'focused', 'disable'];

    fullButtonItems: DxButtonGroupTypes.Item[] = [
        {
            icon: 'alignleft',
            text: 'Left',
            type: 'default'
        },
        {
            icon: 'aligncenter',
            text: 'Center',
            type: 'default'
        },
        {
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

    logging(text: string) {
        console.log(text);
    }
}
