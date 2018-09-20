import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as themes from 'devextreme-themebuilder/modules/themes.js';

@Component({
    templateUrl: './master.component.html',
    styleUrls: ['./master.component.css']
})

export class MasterComponent {
    isMaster: boolean;
    themes: any;
    themeName: string;
    colorScheme: string;
    rightThemes: any;
    leftThemes: any;
    isCompactThemes = false;
    baseConstants: any;

    constructor(
        private route: ActivatedRoute) {
        this.route.params.subscribe(params => {
            this.themeName = params['theme'] || '';
            this.colorScheme = params['color-scheme'] || '';

            this.changeContent();
        });
    }

    changeContent() {
        this.isMaster = this.colorScheme.length > 0;
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
}
