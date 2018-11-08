import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent {
    @Input() type: string;
    @Input() width = 240;
    @Output() clicked = new EventEmitter();

    onClick() {
        this.clicked.emit();
    }
}
