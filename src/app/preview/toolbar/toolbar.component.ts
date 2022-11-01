import { Component } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
    selector: 'app-toolbar',
    templateUrl: './toolbar.component.html',
    styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent {
    widgetGroup = 'toolbar';
    isExpanded = new Subject<boolean>();

    items: any[] = [
        { location: 'before', widget: 'dxButton', options: { type: 'back' } },
        { location: 'after', widget: 'dxButton', options: { icon: 'plus' } },
        { location: 'after', widget: 'dxButton', options: { icon: 'find' } },
        { location: 'center', text: 'Products' }
    ];
}
