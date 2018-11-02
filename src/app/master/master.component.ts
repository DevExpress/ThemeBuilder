import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as themes from 'devextreme-themebuilder/modules/themes.js';
import { AppLayoutComponent } from '../layouts/app-layout/app-layout.component';
import { Subscription } from 'rxjs';


@Component({
    templateUrl: './master.component.html',
    styleUrls: ['./master.component.css']
})

export class MasterComponent implements OnInit, OnDestroy {
    showIframe = false;
    themes: Array<any>;
    themeName: string;
    colorScheme: string;
    themeSize: string;
    themesList: Array<any>;
    isCompactThemes = false;
    subscription: Subscription;

    constructor(
        private route: ActivatedRoute,
        private appLayoutComponent: AppLayoutComponent
    ) {
        this.route.params.subscribe(params => {
            this.themeName = params['theme'] || '';
            this.colorScheme = params['color-scheme'] || '';
            this.themeSize = params['color-scheme'].split('-')[1];

            this.changeContent();
        });
    }

    changeContent() {
        this.themes = themes.filter(t => t.name === this.themeName);

        if(this.themeName === 'material') {
            // getting sorted list by background color
            this.themesList = [].concat(
                this.themes.filter(t => t.text.includes('Light')),
                this.themes.filter(t => t.text.includes('Dark'))
            );
        } else {
            this.themesList = this.themes.filter(
                t => this.themeSize ?
                t.group.includes('Compact') :
                !t.group.includes('Compact'));
            this.isCompactThemes = true;
        }
    }

    ngOnInit() {
        this.subscription = this.appLayoutComponent.animationDone.subscribe(value => {
            this.showIframe = value;
        });
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
}
