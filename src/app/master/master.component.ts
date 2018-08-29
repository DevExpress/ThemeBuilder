import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
    isCompactThemes: boolean;

    constructor(
        private route: ActivatedRoute,
        private builderService: BuilderService) {
        this.route.params.subscribe(params => {
            this.themeName = params["theme"] || "";
            this.colorScheme = params["color-scheme"] || "";
        });

        this.changeContent();
    }

    changeContent() {
        this.isMaster = this.colorScheme.length > 0;
        this.themes = themes.filter(t => t.name === this.themeName);


        if (this.themeName == "material") {
            this.rightThemes = this.themes.filter(t => t.text.includes("Light"));
            this.leftThemes = this.themes.filter(t => t.text.includes("Dark"));
        } else {
            let genericThemes = this.themes.filter(t => !t.group.includes("Compact"));
            let genericThemesCount = genericThemes.length;
            this.rightThemes = genericThemes.splice(0, Math.round(genericThemesCount / 2));
            this.leftThemes = genericThemes;
            this.isCompactThemes = true;
        }


        // this.builderService.buildTheme(this.themeName, this.colorScheme, ".dinamyc-styles")
        //   .then((result) => {
        //     const head = document.getElementsByTagName("head")[0];
        //     const style = document.createElement("style");

        //     document.getElementById("dinamyc-styles") && document.getElementById("dinamyc-styles").remove()

        //     style.type = "text/css";
        //     style.id = "dinamyc-styles"
        //     style.appendChild(document.createTextNode(result.css));
        //     head.appendChild(style);
        //   })    
    }
}
