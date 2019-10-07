import { Component } from '@angular/core';
import { ActivationEnd, Router } from '@angular/router';

@Component({
    selector: 'app-help-button',
    templateUrl: './help-button.component.html',
    styleUrls: ['./help-button.component.css']
})
export class HelpButtonComponent {
    readonly baseUrl: string = 'https://js.devexpress.com/Documentation/Guide/Themes_and_Styles/ThemeBuilder/';
    public $docUrl: string;

    constructor(private router: Router) {
        this.router.events.subscribe((event) => {
            if(event instanceof ActivationEnd) {
                if(!(event.snapshot.data.docHash === undefined)) {
                    this.$docUrl = `${this.baseUrl}${event.snapshot.data.docHash}`;
                }
            }
        });
    }
}
