import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class GoogleAnalyticsEventsService {

    emitEvent(
        eventAction: string,
        eventLabel: string) {
        if(!environment.production) return;

        const ga = (window as any).ga;

        if(ga && ga.getAll) {
            const _tracker = ga.getAll()[0];
            if(_tracker) _tracker.send('event', 'ThemeBuilder', eventAction, eventLabel);
        }
    }
}
