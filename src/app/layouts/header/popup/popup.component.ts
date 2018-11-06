import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-popup',
    templateUrl: './popup.component.html',
    styleUrls: ['./popup.component.css']
})

export class PopupComponent {
    @Input() title: string;
    visible = false;

    show() {
        this.visible = true;
    }

    hide() {
        this.visible = false;
    }
}
