import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { MetadataRepositoryService } from '../../meta-repository.service';
import { NamesService } from '../../names.service';
import { MetaItem } from '../../types/meta-item';

@Component({
    selector: 'app-base-parameters',
    templateUrl: './base-parameters.component.html',
    styleUrls: ['./base-parameters.component.css']
})
export class BaseParametersComponent implements OnDestroy, OnInit {
    @Input() theme: string;
    @Input() themeSize: string;

    subscription: Subscription;
    editorsData: MetaItem[];

    constructor(
        private metadataRepository: MetadataRepositoryService,
        private names: NamesService,
        private router: Router
    ) { }

    updateData(): void {
        this.metadataRepository.getBaseParameters().then((parameters) => {
            this.editorsData = parameters;
        });
    }

    themeSizeChanged(e): void {
        const currentColorScheme = this.metadataRepository.theme.colorScheme;
        const newColorScheme = e.value === 'compact' ?
                                (currentColorScheme +  '-' + e.value) :
                                currentColorScheme.replace('-compact', '');

        this.router.navigate(['master', this.theme, newColorScheme]);
    }

    ngOnInit(): void {
        this.updateData();

        this.subscription = this.metadataRepository.css.subscribe(() => {
            this.updateData();
        });
    }

    ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }
}
