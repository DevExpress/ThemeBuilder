import { Component } from '@angular/core';
import { Router, ActivationEnd } from '@angular/router';
import { routeAnimation } from './../../animations';
import { Subject } from 'rxjs';

@Component({
    selector: 'app-app-layout',
    templateUrl: './app-layout.component.html',
    styleUrls: ['./app-layout.component.css'],
    animations: [routeAnimation]
})

export class AppLayoutComponent {
    animationValue: number;
    animationDone = new Subject<boolean>();
    themesSwitchEnabled = false;

    constructor(private router: Router) {
        this.router.events.subscribe((event) => {
            if(event instanceof ActivationEnd) {
                const snapshot = event.snapshot;
                if(snapshot.data.routeId) {
                    this.animationValue = snapshot.data.routeId;
                    this.themesSwitchEnabled = snapshot.data.routeId === 4;
                }
            }
        });
    }

    getRouteAnimation(): number {
        return this.animationValue;
    }

    routeAnimationDone(): void {
        this.animationDone.next(true);
    }
}
