import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as lessCompiler from 'less/lib/less-browser';
import * as builder from 'devextreme-themebuilder';
import * as baseParameters from 'devextreme-themebuilder/modules/base-parameters';
import { MetadataRepositoryService } from './meta-repository.service';


@Injectable()
export class BuilderService {
    loadLess: any;

    constructor(private http: HttpClient, private metaRepository: MetadataRepositoryService) {
       this.loadLess = (fileName: string) => {
            return  this.http.get(fileName, { responseType: 'text' })
                .toPromise();
        };
    }

    buildTheme(themeName: string, colorScheme: string, makeSwatch: boolean, outColorScheme: string) {
        return this.metaRepository.getModifiedData({ name: themeName, colorScheme: colorScheme }).then(modifiedData => {
            return builder.buildTheme({
                lessCompiler: lessCompiler(window, {}),
                makeSwatch: makeSwatch,
                outputColorScheme: outColorScheme,
                reader: this.loadLess,
                items: modifiedData,
                baseTheme: themeName + '.' + colorScheme.replace('-', '.')
            });
        });
    }

    buildBaseConstants(result) {
        const metadata = result.compiledMetadata;
        const baseConstants = {};

        for(const metadataKey in metadata) {
            if(baseParameters.indexOf(metadataKey) === -1) { continue; }

            const metadataKeyParts = metadataKey.split('-');
            let key = '';

            for(let i = 0; i < metadataKeyParts.length; i++) {
                if(i === 0) {
                    key =  metadataKeyParts[0].replace(/@/, '');
                } else {
                    key += metadataKeyParts[i].substr(0, 1).toUpperCase() + metadataKeyParts[i].substr(1);
                }
            }

            baseConstants[key] = metadata[metadataKey];
        }

        return baseConstants;
    }
}
