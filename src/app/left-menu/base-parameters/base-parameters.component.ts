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
    currentThemeSize: string;

    constructor(
        private metadataRepository: MetadataRepositoryService,
        private names: NamesService,
        private router: Router
    ) { }

    updateData() {
        this.metadataRepository.getBaseParameters().then(parameters => {
            this.editorsData = parameters.sort((item1, item2) => this.names.sortNames(item1.Name, item2.Name));
        });
    }

    themeSizeChanged(e) {
        if(e.component.canceled) {
            e.component.canceled = false;
            return;
        }

        const currentColorScheme = this.router.url.split('/')[3];
        const newColorScheme = e.value === 'Compact' ?
                                (currentColorScheme +  '-' + e.value.toLowerCase()) :
                                currentColorScheme.split('-')[0];

        this.router.navigate(['master', this.theme, newColorScheme]);
    }


    ngOnInit() {
        this.currentThemeSize = this.themeSize ?
                                (this.themeSize.charAt(0).toUpperCase() + this.themeSize.slice(1)) :
                                'Normal';

        this.updateData();

        this.subscription = this.metadataRepository.css.subscribe(() => {
            this.updateData();
        });
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
}
