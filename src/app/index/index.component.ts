import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    templateUrl: './index.component.html',
    styleUrls: ['./index.component.css'],
    standalone: false
})

export class IndexComponent {
    url: string;

    constructor(private route: ActivatedRoute) {
        this.route.url.subscribe((u) => {
            const urlSegment = u.shift();
            this.url = urlSegment ? urlSegment.path : '';
        });
    }
}
