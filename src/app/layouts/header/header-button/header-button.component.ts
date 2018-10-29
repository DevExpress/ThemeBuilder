import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-header-button',
    templateUrl: './header-button.component.html',
    styleUrls: ['./header-button.component.css']
})
export class HeaderButtonComponent {

    constructor() { }

    @Input() text: string;
    @Input() icon: string;
}
