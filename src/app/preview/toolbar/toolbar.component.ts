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

    items: Array<any> = [
        { 'location': 'before', 'widget': 'button', 'options': { 'type': 'back', 'text': 'Back' } },
        { 'location': 'after', 'widget': 'button', 'options': { 'icon': 'plus' } },
        { 'location': 'after', 'widget': 'button', 'options': { 'icon': 'find' } },
        { 'location': 'center', 'text': 'Products' }
    ];
}
