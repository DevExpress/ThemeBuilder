import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Router, NavigationEnd } from '@angular/router';
import * as MetadataLoader from 'devextreme-themebuilder/modules/metadata-loader';
import * as MetadataRepository from 'devextreme-themebuilder/modules/metadata-repository';
import * as baseParameters from 'devextreme-themebuilder/modules/base-parameters';
import * as themes from 'devextreme-themebuilder/modules/themes';
import { MetaItem } from './types/meta-item';
import { BuilderService } from './builder.service';
import { ExportedItem } from './types/exported-item';
import { Theme } from './types/theme';
import { BuilderResult } from './types/builder-result';

@Injectable()
export class MetadataRepositoryService {

    private metadataRepository: MetadataRepository;
    private metadataPromise: Promise<any>;
    private modifiedMetaCollection: Array<ExportedItem> = [];

    theme: Theme = { name: 'generic', colorScheme: 'light' };
    css = new BehaviorSubject<string>('');

    constructor(private router: Router, private builder: BuilderService) {
        this.build();

        this.metadataRepository = new MetadataRepository(new MetadataLoader());
        const repositoryPromise = this.metadataRepository.init(themes);

        this.router.events.subscribe(event => {
            if(!(event instanceof NavigationEnd)) return;
            const urlParts = event.url.split('/');
            if(urlParts[2] && urlParts[3]) {
                if(!this.theme || this.theme.name !== urlParts[2] || this.theme.colorScheme !== urlParts[3]) {
                    this.theme = { name: urlParts[2], colorScheme: urlParts[3] };
                    this.clearModifiedDataCache();
                    this.build();
                }
            }
        });

        this.metadataPromise = repositoryPromise;
    }

    clearModifiedDataCache(): void {
        this.modifiedMetaCollection = [];
    }

    getData(): Promise<Array<MetaItem>> {
        return this.metadataPromise.then(() => {
            return this.metadataRepository.getData(this.theme);
        });
    }

    getDataItemByKey(key: string): Promise<MetaItem> {
        return this.metadataPromise.then(() => {
            return this.metadataRepository.getDataItemByKey(key, this.theme);
        });
    }

    updateSingleVariable(e: any, key: string): void {
        this.getDataItemByKey(key).then(dataItem => {
            if(dataItem.Value === e.value) {
                return;
            }

            dataItem.Value = e.value;

            if(e.previousValue === undefined) {
                return;
            }

            this.modifiedMetaCollection = this.modifiedMetaCollection.filter(item => item.key !== dataItem.Key);

            this.modifiedMetaCollection.push({ key: dataItem.Key, value: dataItem.Value });

            this.build();
        });
    }

    build(): Promise<BuilderResult> {
        return this.builder.buildTheme(this.theme, false, null, this.modifiedMetaCollection).then(result => {
            for (const dataKey in result.compiledMetadata) {
                if (result.compiledMetadata.hasOwnProperty(dataKey)) {
                    const item = this.metadataRepository.getDataItemByKey(dataKey, this.theme);
                    item.Value = result.compiledMetadata[dataKey];
                }
            }

            this.css.next(result.css);
            return result;
        });
    }

    getBaseParameters(): Promise<Array<MetaItem>> {
        return this.metadataPromise.then(() => {
            const result: Array<MetaItem> = [];
            const themeData = this.metadataRepository.getData(this.theme);

            themeData.forEach(item => {
                if(baseParameters.indexOf(item.Key) !== -1) {
                    result.push(item);
                }
            });
            return result;
        });
    }

    getModifiedItems(): Array<ExportedItem> {
        return this.modifiedMetaCollection;
    }

    export(outColorScheme: string, swatch: boolean): Promise<string> {
        return new Promise((resolve, reject) => {
            this.builder.buildTheme(this.theme, swatch, outColorScheme, this.modifiedMetaCollection).then(result => {
                resolve(result.css);
            }, error => {
                reject(error);
            });
        });
    }

    import(theme: Theme, modifiedData: Array<ExportedItem>): Promise<BuilderResult> {
        this.clearModifiedDataCache();
        this.theme = theme;
        this.modifiedMetaCollection = modifiedData;
        return this.build();
    }
}
