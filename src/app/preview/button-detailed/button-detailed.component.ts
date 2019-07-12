import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
    selector: 'app-button-detailed',
    templateUrl: './button-detailed.component.html',
    styleUrls: ['./button-detailed.component.css']
})
export class ButtonDetailedComponent {
    @Input() widget: string;
    @Input() currentWidget: any;

    @Output() clicked = new EventEmitter();

    onClick() {
        const isClosed = this.widget !== this.currentWidget;
        window.parent.postMessage(
            { widget: (isClosed ? this.widget  : 'base.common') },
             window.parent.location.href
        );

        this.clicked.emit({ isClosed });
    }
}
