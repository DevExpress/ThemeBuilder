import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as lessCompiler from 'less/lib/less-browser';
import * as builder from 'devextreme-themebuilder';
import { ExportedItem } from './types/exported-item';
import { Theme } from './types/theme';
import * as Sass from 'sass.js/dist/sass.js';


@Injectable()
export class BuilderService {
    private loadLess: any;

    constructor(private http: HttpClient) {
       this.loadLess = (fileName: string) => {
            return  this.http.get(fileName, { responseType: 'text' })
                .toPromise();
        };
    }

    private scssCompiler: any = {
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

    private build(theme: Theme, config: any) {
        const baseConfig = {
            lessCompiler: lessCompiler(window, {}),
            sassCompiler: this.scssCompiler,
            reader: this.loadLess,
            baseTheme: theme.name + '.' + theme.colorScheme.replace('-', '.')
        };

        const extendedConfig = { ...baseConfig, ...config };
        return builder.buildTheme(extendedConfig);
    }

    buildTheme(theme: Theme, makeSwatch: boolean, outColorScheme: string, modifiedData: Array<ExportedItem>) {
        return this.build(theme, {
            makeSwatch: makeSwatch,
            outputColorScheme: outColorScheme,
            items: modifiedData
        });
    }

    buildThemeBootstrap(theme: Theme, bootstrapVariables: string, bootstrapVersion: number) {
        return this.build(theme, {
            data: bootstrapVariables,
            inputFile: bootstrapVersion === 4 ? '.scss' : '.less'
        });
    }
}
