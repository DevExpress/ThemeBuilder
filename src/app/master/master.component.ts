import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as themes from 'devextreme-themebuilder/modules/themes.js';
import { AppLayoutComponent } from '../layouts/app-layout/app-layout.component';
import { Subscription } from 'rxjs';


@Component({
    templateUrl: './master.component.html',
    styleUrls: ['./master.component.css']
})

export class MasterComponent implements OnInit {
    showIframe = false;
    themes: any;
    themeName: string;
    colorScheme: string;
    rightThemes: any;
    leftThemes: any;
    isCompactThemes = false;
    baseConstants: any;
    subscription: Subscription;

    constructor(
        private route: ActivatedRoute,
        private appLayoutComponent: AppLayoutComponent
    ) {
        this.route.params.subscribe(params => {
            this.themeName = params['theme'] || '';
            this.colorScheme = params['color-scheme'] || '';

            this.changeContent();
        });
    }

    changeContent() {
        this.themes = themes.filter(t => t.name === this.themeName);

        if(this.themeName === 'material') {
            this.rightThemes = this.themes.filter(t => t.text.includes('Light'));
            this.leftThemes = this.themes.filter(t => t.text.includes('Dark'));
        } else {
            const genericThemes = this.themes.filter(t => !t.group.includes('Compact'));
            const genericThemesCount = genericThemes.length;
            this.rightThemes = genericThemes.splice(0, Math.round(genericThemesCount / 2));
            this.leftThemes = genericThemes;
            this.isCompactThemes = true;
        }
    }

    ngOnInit() {
        this.appLayoutComponent.animationDone.subscribe(value => {
            this.showIframe = !this.showIframe && value;
        });
    }
}
