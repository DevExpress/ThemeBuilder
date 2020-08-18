import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { version } from 'devextreme-themebuilder/package.json';
import { BuilderResult } from './types/builder-result';
import { Metadata } from './types/metadata';

@Injectable()
export class ThemeBuilder {
    constructor(private http: HttpClient) {}

    private url: string = 'https://js.devexpress.com/api/themebuilder';

    buildtheme(config: any): Promise<BuilderResult> {
        const promise: Promise<any> = this.http.post(`${this.url}/buildtheme`, config).toPromise();
        return promise;
    }

    getMetadata(): Promise<Metadata> {
        const promise: Promise<any> = this.http.get(`${this.url}/metadata`).toPromise();
        return promise;
    }

    getVersion(): string {
        return version;
    }
}
