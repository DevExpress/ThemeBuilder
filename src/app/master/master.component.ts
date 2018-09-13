import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as themes from 'devextreme-themebuilder/modules/themes.js';
import { BuilderService } from './../builder.service';

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
        private route: ActivatedRoute,
        private builderService: BuilderService) {
        this.route.params.subscribe(params => {
            this.themeName = params['theme'] || '';
            this.colorScheme = params['color-scheme'] || '';

            this.changeContent();
        });
    }

    changeContent() {
        const currentTheme = [this.themeName, this.colorScheme.replace(/-/, '.')].join('.');
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

        if(this.isMaster) {
            this.builderService.buildTheme(currentTheme, false)
                .then((result) => {
                    const head = document.getElementsByTagName('head')[0];
                    const style = document.createElement('style');
                    const DYNAMIC_STYLES_ID = 'dynamic-styles';

                    if(document.getElementById(DYNAMIC_STYLES_ID))
                        document.getElementById(DYNAMIC_STYLES_ID).remove();

                    style.type = 'text/css';
                    style.id = DYNAMIC_STYLES_ID;
                    style.appendChild(document.createTextNode(result.css));
                    head.appendChild(style);

                    this.baseConstants = this.builderService.buildBaseConstants(result);
                });
        }
    }
}
