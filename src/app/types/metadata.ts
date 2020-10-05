import { ThemeConfig } from './theme';
import { MetaItem } from './meta-item';

export class Metadata {
    baseParameters: string[];
    generic: MetaItem[];
    material: MetaItem[];
    themes: ThemeConfig[];
    version: string;
}
