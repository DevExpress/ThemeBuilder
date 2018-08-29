import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as lessCompiler from "less/lib/less-browser";
import * as builder from 'devextreme-themebuilder/modules/builder.js';


@Injectable()
export class BuilderService {
    loadLess: any;

    constructor(private http: HttpClient ) {
       this.loadLess = (fileName: string) => {
            return  this.http.get("node_modules/devextreme-themebuilder/" + fileName, {responseType: "text"})
                        .toPromise();  
        };
        
    }

    metadataPromise = new Promise(function(resolve) { resolve("{}") })

    buildTheme(themeName, colorScheme, swatchSelector) {
        return builder.buildTheme({
            lessCompiler: lessCompiler(window, {}),
            swatchSelector: swatchSelector,
            reader: this.loadLess,
            metadataPromise: this.metadataPromise,
            themeName: themeName,
            colorScheme: colorScheme
        })
    }
}