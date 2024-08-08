import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';

@Injectable({
    providedIn: 'root'
})

export class AnalyticsEventsService {
    trackEvent(...items): void {
        if(!environment.production) return;

        const _paq = (window as any)._paq || [];

        if(_paq.push) {
            const eventArgs = ['trackEvent', ...items];
            _paq.push(eventArgs);
        }
    }
}
