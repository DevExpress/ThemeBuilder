import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-icon-theme-circle',
    templateUrl: './icon-theme-circle.component.html',
    styleUrls: ['./icon-theme-circle.component.css']
})
export class IconThemeCircleComponent implements OnInit {

    constructor() { }

    @Input() theme: string;
    @Input() small: boolean;

    smallClass: string;

    ngOnInit() {
        this.smallClass = this.small ? 'small' : '';
    }
}
