import { Component } from '@angular/core';
import { ActivationEnd, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { routeAnimation } from './../../animations';
import { RouteId } from 'src/app/types/route-id';

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
                    this.themesSwitchEnabled = snapshot.data.routeId === RouteId.GROUPED_WIDGET;
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
