import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BuilderResult } from './types/builder-result';
import { ExportedItem } from './types/exported-item';
import { Theme } from './types/theme';
import { Metadata } from './types/metadata';

@Injectable()
export class ThemeBuilderService {
    private url = 'https://js.devexpress.com/api/themebuilder';

    constructor(private http: HttpClient) {}

    private build(theme: Theme, config: any): Promise<BuilderResult> {
        config.baseTheme = theme.name + '.' + theme.colorScheme.replace(/-/g, '.');

        const postBuilder: Promise<any> = this.http.post(`${this.url}/buildtheme`, config).toPromise();
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

    getMetadata(): Promise<Metadata> {
        const promise = this.http.get(`${this.url}/metadata`).toPromise() as Promise<Metadata>;
        return promise;
    }
}
