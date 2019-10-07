import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as builder from 'devextreme-themebuilder';
import { version } from 'devextreme-themebuilder/package.json';
import * as lessCompiler from 'less/lib/less-browser';
import * as Sass from 'sass.js/dist/sass.js';
import semver from 'semver';
import { BuilderResult } from './types/builder-result';
import { ExportedItem } from './types/exported-item';
import { Theme } from './types/theme';

@Injectable()
export class BuilderService {
    private loadLess: any;
    private lessCompiler: any;

    constructor(private http: HttpClient) {
        this.loadLess = (fileName: string): Promise<string> => {
            return  this.http.get(fileName, { responseType: 'text' })
                .toPromise();
        };

        const compilerOptions = { math: 'always', useFileCache: true };

        if(semver.gte(version, '19.2.0-dev')) {
            compilerOptions['filename'] = '/devextreme-themebuilder/data/less/bundles/bundle.less'; // fake path to the bundle
        }

        this.lessCompiler = lessCompiler(window, compilerOptions);
    }

    private scssCompiler: any = {
        render: (scss) => {
            Sass.setWorkerUrl('sass/sass.worker.js');
            const sass = new Sass();
            return new Promise((resolve, reject): void => {
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
            lessCompiler: this.lessCompiler,
            sassCompiler: this.scssCompiler,
            reader: this.loadLess,
            baseTheme: theme.name + '.' + theme.colorScheme.replace(/-/g, '.')
        };

        const extendedConfig = { ...baseConfig, ...config };
        return builder.buildTheme(extendedConfig);
    }

    buildTheme(theme: Theme, makeSwatch: boolean, outColorScheme: string, modifiedData: ExportedItem[], widgets: string[]): Promise<BuilderResult> {
        return this.build(theme, {
            makeSwatch,
            widgets,
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
