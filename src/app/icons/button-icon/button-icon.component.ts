import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'app-button-icon',
    templateUrl: './button-icon.component.html',
    styleUrls: ['./button-icon.component.css'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class ButtonIconComponent {
    @Input('name') name: string;
}
