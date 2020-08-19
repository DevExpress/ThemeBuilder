import { EventEmitter, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import * as normalize from 'devextreme-themebuilder/modules/config-normalizer';
import { MetadataRepositoryService } from './meta-repository.service';

@Injectable()
export class ImportService {

    constructor(private metaRepository: MetadataRepositoryService, private route: Router) {}
    private savedMetadata: any = {};
    private normalizedMetadata: any = {};
    changed = new EventEmitter();

    importBootstrapVariables(variables: string, bootstrapVersion: number, redirectView: string): Promise<any> {
        this.clearSavedMetadata();
        return this.metaRepository.importBootstrap(variables, bootstrapVersion).then(() => {
            this.route.navigate([redirectView, this.metaRepository.theme.name, this.metaRepository.theme.colorScheme]);
        });
    }

    importMetadata(meta: string, redirectView: string): Promise<void> {
        this.clearSavedMetadata();
        try {
            this.savedMetadata = JSON.parse(meta);
        } catch {
            return new Promise((_, reject): void => reject());
        }

        this.normalizedMetadata = { ...this.savedMetadata };
        normalize(this.normalizedMetadata);

        return this.metaRepository.import({
            name: this.normalizedMetadata.themeName,
            colorScheme: this.normalizedMetadata.colorScheme
        }, this.savedMetadata.items).then(() => {
            this.route.navigate([redirectView, this.normalizedMetadata.themeName, this.normalizedMetadata.colorScheme]);
            this.changed.emit();
        });
    }

    exportMetadata(customSchemeName: string, useSwatch: boolean, widgets: string[]): string {
        const exportedObject = {
            ...this.savedMetadata,
            items: this.metaRepository.getModifiedItems(),
            baseTheme: [this.metaRepository.theme.name, this.metaRepository.theme.colorScheme.replace(/-/g, '.')].join('.'),
            outputColorScheme: customSchemeName,
            makeSwatch: useSwatch,
            version: this.metaRepository.getVersion(),
            widgets
        };

        const SPACES_NUMBER = 4;

        return JSON.stringify(exportedObject, null, SPACES_NUMBER);
    }

    exportCss(customSchemeName: string, useSwatch: boolean, widgets: string[]): Promise<string> {
        return this.metaRepository.export(customSchemeName, useSwatch, widgets);
    }

    getSavedMetadata(): any {
        return this.savedMetadata;
    }

    getColorSchemeName(): string {
        return this.normalizedMetadata.outColorScheme || 'custom-scheme';
    }

    getThemeName(): string {
        return this.metaRepository.theme.name;
    }

    getWidgets(): Array<string> {
        return this.normalizedMetadata.widgets;
    }

    clearSavedMetadata(): void {
        this.savedMetadata = {};
        this.normalizedMetadata = {};
        this.changed.emit();
    }
}
