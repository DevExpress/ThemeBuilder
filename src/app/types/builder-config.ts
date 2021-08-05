import { ExportedItem } from './exported-item';

export class BuilderConfig {
    baseTheme?: string;
    makeSwatch?: boolean;
    widgets?: Array<string>;
    outputColorScheme?: string;
    outColorScheme?: string;
    items?: Array<ExportedItem>;
    noClean?: boolean;
    data?: string;
    inputFile?: string;
    outputFile?: string;
    assetsBasePath?: string;
    themeName?: string;
    colorScheme?: string;
    removeExternalResources?: boolean;
    bootstrapVersion?: number;
}
