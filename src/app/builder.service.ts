import { Injectable } from '@angular/core';

import { HttpClient, HttpResponse } from '@angular/common/http';

import { map } from 'rxjs/operators';

import * as lessCompiler from "less/lib/less-browser";

import * as builder from 'devextreme-themebuilder/modules/builder.js';



@Injectable()
export class BuilderService {
    loadLess: any;
    baseParameters: ["@base-accent", "@base-text-color", "@base-bg", "@base-border-color", "@base-border-radius"];

    constructor(private http: HttpClient ) {
       this.loadLess = (fileName: string) => {
            return new Promise((resolve, reject) => {
                this.http.get("node_modules/devextreme-themebuilder/" + fileName, {responseType: "text"})
                    .subscribe(result => resolve(result))       
            })
        }
    }

    metadataPromise = new Promise(function(resolve) { resolve("{}") })

    buildTheme(themeName, colorScheme, swatchSelector) {
        console.log(builder)
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