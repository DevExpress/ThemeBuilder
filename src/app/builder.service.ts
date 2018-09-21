import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as lessCompiler from 'less/lib/less-browser';
import * as builder from 'devextreme-themebuilder';
import { ExportedItem } from './types/exported-item';
import { Theme } from './types/theme';


@Injectable()
export class BuilderService {
    loadLess: any;

    constructor(private http: HttpClient) {
       this.loadLess = (fileName: string) => {
            return  this.http.get(fileName, { responseType: 'text' })
                .toPromise();
        };
    }

    buildTheme(theme: Theme, makeSwatch: boolean, outColorScheme: string, modifiedData: Array<ExportedItem>) {
        return builder.buildTheme({
            lessCompiler: lessCompiler(window, {}),
            makeSwatch: makeSwatch,
            outputColorScheme: outColorScheme,
            reader: this.loadLess,
            items: modifiedData,
            baseTheme: theme.name + '.' + theme.colorScheme.replace('-', '.')
        });
    }
}
