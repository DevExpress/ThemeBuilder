import { Injectable } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import * as baseParameters from 'devextreme-themebuilder/modules/base-parameters';
import * as MetadataLoader from 'devextreme-themebuilder/modules/metadata-loader';
import * as MetadataRepository from 'devextreme-themebuilder/modules/metadata-repository';
import * as themes from 'devextreme-themebuilder/modules/themes';
import { BehaviorSubject } from 'rxjs';
import { BuilderService } from './builder.service';
import { LoadingService } from './loading.service';
import { BuilderResult } from './types/builder-result';
import { ExportedItem } from './types/exported-item';
import { MetaItem } from './types/meta-item';
import { Theme } from './types/theme';

@Injectable()
export class MetadataRepositoryService {

    private metadataRepository: MetadataRepository;
    private metadataPromise: Promise<any>;
    private modifiedMetaCollection: ExportedItem[] = [];

    theme: Theme = { name: 'generic', colorScheme: 'light' };
    css = new BehaviorSubject<string>('');
    forceRebuild = false;
    globalBuildNumber = 0;

    constructor(private router: Router, private builder: BuilderService, private loading: LoadingService) {
        this.build();
        this.metadataRepository = new MetadataRepository(new MetadataLoader());
        const repositoryPromise = this.metadataRepository.init(themes);

        this.router.events.subscribe((event) => {
            if(!(event instanceof NavigationEnd)) return;
            const urlParts = event.url.split('/');
            const themeName = urlParts[2];
            const colorScheme = urlParts[3];

            if(!colorScheme && this.modifiedMetaCollection.length) {
                this.forceRebuild = true;
            }

            if(themeName && colorScheme) {
                if(this.theme.name !== themeName ||
                    this.theme.colorScheme !== colorScheme ||
                    this.forceRebuild
                ) {
                    this.forceRebuild = false;
                    this.theme = { name: themeName, colorScheme };
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

    getData(): Promise<MetaItem[]> {
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
        this.getDataItemByKey(key).then((dataItem) => {
            if(dataItem.Value === e.value) {
                return;
            }

            dataItem.Value = e.value;

            if(e.previousValue === undefined) {
                return;
            }

            this.modifiedMetaCollection = this.modifiedMetaCollection.filter((item) => item.key !== dataItem.Key);

            this.modifiedMetaCollection.push({ key: dataItem.Key, value: dataItem.Value });

            this.build();
        });
    }

    build(bootstrapData?: string, bootstrapVersion?: number): Promise<BuilderResult> {
        this.loading.show();
        const isFirstBootstrapBuild = bootstrapVersion !== undefined;
        const currentTheme = this.theme;
        const buildResult = isFirstBootstrapBuild ?
            this.builder.buildThemeBootstrap(currentTheme, bootstrapData, bootstrapVersion) :
            this.builder.buildTheme(currentTheme, false, null, this.modifiedMetaCollection, []);

        const savedBuildNumber = ++this.globalBuildNumber;

        return buildResult.then((result) => {
            this.loading.hide();

            if(savedBuildNumber !== this.globalBuildNumber) return;

            for(const dataKey in result.compiledMetadata) {
                if(result.compiledMetadata.hasOwnProperty(dataKey)) {
                    const item = this.metadataRepository.getDataItemByKey(dataKey, currentTheme);
                    item.Value = result.compiledMetadata[dataKey];
                }
            }

            if(isFirstBootstrapBuild) {
                for(const dataKey in result.modifyVars) {
                    if(result.modifyVars.hasOwnProperty(dataKey)) {
                        this.modifiedMetaCollection.push({ key: dataKey, value: result.modifyVars[dataKey] });
                    }
                }
            }

            this.css.next(result.css);
            return result;
        });
    }

    getBaseParameters(): Promise<MetaItem[]> {
        return this.metadataPromise.then(() => {
            const result: MetaItem[] = [];
            const themeData = this.metadataRepository.getData(this.theme);

            themeData.forEach((item) => {
                const index = baseParameters.indexOf(item.Key);
                if(index !== -1)
                    result[index] = item;
            });

            return result;
        });
    }

    getModifiedItems(): ExportedItem[] {
        return this.modifiedMetaCollection;
    }

    export(outColorScheme: string, swatch: boolean, widgets: string[]): Promise<string> {
        return new Promise((resolve, reject) => {
            this.builder.buildTheme(this.theme, swatch, outColorScheme, this.modifiedMetaCollection, widgets).then((result) => {
                resolve(result.css);
            }, (error) => {
                reject(error);
            });
        });
    }

    import(theme: Theme, modifiedData: ExportedItem[]): Promise<BuilderResult> {
        this.clearModifiedDataCache();
        this.theme = theme;
        this.modifiedMetaCollection = modifiedData;
        return this.build();
    }

    importBootstrap(bootstrapData: string, bootstrapVersion: number): Promise<BuilderResult> {
        this.clearModifiedDataCache();
        this.modifiedMetaCollection = [];
        return this.build(bootstrapData, bootstrapVersion);
    }

    version(): string {
        return this.metadataRepository.getVersion();
    }
}
