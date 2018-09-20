import { EventEmitter, Injectable } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import * as MetadataLoader from 'devextreme-themebuilder/modules/metadata-loader';
import * as MetadataRepository from 'devextreme-themebuilder/modules/metadata-repository';
import * as baseParameters from 'devextreme-themebuilder/modules/base-parameters';
import * as themes from 'devextreme-themebuilder/modules/themes';
import { filter } from 'rxjs/operators';
import { MetaItem } from './left-menu/left-menu.aliases';



@Injectable()
export class MetadataRepositoryService {

    private metadataRepository: MetadataRepository;
    private metadataPromise: Promise<any>;
    private theme: any;

    constructor(private router: Router) {
        this.metadataRepository = new MetadataRepository(new MetadataLoader());
        this.metadataPromise = this.metadataRepository.init(themes);

        this.router.events.pipe(
            filter(event => event instanceof NavigationEnd)
        ).subscribe(event => {
            const urlParts = event.url.split('/');
            if(urlParts[2] && urlParts[3]) {
                this.theme = { name: urlParts[2], colorScheme: urlParts[3] };
            }
        });
    }

    getData() {
        return this.metadataPromise.then(() => {
            return this.metadataRepository.getData(this.theme);
        });
    }

    updateData(data: Array<any>) {
        return this.metadataPromise.then(() => {
            return this.metadataRepository.updateData(data, this.theme);
        });
    }

    getDataItemByKey(key: string) {
        return this.metadataPromise.then(() => {
            return this.metadataRepository.getDataItemByKey(key, this.theme);
        });
    }

    getModifiedData() {
        return this.metadataPromise.then(() => {
            const result = [];
            const themeData = this.metadataRepository.getData(this.theme);
            for(const groupName in themeData) {
                if(themeData.hasOwnProperty(groupName)) {
                    const groups = themeData[groupName];
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

    updateSingleVariable(e: any, key: string, emitter: EventEmitter<void>) {
        this.getDataItemByKey(key).then(dataItem => {
            if(dataItem.Value === e.value) {
                return;
            }

            dataItem.Value = e.value;

            if(e.previousValue === undefined) {
                return;
            }

            dataItem.IsModified = true;
            emitter.emit();
        });
    }

    getBaseParameters() {
        return this.metadataPromise.then(() => {
            const result: Array<MetaItem> = [];
            const themeData = this.metadataRepository.getData(this.theme);
            for(const groupName in themeData) {
                if(themeData.hasOwnProperty(groupName)) {
                    const groups = themeData[groupName];
                    groups.forEach(item => {
                        if(baseParameters.indexOf(item.Key) !== -1) {
                            result.push(item);
                        }
                    });
                }
            }
            return result;
        });
    }
}
