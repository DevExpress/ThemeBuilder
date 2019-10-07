import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as themes from 'devextreme-themebuilder/modules/themes.js';
import { Subscription } from 'rxjs';
import { AppLayoutComponent } from '../layouts/app-layout/app-layout.component';

@Component({
    templateUrl: './master.component.html',
    styleUrls: ['./master.component.css']
})

export class MasterComponent implements OnInit, OnDestroy {
    showIframe = false;
    themes: any[];
    themeName: string;
    colorScheme: string;
    isThemeCompact: boolean;
    themeSize: string;
    themesList: any[];
    subscription: Subscription;

    constructor(
        private route: ActivatedRoute,
        private appLayoutComponent: AppLayoutComponent
    ) {
        this.route.params.subscribe((params) => {
            this.themeName = params['theme'] || '';
            this.colorScheme = params['color-scheme'] || '';
            this.isThemeCompact = this.colorScheme.includes('compact');
            this.themeSize = this.isThemeCompact ? 'compact' : 'normal';

            this.changeContent();
        });
    }

    changeContent(): void {
        this.themes = themes.filter((t) => t.name === this.themeName);

        const themesBySize = this.themes.filter(
            (t) => this.isThemeCompact ?
            t.group.includes('Compact') :
            !t.group.includes('Compact'));

        if(this.themeName === 'material') {
            // getting sorted list by background color
            this.themesList = [].concat(
                themesBySize.filter((t) => t.text.includes('Light')),
                themesBySize.filter((t) => t.text.includes('Dark'))
            );
        } else this.themesList = themesBySize;
    }

    ngOnInit(): void {
        this.subscription = this.appLayoutComponent.animationDone.subscribe((value) => {
            this.showIframe = value;
        });
    }

    ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }
}
