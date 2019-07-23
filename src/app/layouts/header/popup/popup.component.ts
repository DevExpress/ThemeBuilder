import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
    selector: 'app-popup',
    templateUrl: './popup.component.html',
    styleUrls: ['./popup.component.css']
})

export class PopupComponent {
    @Input() title: string;
    @Output() popupShown = new EventEmitter();

    visible = false;

    shown() {
        this.popupShown.emit();
    }

    show() {
        this.visible = true;
    }

    hide() {
        this.visible = false;
    }
}
