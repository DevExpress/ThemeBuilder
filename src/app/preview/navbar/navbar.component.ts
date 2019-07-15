import { Component } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
    widgetGroup = 'navbar';
    isExpanded = new Subject<boolean>();

    dataSource: any[] = [
        { text: 'user', icon: 'user' },
        { text: 'find', icon: 'find' },
        { text: 'favorites', icon: 'favorites' },
        { text: 'about', icon: 'info' },
        { text: 'home', icon: 'home', badge: '77' },
        { text: 'URI', icon: 'tips', disabled: true }
    ];
}
