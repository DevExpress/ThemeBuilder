/* eslint-disable @typescript-eslint/no-magic-numbers */
import { Component, OnDestroy } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
    selector: 'app-chat',
    templateUrl: './chat.component.html',
    styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnDestroy {
    isExpanded = new BehaviorSubject<boolean>(false);
    widgetGroup = 'chat';

    showTyping = true;
    showAlert = true;
    date = new Date('October 11, 2024, 11:51:00');

    johnDoe = {
        id: 'c94c0e76-fb49-4b9b-8f07-9f93ed93b4f3',
        name: 'John Doe'
    };

    supportAgent = {
        id: 'd16d1a4c-5c67-4e20-b70e-2991c22747c3',
        name: 'Support Agent'
    };

    previewMessages = [
        {
            timestamp: new Date().setTime(this.date.getTime()),
            author: this.supportAgent,
            text: 'Hello, John! How can I assist you today?'
        },
        {
            timestamp: new Date().setTime(this.date.getTime() + 2 * 60000),
            author: this.johnDoe,
            text: 'Hi, I\'m having trouble accessing my account.'
        }
    ];

    messages = [
        {
            timestamp: new Date().setTime(this.date.getTime()),
            author: this.supportAgent,
            text: 'Hello, John! How can I assist you today?'
        },
        {
            timestamp: new Date().setTime(this.date.getTime() + 2 * 60000),
            author: this.johnDoe,
            text: 'Hi, I\'m having trouble accessing my account.\nIt says my password is incorrect.'
        },
        {
            timestamp: new Date().setTime(this.date.getTime() + 2 * 60000),
            author: this.johnDoe,
            text: 'My UserID is john.doe1357'
        },
        {
            timestamp: new Date().setTime(this.date.getTime() + 10 * 60000),
            author: this.supportAgent,
            text: '✅ Instructions to restore access have been sent to the email address registered to your account.'
        }
    ];

    toogleTyping() {
        this.showTyping = !this.showTyping;
    }

    toogleErrors() {
        this.showAlert = !this.showAlert;
    }

    ngOnDestroy(): void {
        this.isExpanded.unsubscribe();
    }
}
