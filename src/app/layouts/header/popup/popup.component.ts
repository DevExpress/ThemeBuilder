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

    shown(): void {
        this.popupShown.emit();
    }

    show(): void {
        this.visible = true;
    }

    hide(): void {
        this.visible = false;
    }
}
