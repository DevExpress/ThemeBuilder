import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-back-navigator',
    templateUrl: './back-navigator.component.html',
    styleUrls: ['./back-navigator.component.css']
})
export class BackNavigatorComponent {
    @Input() text: string;
}
