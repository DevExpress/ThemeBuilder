import { Component } from '@angular/core';
// import { BehaviorSubject } from 'rxjs';
import { DxButtonGroupTypes } from 'devextreme-angular/ui/button-group';
import { DxButtonTypes } from 'devextreme-angular/ui/button';

type ButtonGroupItem = DxButtonGroupTypes.Item & {
    style: string;
};

@Component({
    selector: 'app-button-group',
    templateUrl: './button-group.component.html',
    styleUrls: ['./button-group.component.css']
})
export class ButtonGroupComponent {
    // isExpanded = new BehaviorSubject<boolean>(false);
    buttonModes: DxButtonTypes.ButtonStyle[] = ['contained', 'outlined', 'text'];
    buttonItems: ButtonGroupItem[] = [
        {
            icon: 'bold',
            style: 'bold',
            hint: 'Bold',
            type: 'default'
        },
        {
            icon: 'italic',
            style: 'italic',
            hint: 'Italic',
            type: 'default'
        },
        {
            icon: 'underline',
            style: 'underline',
            hint: 'Underlined',
            type: 'default'
        }
    ];

    constructor() {
    }
}
