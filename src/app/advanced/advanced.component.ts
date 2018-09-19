import { Component } from '@angular/core';
import { BuilderService } from './../builder.service';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-advanced',
    templateUrl: './advanced.component.html',
    styleUrls: ['./advanced.component.css']
})
export class AdvancedComponent {
    constructor(
        private builderService: BuilderService,
        private route: ActivatedRoute) {
        this.route.params.subscribe(params => {
            if(this.theme !== params['theme'] || this.colorScheme !== params['color-scheme']) {
                this.theme = params['theme'];
                this.colorScheme = params['color-scheme'];
                this.buildTheme();
            }
        });
    }

    meta: any;
    theme: string;
    colorScheme: string;

    variableChange() {
        this.buildTheme();
    }

    buildTheme() {
        this.builderService.buildTheme(this.theme, this.colorScheme, false, null).then(result => {
            this.meta = result.compiledMetadata;
        });
    }
}
