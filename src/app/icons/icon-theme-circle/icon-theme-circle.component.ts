import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-icon-theme-circle',
    templateUrl: './icon-theme-circle.component.html',
    styleUrls: ['./icon-theme-circle.component.css'],
    standalone: false
})
export class IconThemeCircleComponent implements OnInit {
    @Input() theme: string;
    @Input() small: boolean;

    smallClass: string;

    ngOnInit(): void {
        this.smallClass = this.small ? 'small' : '';
    }
}
