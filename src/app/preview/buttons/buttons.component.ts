import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
    selector: 'app-buttons',
    templateUrl: './buttons.component.html',
    styleUrls: ['./buttons.component.css']
})
export class ButtonsComponent {
    widgetGroup = 'buttons';
    isExpanded = new BehaviorSubject<boolean>(false);

    baseOptions: Array<any> = [
        { text: 'Normal', type: 'normal' },
        { text: 'Success', type: 'success' },
        { text: 'Default', type: 'default' },
        { text: 'Danger', type: 'danger' }
    ];

    modes: Array<string> = [ 'contained', 'outlined', 'text' ];
}
