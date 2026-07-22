import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'app-header-button',
    templateUrl: './header-button.component.html',
    styleUrls: ['./header-button.component.css'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class HeaderButtonComponent {
    @Input() text: string;
    @Input() icon: string;
}
