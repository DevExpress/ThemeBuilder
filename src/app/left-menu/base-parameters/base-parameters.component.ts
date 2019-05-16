import { Component, OnDestroy, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
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
    @Input() theme: string;
    @Input() themeSize: string;

    subscription: Subscription;
    editorsData: Array<MetaItem>;

    constructor(
        private metadataRepository: MetadataRepositoryService,
        private names: NamesService,
        private router: Router
    ) { }

    updateData() {
        this.metadataRepository.getBaseParameters().then(parameters => {
            this.editorsData = parameters;
        });
    }

    themeSizeChanged(e) {
        const currentColorScheme = this.metadataRepository.theme.colorScheme;
        const newColorScheme = e.value === 'compact' ?
                                (currentColorScheme +  '-' + e.value) :
                                currentColorScheme.replace('-compact', '');

        this.router.navigate(['master', this.theme, newColorScheme]);
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
