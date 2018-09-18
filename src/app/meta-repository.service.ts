import { Injectable } from '@angular/core';
import * as MetadataLoader from 'devextreme-themebuilder/modules/metadata-loader';
import * as MetadataRepository from 'devextreme-themebuilder/modules/metadata-repository';
import * as themes from 'devextreme-themebuilder/modules/themes';



@Injectable()
export class MetadataRepositoryService {

    private metadataRepository: MetadataRepository;
    private metadataPromise: Promise<any>;

    constructor() {
        this.metadataRepository = new MetadataRepository(new MetadataLoader());
        this.metadataPromise = this.metadataRepository.init(themes);
    }

    getData(theme: any) {
        return this.metadataPromise.then(() => {
            return this.metadataRepository.getData(theme);
        });
    }

    updateData(data: Array<any>, theme: any) {
        return this.metadataPromise.then(() => {
            return this.metadataRepository.updateData(data, theme);
        });
    }

    getDataItemByKey(key: string, theme: any) {
        return this.metadataPromise.then(() => {
            return this.metadataRepository.getDataItemByKey(key, theme);
        });
    }

    getModifiedData(theme: any) {
        return this.metadataPromise.then(() => {
            const result = [];
            const themeData = this.metadataRepository.getData(theme);
            for(const themeName in themeData) {
                if(themeData.hasOwnProperty(themeName)) {
                    const groups = themeData[themeName];
                    groups.forEach(item => {
                        if(item.IsModified) {
                            result.push({ key: item.Key, value: item.Value });
                        }
                    });
                }
            }
            return result;
        });
    }
}
