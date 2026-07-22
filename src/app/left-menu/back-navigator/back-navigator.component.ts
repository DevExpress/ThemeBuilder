import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'app-back-navigator',
    templateUrl: './back-navigator.component.html',
    styleUrls: ['./back-navigator.component.css'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class BackNavigatorComponent {
    @Input() text: string;
}
