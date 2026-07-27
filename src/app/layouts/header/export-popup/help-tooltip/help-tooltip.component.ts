import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'app-help-tooltip',
    templateUrl: './help-tooltip.component.html',
    styles: [`span {
        display: flex;
        cursor: pointer;
    }`],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class HelpTooltipComponent {}
