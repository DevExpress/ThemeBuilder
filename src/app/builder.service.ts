import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as lessCompiler from 'less/lib/less-browser';
import * as builder from 'devextreme-themebuilder';
import * as baseParameters from 'devextreme-themebuilder/modules/base-parameters';


@Injectable()
export class BuilderService {
    loadLess: any;

    constructor(private http: HttpClient ) {
       this.loadLess = (fileName: string) => {
            return  this.http.get(fileName, { responseType: 'text' })
                .toPromise();
        };
    }

    metadataPromise = new Promise(function(resolve) { resolve('{}'); });

    buildTheme(baseTheme, swatchSelector) {
        return builder.buildTheme({
            lessCompiler: lessCompiler(window, {}),
            swatchSelector: swatchSelector,
            reader: this.loadLess,
            metadataPromise: this.metadataPromise,
            baseTheme: baseTheme
        });
    }

    buildBaseConstants(result) {
        const metadata = result.compiledMetadata;
        const baseConstants = {};

        for(const metadataKey in metadata) {
            if(baseParameters.indexOf(metadataKey) === -1) continue;

            const metadataKeyParts =  metadataKey.split('-');
            let key = '';

            for(let i = 0; i < metadataKeyParts.length; i++) {
                if(i === 0)
                    key =  metadataKeyParts[0].replace(/@/, '');
                else
                    key += metadataKeyParts[i].substr(0, 1).toUpperCase() + metadataKeyParts[i].substr(1);
            }

            baseConstants[key] = metadata[metadataKey];
        }

        return baseConstants;
    }
}
