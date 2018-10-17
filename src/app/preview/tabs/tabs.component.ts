import { Component, ViewChild, OnInit, OnDestroy } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { DxTabsComponent } from 'devextreme-angular';

@Component({
    selector: 'app-tabs',
    templateUrl: './tabs.component.html',
    styleUrls: ['./tabs.component.css']
})
export class TabsComponent implements OnInit, OnDestroy {
    widgetGroup = 'tabs';
    isExpanded = new Subject<boolean>();
    subscription: Subscription;

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
        this.subscription = this.isExpanded.subscribe((expanded) => {
            this.tabs.instance.option(expanded ? this.expandedOptions : this.collapsedOptions);
        });
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
}
