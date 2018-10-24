import { Injectable } from '@angular/core';
import { MetadataRepositoryService } from './meta-repository.service';
import * as normalize from 'devextreme-themebuilder/modules/config-normalizer';
import { Router } from '@angular/router';

@Injectable()
export class ImportService {

    constructor(private metaRepository: MetadataRepositoryService, private route: Router) { }
    savedMetadata: any = {};
    normalizedMetadata: any = {};

    importBootstrapVariables() {}

    importMetadata(meta: string, redirectView: string): Promise<void> {
        try {
            this.savedMetadata = JSON.parse(meta);
        } catch {
            return new Promise((_, reject) => { reject(); });
        }

        this.normalizedMetadata = Object.assign({}, this.savedMetadata);
        normalize(this.normalizedMetadata);

        return this.metaRepository.import({
            name: this.normalizedMetadata.themeName,
            colorScheme: this.normalizedMetadata.colorScheme
        }, this.savedMetadata.items).then(() => {
            this.route.navigate([redirectView, this.normalizedMetadata.themeName, this.normalizedMetadata.colorScheme]);
        });
    }

    exportMetadata(): any {
        return Object.assign(this.savedMetadata, { items: this.metaRepository.getModifiedItems() });
    }

    exportCss(customSchemeName: string, useSwatch: boolean): Promise<string> {
        const schemeName = customSchemeName || this.normalizedMetadata.outColorScheme || 'custom-scheme';
        const swatch = useSwatch || this.normalizedMetadata.makeSwatch;

        return this.metaRepository.export(schemeName, swatch);
    }
}
