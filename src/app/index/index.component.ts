import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    templateUrl: './index.component.html',
    styleUrls: ['./index.component.css']
})

export class IndexComponent {
    url: string;

    constructor(private route: ActivatedRoute) {
        this.route.url.subscribe((u) => {
            this.url = u[0] ? u[0].path : '';
        });
    }
}
