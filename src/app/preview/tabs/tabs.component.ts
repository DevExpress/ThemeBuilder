import { Component, ChangeDetectionStrategy, signal } from '@angular/core';

@Component({
    selector: 'app-tabs',
    templateUrl: './tabs.component.html',
    styleUrls: ['./tabs.component.css'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class TabsComponent {
    widgetGroup = 'tabs';
    isExpanded = signal<boolean>(false);

    dataSource: any[] = [
        { text: 'user', icon: 'user' },
        { text: 'comment', icon: 'comment' },
        { text: 'find', icon: 'find', badge: 7 },
        { text: 'disabled', disabled: true }
    ];
}
