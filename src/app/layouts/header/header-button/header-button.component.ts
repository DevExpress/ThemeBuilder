import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-header-button',
    templateUrl: './header-button.component.html',
    styleUrls: ['./header-button.component.css']
})
export class HeaderButtonComponent implements OnInit {

    constructor() { }

    @Input() text: string;
    @Input() icon: string;

    ngOnInit() {
    }

}
