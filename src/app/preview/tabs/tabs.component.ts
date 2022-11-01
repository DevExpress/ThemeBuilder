import { Component } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
    selector: 'app-tabs',
    templateUrl: './tabs.component.html',
    styleUrls: ['./tabs.component.css']
})
export class TabsComponent {
    widgetGroup = 'tabs';
    isExpanded = new Subject<boolean>();

    dataSource: any[] = [
        { text: 'user', icon: 'user' },
        { text: 'comment', icon: 'comment' },
        { text: 'find', icon: 'find', badge: 7 },
        { text: 'disabled', disabled: true }
    ];
}
