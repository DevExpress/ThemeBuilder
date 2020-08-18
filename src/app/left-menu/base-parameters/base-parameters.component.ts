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
        this.editorsData = this.metadataRepository.getBaseParameters();
    }

    themeSizeChanged(e): void {
        const currentColorScheme = this.metadataRepository.theme.colorScheme;
        const size: string = e.value;
        const newColorScheme = size === 'compact' ?
            currentColorScheme + '-' + size :
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
