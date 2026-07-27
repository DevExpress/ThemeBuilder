import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'app-icon-tm-info',
    templateUrl: './icon-tm-info.component.html',
    styleUrls: ['./icon-tm-info.component.css'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class IconTmInfoComponent {
    @Input('name') name: string;
}
