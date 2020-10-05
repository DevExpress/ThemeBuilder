import { MetaItem } from './meta-item';

export class BuilderResult {
    css: string;
    compiledMetadata: Array<MetaItem>;
    modifyVars?: { [key: string]: string };
}
