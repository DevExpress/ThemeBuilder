import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as builder from 'devextreme-themebuilder';
import * as lessCompiler from 'less/lib/less-browser';
import * as Sass from 'sass.js/dist/sass.js';
import { BuilderResult } from './types/builder-result';
import { ExportedItem } from './types/exported-item';
import { Theme } from './types/theme';

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
                sass.compile(scss, (result) => {
                    if(result.status === 0) {
                        resolve(result.text);
                    } else {
                        reject(result);
                    }
                });
            });
        }
    };

    private build(theme: Theme, config: any): Promise<BuilderResult> {
        const baseConfig = {
            lessCompiler: lessCompiler(window, { math: 'always' }),
            sassCompiler: this.scssCompiler,
            reader: this.loadLess,
            baseTheme: theme.name + '.' + theme.colorScheme.replace(/-/g, '.')
        };

        const extendedConfig = { ...baseConfig, ...config };
        return builder.buildTheme(extendedConfig);
    }

    buildTheme(theme: Theme, makeSwatch: boolean, outColorScheme: string, modifiedData: ExportedItem[]): Promise<BuilderResult> {
        return this.build(theme, {
            makeSwatch,
            outputColorScheme: outColorScheme,
            items: modifiedData
        });
    }

    buildThemeBootstrap(theme: Theme, bootstrapVariables: string, bootstrapVersion: number): Promise<BuilderResult> {
        return this.build(theme, {
            data: bootstrapVariables,
            inputFile: bootstrapVersion === 4 ? '.scss' : '.less'
        });
    }
}
