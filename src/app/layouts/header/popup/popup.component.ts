import { Component, EventEmitter, Input, Output, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'app-popup',
    templateUrl: './popup.component.html',
    styleUrls: ['./popup.component.css'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})

export class PopupComponent {
    @Input() title: string;
    @Input() height: number|string;
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
