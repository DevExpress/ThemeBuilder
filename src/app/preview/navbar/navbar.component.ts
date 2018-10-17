import { Component, ViewChild, OnInit, OnDestroy } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { DxNavBarComponent } from 'devextreme-angular';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit, OnDestroy {
    widgetGroup = 'navbar';
    isExpanded = new Subject<boolean>();
    subscription: Subscription;

    @ViewChild('navBar') navBar: DxNavBarComponent;

    collapsedOptions = {
        'dataSource': [
            { 'text': 'user', 'icon': 'user' },
            { 'text': 'find', 'icon': 'find' },
            { 'text': 'favorites', 'icon': 'favorites' },
            { 'text': 'about', 'icon': 'info' },
            { 'text': 'home', 'icon': 'home', 'badge': 77 },
            { 'text': 'URI', 'icon': 'tips', 'disabled': true }
        ]
    };

    expandedOptions = {
        'dataSource': [
            { 'text': 'user', 'icon': 'user' },
            { 'text': 'find', 'icon': 'find' },
            { 'text': 'favorites', 'icon': 'favorites' },
            { 'text': 'about', 'icon': 'info' },
            { 'text': 'home', 'icon': 'home', 'badge': 77 },
            { 'text': 'URI', 'icon': 'tips', 'disabled': true }
        ]
    };

    ngOnInit() {
        this.subscription = this.isExpanded.subscribe((expanded) => {
            this.navBar.instance.option(expanded ? this.expandedOptions : this.collapsedOptions);
        });
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
}
