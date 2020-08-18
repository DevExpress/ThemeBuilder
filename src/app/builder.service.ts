import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ThemeBuilder } from './themebuilder.service';
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

    constructor(private http: HttpClient, private themeService: ThemeBuilder) {
        this.loadLess = (fileName: string): Promise<string> => {
            return this.http.get(fileName, { responseType: 'text' })
                .toPromise();
        };

        const compilerOptions = { math: 'always', useFileCache: true };

        if(semver.gte(this.themeService.getVersion(), '19.2.0-dev')) {
            compilerOptions['filename'] = document.baseURI + 'devextreme-themebuilder/data/less/bundles/bundle.less'; // fake path to the bundle
        }

        this.lessCompiler = lessCompiler(window, compilerOptions);
    }

    private scssCompiler: any = {
        render: (scss) => {
            Sass.setWorkerUrl('sass/sass.worker.js');
            const sass = new Sass();

            return new Promise((resolve, reject): void => {
                sass.compile(scss, (result) => {
                    const SUCCESS_STATUS = 0;
                    if(result.status === SUCCESS_STATUS) {
                        resolve(result.text);
                    } else {
                        reject(result);
                    }
                });
            });
        }
    };

    private build(theme: Theme, config: any): Promise<BuilderResult> {
        config.baseTheme = theme.name + '.' + theme.colorScheme.replace(/-/g, '.');

        const postBuilder: Promise<any> = this.themeService.buildtheme(config);
        return postBuilder;
    }

    buildTheme(theme: Theme, makeSwatch: boolean, outColorScheme: string, modifiedData: ExportedItem[], widgets: string[], noClean = true): Promise<BuilderResult> {
        return this.build(theme, {
            makeSwatch,
            widgets,
            outputColorScheme: outColorScheme,
            items: modifiedData,
            noClean
        });
    }

    buildThemeBootstrap(theme: Theme, bootstrapVariables: string, bootstrapVersion: number): Promise<BuilderResult> {
        const SCSS_BOOTSTRAP_VERSION = 4;
        return this.build(theme, {
            data: bootstrapVariables,
            inputFile: bootstrapVersion === SCSS_BOOTSTRAP_VERSION ? '.scss' : '.less'
        });
    }
}
