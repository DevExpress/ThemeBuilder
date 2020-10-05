import { Injectable } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { ThemeBuilderService } from './theme-builder.service';
import { LoadingService } from './loading.service';
import { BuilderResult } from './types/builder-result';
import { ExportedItem } from './types/exported-item';
import { MetaItem } from './types/meta-item';
import { Theme, ThemeConfig } from './types/theme';
import { Metadata } from './types/metadata';

@Injectable()
export class MetadataRepositoryService {
    private modifiedMetaCollection: ExportedItem[] = [];
    private metadata: Metadata;

    theme: Theme = { name: 'generic', colorScheme: 'light' };
    css = new BehaviorSubject<string>('');
    forceRebuild = false;
    globalBuildNumber = 0;

    constructor(private router: Router, private themeBuilder: ThemeBuilderService, private loading: LoadingService) {
        this.build();

        this.router.events.subscribe((event) => {
            if(!(event instanceof NavigationEnd)) return;
            const urlParts = event.url.split('/');
            const THEME_POSITION = 2;
            const COLOR_SCHEME_POSITION = 3;
            const themeName = urlParts[THEME_POSITION];
            const colorScheme = urlParts[COLOR_SCHEME_POSITION];

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
    }

    clearModifiedDataCache(): void {
        this.modifiedMetaCollection = [];
    }

    private getMetadata(): Promise<Metadata> {
        if(this.metadata) {
            return Promise.resolve(this.metadata);
        }

        return this.themeBuilder.getMetadata().then((metadata) => {
            if(!this.metadata) this.metadata = metadata;
            return metadata;
        });
    }

    getData(): Promise<MetaItem[]> {
        const promiseMetadata = this.getMetadata();

        return promiseMetadata.then((metadata) => {
            return metadata[this.theme.name];
        });
    }

    getDataItemByKey(key: string): Promise<MetaItem> {
        return this.getData().then((data) => {
            return data.find((item) => item.Key === key);
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
            this.themeBuilder.buildThemeBootstrap(currentTheme, bootstrapData, bootstrapVersion) :
            this.themeBuilder.buildTheme(currentTheme, {
                makeSwatch: false,
                items: this.modifiedMetaCollection,
                widgets: [],
                noClean: true
            });

        const savedBuildNumber = ++this.globalBuildNumber;

        return buildResult.then((result) => {
            this.loading.hide();

            if(savedBuildNumber !== this.globalBuildNumber) return;

            if(isFirstBootstrapBuild) {
                for(const dataKey in result.modifyVars) {
                    if(Object.prototype.hasOwnProperty.call(result.modifyVars, dataKey)) {
                        this.modifiedMetaCollection.push({ key: dataKey, value: result.modifyVars[dataKey] });
                    }
                }
            }

            const itemPromises = [];
            Object.keys(result.compiledMetadata).forEach((dataKey) => {
                if(Object.prototype.hasOwnProperty.call(result.compiledMetadata, dataKey)) {
                    itemPromises.push(this.getDataItemByKey(dataKey));
                }
            });

            return Promise.all(itemPromises).then((resolveItems) => {
                resolveItems.forEach((item) => {
                    item.Value = result.compiledMetadata[item.Key];
                });

                this.css.next(result.css);
                return result;
            });
        });
    }

    getBaseParameters(): Promise<MetaItem[]> {
        return this.getData().then((items) => {
            const result: MetaItem[] = [];
            items.forEach((item) => {
                const index = this.metadata.baseParameters.indexOf(item.Key.replace('$', '@'));
                if(index >= 0) result[index] = item;
            });
            return result;
        });
    }

    getModifiedItems(): ExportedItem[] {
        return this.modifiedMetaCollection;
    }

    export(outColorScheme: string, swatch: boolean, widgets: string[], assetsBasePath: string): Promise<string> {
        return new Promise((resolve, reject): void => {
            this.themeBuilder.buildTheme(this.theme, {
                makeSwatch: swatch,
                outputColorScheme: outColorScheme,
                items: this.modifiedMetaCollection,
                widgets,
                noClean: false,
                assetsBasePath
            }).then((result) => {
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

    getVersion(): Promise<string> {
        if(this.metadata) {
            return Promise.resolve(this.metadata.version);
        }

        return this.getMetadata().then((metadata) => {
            if(!this.metadata) this.metadata = metadata;
            return metadata.version;
        });
    }

    getThemes(): Promise<ThemeConfig[]> {
        if(this.metadata) {
            return Promise.resolve(this.metadata.themes);
        }

        return this.getMetadata().then((metadata) => {
            if(!this.metadata) this.metadata = metadata;
            return metadata.themes;
        });
    }
}
