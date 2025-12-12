import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-icon-tm-info',
    templateUrl: './icon-tm-info.component.html',
    styleUrls: ['./icon-tm-info.component.css'],
    standalone: false
})
export class IconTmInfoComponent {
    @Input('name') name: string;
}
