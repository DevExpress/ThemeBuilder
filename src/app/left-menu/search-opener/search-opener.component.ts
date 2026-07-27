import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'app-search-opener',
    templateUrl: './search-opener.component.html',
    styleUrls: ['./search-opener.component.css'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class SearchOpenerComponent {
    @Input() opened: boolean;
}
