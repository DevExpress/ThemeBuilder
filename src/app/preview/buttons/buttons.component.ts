import { Component, afterRender } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { DxButtonTypes } from 'devextreme-angular/ui/button';

@Component({
    selector: 'app-buttons',
    templateUrl: './buttons.component.html',
    styleUrls: ['./buttons.component.css']
})

export class ButtonsComponent {
    constructor() {
        afterRender(() => this.initState())
    }

    initState() {
        console.log('Set hover state')
        document.querySelectorAll('dx-qr-hover').forEach(btn => {
            console.log(btn);
            btn.classList.add('dx-state-hover');
        })
    }

    initStateHover(event: DxButtonTypes.ClickEvent) {
        event.component.element().classList.add('dx-state-hover');
    }

    initStateActive(event: DxButtonTypes.ClickEvent) {
        event.component.element().classList.add('dx-state-active');
    }

    initStateFocused(event: DxButtonTypes.ClickEvent) {
        event.component.element().classList.add('dx-state-focused');
    }

    widgetGroup = 'buttons';
    isExpanded = new BehaviorSubject<boolean>(false);

    buttonModes: DxButtonTypes.ButtonStyle[] = ['contained', 'outlined', 'text'];
    buttonStates: string[] = ['normal', 'hover', 'active', 'focused', 'disable'];
}
