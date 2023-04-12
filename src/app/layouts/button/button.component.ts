import { Component, EventEmitter, Input, Output } from '@angular/core';

const DEFAULT_BUTTON_WIDTH = 200;
const DEFAULT_BUTTON_HEIGHT = 44;

@Component({
    selector: 'app-button',
    templateUrl: './button.component.html',
    styleUrls: ['./button.component.css']
})
export class ButtonComponent {
    @Input() type: string;
    @Input() disabled = false;
    @Input() width = DEFAULT_BUTTON_WIDTH;
    @Input() height = DEFAULT_BUTTON_HEIGHT;
    @Output() clicked = new EventEmitter();

    onClick(): void {
        this.clicked.emit();
    }
}
