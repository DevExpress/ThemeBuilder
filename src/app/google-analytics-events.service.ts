import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';

declare let ga: any;

@Injectable({
    providedIn: 'root'
})
export class GoogleAnalyticsEventsService {

    emitEvent(
        eventCategory: string,
        eventAction: string,
        eventLabel: string) {
        if (!environment.production) return;

        if(ga && ga.getAll) {
            const _tracker = ga.getAll()[0];
            if (_tracker) _tracker.send('event', eventCategory, eventAction, eventLabel);
        }
    }
}
