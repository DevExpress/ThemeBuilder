import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-back-navigator',
    templateUrl: './back-navigator.component.html',
    styleUrls: ['./back-navigator.component.css'],
    standalone: false
})
export class BackNavigatorComponent {
    @Input() text: string;
}
