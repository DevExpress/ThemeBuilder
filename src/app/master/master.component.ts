import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import * as themes from 'devextreme-themebuilder/modules/themes.js';

import { BuilderService }   from './../builder.service';


@Component({
  templateUrl: './master.component.html',
  styleUrls: ['./master.component.css']
})


export class MasterComponent {
  isMaster: boolean;
  themes: any;
  rightThemes: any;
  leftThemes: any;
  themeName: string;
  colorScheme: string;
  
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private builderService: BuilderService) {
      this.route.url.subscribe(u => { 
          this.themeName = u[1] ? u[1].path : ""
          this.colorScheme = u[2] ? u[2].path : ""
      });

      this.changeContent();
    }

  changeContent() {
    this.isMaster = this.themeName !== "" && this.colorScheme !== "";  
    this.themes = themes.filter(t => t.name === this.themeName);


      if(this.themeName == "material") {
        this.rightThemes = this.themes.filter(t =>  t.text.includes("Light")); 
        this.leftThemes = this.themes.filter(t => t.text.includes("Dark")); 
      } else {
        let genericThemes = this.themes.filter(t =>  !t.group.includes("Compact"));
        let genericThemesCount = genericThemes.length;
        this.rightThemes = genericThemes.splice(0, Math.round(genericThemesCount / 2));
        this.leftThemes = genericThemes;
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
