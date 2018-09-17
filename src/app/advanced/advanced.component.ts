import { Component } from '@angular/core';
import { BuilderService } from './../builder.service';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-advanced',
    templateUrl: './advanced.component.html',
    styleUrls: ['./advanced.component.css']
})
export class AdvancedComponent {
    constructor(private builderService: BuilderService, private route: ActivatedRoute) {
        this.route.params.subscribe(params => {
            console.log('adv');

            this.theme = params['theme'];
            this.colorScheme = params['color-scheme'];
            this.builderService.buildTheme(this.theme, this.colorScheme, false).then(result => {
                this.meta = result.compiledMetadata;
                console.log('adv - result');
            });
        });
    }

    meta: any;
    theme: string;
    colorScheme: string;
}
