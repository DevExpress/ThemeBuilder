import { Component, Input, Output, EventEmitter } from '@angular/core';

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
        window.parent.postMessage(
            { widget: (this.widget !== this.currentWidget ? this.widget  : 'base.common') },
             window.parent.location.href
        );

        this.clicked.emit({isClosed: this.widget !== this.currentWidget});
    }
}
