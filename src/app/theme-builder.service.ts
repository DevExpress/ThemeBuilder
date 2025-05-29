import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BuilderResult } from './types/builder-result';
import { BuilderConfig } from './types/builder-config';
import { Theme } from './types/theme';
import { Metadata } from './types/metadata';

@Injectable()
export class ThemeBuilderService {
    private url = 'https://js.devexpress.com/api/themebuilder';

    constructor(private http: HttpClient) {}

    private build(theme: Theme, config: BuilderConfig): Promise<BuilderResult> {
        config.baseTheme = theme.name + '.' + theme.colorScheme.replace(/-/g, '.');

        const postBuilder: Promise<any> = this.http.post(`${this.url}/buildtheme`, config).toPromise();
        return postBuilder;
    }

    buildTheme(theme, config: BuilderConfig): Promise<BuilderResult> {
        return this.build(theme, config);
    }

    buildThemeBootstrap(theme: Theme, bootstrapVariables: string, bootstrapVersion: number): Promise<BuilderResult> {
        const LESS_BOOTSTRAP_VERSION = 3;
        return this.build(theme, {
            data: bootstrapVariables,
            inputFile: bootstrapVersion === LESS_BOOTSTRAP_VERSION ? '.less' : '.scss',
            bootstrapVersion
        });
    }

    getMetadata(): Promise<Metadata> {
        const promise = this.http.get(`${this.url}/metadata`).toPromise() as Promise<Metadata>;
        return promise;
    }
}
