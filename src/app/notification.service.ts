import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { INotify } from './types/notify';

@Injectable()
export class NotificationsService {
    private $notifications: Subject<INotify>;

    constructor() {
        this.$notifications = new BehaviorSubject(null);
    }

    error(message: string): void {
        this.notify(message, 'error');
    }

    private notify(message: string, type: string): void {
        this.$notifications.next({ message, type } as INotify);
    }

    get notification(): Observable<INotify> {
        return this.$notifications.asObservable();
    }
}
