import { Component, signal } from '@angular/core';

@Component({
    selector: 'app-toolbar',
    templateUrl: './toolbar.component.html',
    styleUrls: ['./toolbar.component.css'],
    standalone: false
})
export class ToolbarComponent {
    widgetGroup = 'toolbar';
    isExpanded = signal<boolean>(false);

    items: any[] = [
        { location: 'before', widget: 'dxButton', options: { type: 'back' } },
        { location: 'after', widget: 'dxButton', options: { icon: 'plus' } },
        { location: 'after', widget: 'dxButton', options: { icon: 'find' } },
        { location: 'center', text: 'Products' }
    ];
}
