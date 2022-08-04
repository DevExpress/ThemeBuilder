import { Component, OnInit } from '@angular/core';
import { NotificationsService } from '../notification.service';
import { Notification } from '../types/notify';

@Component({
    selector: 'app-notifications',
    templateUrl: './notify-error.component.html',
    styleUrls: ['./notify-error.component.css']
})

export class NotifyErrorComponent implements OnInit {
    notifyMessage: string;
    visible = false;

    constructor(private service: NotificationsService) {
        this.service.notification.subscribe((notify) => {
            if(notify) {
                this.render(notify);
            }
        });
    }

    ngOnInit(): void {
        this.notifyMessage = '';
    }

    render(notify: Notification): void {
        this.notifyMessage = notify.message;
        this.visible = true;
    }

    closeNotify(): void {
        this.visible = false;
    }
}
