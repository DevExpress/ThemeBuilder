import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-header-button',
    templateUrl: './header-button.component.html',
    styleUrls: ['./header-button.component.css'],
    standalone: false
})
export class HeaderButtonComponent {
    @Input() text: string;
    @Input() icon: string;
}
