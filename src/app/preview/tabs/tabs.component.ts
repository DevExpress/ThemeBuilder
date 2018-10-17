import { Component, ViewChild, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { DxTabsComponent } from 'devextreme-angular';

@Component({
    selector: 'app-tabs',
    templateUrl: './tabs.component.html',
    styleUrls: ['./tabs.component.css']
})
export class TabsComponent implements OnInit {
    widgetGroup = 'tabs';
    isExpanded = new Subject<boolean>();

    @ViewChild('tabs') tabs: DxTabsComponent;

    collapsedOptions = {
        'dataSource': [
            { 'text': 'user', 'icon': 'user' },
            { 'text': 'comment', 'icon': 'comment' },
            { 'text': 'find', 'icon': 'find' },
            { 'text': 'disabled', 'disabled': true }
        ]
    };

    expandedOptions = {
        'dataSource': [
            { 'text': 'user', 'icon': 'user' },
            { 'text': 'comment', 'icon': 'comment' },
            { 'text': 'find', 'icon': 'find' },
            { 'text': 'disabled', 'disabled': true }
        ]
    };

    ngOnInit() {
        this.isExpanded.subscribe((expanded) => {
            this.tabs.instance.option(expanded ? this.expandedOptions : this.collapsedOptions);
        });
    }
}
