import { Component, Input, effect, signal, untracked } from '@angular/core';
import { Router } from '@angular/router';
import { MetadataRepositoryService } from '../../meta-repository.service';
import { NamesService } from '../../names.service';
import { MetaItem } from '../../types/meta-item';

@Component({
    selector: 'app-base-parameters',
    templateUrl: './base-parameters.component.html',
    styleUrls: ['./base-parameters.component.css'],
    standalone: false
})
export class BaseParametersComponent {
    @Input() theme: string;
    @Input() themeSize: string;

    editorsData = signal<MetaItem[]>([]);

    constructor(
        private metadataRepository: MetadataRepositoryService,
        private names: NamesService,
        private router: Router
    ) {
        // Reload base parameters on each theme build
        effect(() => {
            this.metadataRepository.css();
            untracked(() => this.updateData());
        });
    }

    updateData(): void {
        // eslint-disable-next-line @typescript-eslint/no-floating-promises
        this.metadataRepository.getBaseParameters().then((baseParameters) => {
            this.editorsData.set(baseParameters);
        });
    }

    themeSizeChanged(e): void {
        const currentColorScheme = this.metadataRepository.theme.colorScheme;
        const size: string = e.value;
        const newColorScheme = size === 'compact' ?
            currentColorScheme + '-' + size :
            currentColorScheme.replace('-compact', '');

        this.router.navigate(['master', this.theme, newColorScheme]);
    }
}
