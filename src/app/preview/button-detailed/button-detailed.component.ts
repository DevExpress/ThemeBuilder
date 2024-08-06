import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AnalyticsEventsService } from '../../../app/analytics-events.service';

@Component({
    selector: 'app-button-detailed',
    templateUrl: './button-detailed.component.html',
    styleUrls: ['./button-detailed.component.css']
})

export class ButtonDetailedComponent {
    @Input() widget: string;
    @Input() currentWidget: string;

    @Output() clicked = new EventEmitter();

    constructor(
        private analyticsEventsService: AnalyticsEventsService
    ) { }

    onClick(): void {
        const isClosed = this.widget !== this.currentWidget;
        window.parent.postMessage(
            { widget: isClosed ? this.widget : 'base.common' },
            window.parent.location.href
        );

        this.analyticsEventsService.trackEvent(
            'TB: Settings',
            'Tb ' + (isClosed ? 'open' : 'close') + ' settings',
            this.widget
        );

        this.clicked.emit({ isClosed });
    }
}
