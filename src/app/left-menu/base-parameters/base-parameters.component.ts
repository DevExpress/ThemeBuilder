import { Component } from '@angular/core';
import { MetadataRepositoryService } from '../../meta-repository.service';
import { MetaItem } from '../left-menu.aliases';
import { NamesService } from '../../names.service';

@Component({
    selector: 'app-base-parameters',
    templateUrl: './base-parameters.component.html',
    styleUrls: ['./base-parameters.component.css']
})
export class BaseParametersComponent {

    constructor(private metadataRepository: MetadataRepositoryService, private names: NamesService) {
        this.metadataRepository.getBaseParameters().then(parameters => {
            this.editorsData = parameters.sort((item1, item2) => this.names.sortNames(item1.Name, item2.Name));
        });
    }

    editorsData: Array<MetaItem>;

    valueChanged(){}


}
