import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-button-icon',
    templateUrl: './button-icon.component.html',
    styleUrls: ['./button-icon.component.css'],
    standalone: false
})
export class ButtonIconComponent {
    @Input('name') name: string;
}
