import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
    selector: 'app-buttons',
    templateUrl: './buttons.component.html',
    styleUrls: ['./buttons.component.css']
})

export class ButtonsComponent {
    constructor() {
        this.baseOptions = [
            { text: 'Normal', type: 'normal', fontStyles: this.getFontStyles('normal') },
            { text: 'Success', type: 'success', fontStyles: this.getFontStyles('success') },
            { text: 'Default', type: 'default', fontStyles: this.getFontStyles('default') },
            { text: 'Danger', type: 'danger', fontStyles: this.getFontStyles('danger') }
        ];
    }

    widgetGroup = 'buttons';
    isExpanded = new BehaviorSubject<boolean>(false);
    baseOptions: any[];
    buttonModes: string[] = ['contained', 'outlined', 'text'];
    buttonGroupModes: string[] = ['contained', 'outlined', 'text'];

    getFontStyles = (type: string) => [
        {
            icon: 'bold',
            style: 'bold',
            hint: 'Bold',
            type: type
        },
        {
            icon: 'italic',
            style: 'italic',
            hint: 'Italic',
            type: type
        },
        {
            icon: 'underline',
            style: 'underline',
            hint: 'Underlined',
            type: type
        }
    ];
}

export class FontStyle {
    icon: string;
    style: string;
    hint: string;
    type: string;
}
