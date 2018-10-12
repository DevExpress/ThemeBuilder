import { Component, OnDestroy, OnInit, Input } from '@angular/core';
import { MetadataRepositoryService } from '../../meta-repository.service';
import { MetaItem } from '../../types/meta-item';
import { NamesService } from '../../names.service';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-base-parameters',
    templateUrl: './base-parameters.component.html',
    styleUrls: ['./base-parameters.component.css']
})
export class BaseParametersComponent implements OnDestroy, OnInit {
    @Input() theme;

    subscription: Subscription;
    editorsData: Array<MetaItem>;

    constructor(private metadataRepository: MetadataRepositoryService, private names: NamesService) { }

    updateData() {
        this.metadataRepository.getBaseParameters().then(parameters => {
            this.editorsData = parameters.sort((item1, item2) => this.names.sortNames(item1.Name, item2.Name));
        });
    }

    ngOnInit() {
        this.updateData();

        this.subscription = this.metadataRepository.css.subscribe(() => {
            this.updateData();
        });
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
}
