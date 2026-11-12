import { Component, EventEmitter, Input, Output, ChangeDetectionStrategy, signal } from '@angular/core';

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

    visible = signal(false);

    shown(): void {
        this.popupShown.emit();
    }

    show(): void {
        this.visible.set(true);
    }

    hide(): void {
        this.visible.set(false);
    }
}
