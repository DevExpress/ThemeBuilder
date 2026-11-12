import { Injectable, signal } from '@angular/core';
import { Notification } from './types/notify';

@Injectable()
export class NotificationsService {
    // A new object per call, so repeating the same message still notifies
    private readonly notificationState = signal<Notification | null>(null);
    readonly notification = this.notificationState.asReadonly();

    error(message: string): void {
        this.notify(message, 'error');
    }

    private notify(message: string, type: string): void {
        this.notificationState.set({ message, type } as Notification);
    }
}
