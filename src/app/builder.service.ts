import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as lessCompiler from 'less/lib/less-browser';
import * as builder from 'devextreme-themebuilder';
import { ExportedItem } from './types/exported-item';
import { Theme } from './types/theme';
import * as Sass from 'sass.js/dist/sass.js';


@Injectable()
export class BuilderService {
    loadLess: any;

    constructor(private http: HttpClient) {
       this.loadLess = (fileName: string) => {
            return  this.http.get(fileName, { responseType: 'text' })
                .toPromise();
        };
    }

    scssCompiler: any = {
        render: (scss) => {
            Sass.setWorkerUrl('sass/sass.worker.js');
            const sass = new Sass();
            return new Promise((resolve, reject) => {
                sass.compile(scss, result => {
                    if(result.status === 0) {
                        resolve(result.text);
                    } else {
                        reject(result);
                    }
                });
            });
        }
    };


    buildTheme(theme: Theme, makeSwatch: boolean, outColorScheme: string, modifiedData: Array<ExportedItem>) {
        return builder.buildTheme({
            lessCompiler: lessCompiler(window, {}),
            sassCompiler: this.scssCompiler,
            makeSwatch: makeSwatch,
            outputColorScheme: outColorScheme,
            reader: this.loadLess,
            items: modifiedData,
            baseTheme: theme.name + '.' + theme.colorScheme.replace('-', '.'),
        });
    }
}
