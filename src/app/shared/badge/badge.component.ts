import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'app-badge',
    templateUrl: './badge.component.html',
    styleUrls: ['./badge.component.css'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class BadgeComponent{}
