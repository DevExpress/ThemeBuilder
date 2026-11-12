import { Component, computed, inject, linkedSignal } from '@angular/core';
import { NotificationsService } from '../notification.service';

@Component({
    selector: 'app-notifications',
    templateUrl: './notify-error.component.html',
    styleUrls: ['./notify-error.component.css'],
    standalone: false
})

export class NotifyErrorComponent {
    private readonly notification = inject(NotificationsService).notification;

    notifyMessage = computed(() => this.notification()?.message ?? '');
    // Shown again on every new notification, can be closed locally
    visible = linkedSignal(() => !!this.notification());

    closeNotify(): void {
        this.visible.set(false);
    }
}
