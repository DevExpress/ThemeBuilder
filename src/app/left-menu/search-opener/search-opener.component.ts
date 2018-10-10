import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-search-opener',
    templateUrl: './search-opener.component.html',
    styleUrls: ['./search-opener.component.css']
})
export class SearchOpenerComponent {
    constructor() { }
    @Input() opened: boolean;
}
