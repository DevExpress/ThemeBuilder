import { Component, ViewChild, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { DxNavBarComponent } from 'devextreme-angular';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
    widgetGroup = 'navbar';
    isExpanded = new Subject<boolean>();

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
        this.isExpanded.subscribe((expanded) => {
            this.navBar.instance.option(expanded ? this.expandedOptions : this.collapsedOptions);
        });
    }
}
