export class BuilderResult {
    css: string;
    compiledMetadata: { [key: string]: string };
    swatchSelector: string;
    unusedWidgets: string[];
    widgets: string[];
    version: string;
}
