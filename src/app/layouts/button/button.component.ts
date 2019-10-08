import { Component, EventEmitter, Input, Output } from '@angular/core';

const DEFAULT_BUTTON_WIDTH = 240;

@Component({
    selector: 'app-button',
    templateUrl: './button.component.html',
    styleUrls: ['./button.component.css']
})
export class ButtonComponent {
    @Input() type: string;
    @Input() disabled = false;
    @Input() width = DEFAULT_BUTTON_WIDTH;
    @Output() clicked = new EventEmitter();

    onClick(): void {
        this.clicked.emit();
    }
}
