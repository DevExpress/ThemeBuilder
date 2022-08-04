import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { Notification } from './types/notify';

@Injectable()
export class NotificationsService {
    private $notification: Subject<Notification>;

    constructor() {
        this.$notification = new BehaviorSubject(null);
    }

    error(message: string): void {
        this.notify(message, 'error');
    }

    private notify(message: string, type: string): void {
        this.$notification.next({ message, type } as Notification);
    }

    get notification(): Observable<Notification> {
        return this.$notification.asObservable();
    }
}
