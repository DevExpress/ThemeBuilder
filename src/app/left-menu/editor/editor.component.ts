/* eslint-disable @typescript-eslint/no-magic-numbers */
import { Component, input, Input, computed } from '@angular/core';
import { Router } from '@angular/router';

import { MetadataRepositoryService } from '../../meta-repository.service';
import { NamesService } from '../../names.service';
import { MetaItem } from '../../types/meta-item';
import { AnalyticsEventsService } from '../../analytics-events.service';

@Component({
    selector: 'app-editor',
    templateUrl: './editor.component.html',
    styleUrls: ['./editor.component.css'],
    standalone: false
})
export class EditorComponent {
    item = input.required<MetaItem>();
    @Input() searchText = '';

    constructor(private names: NamesService,
        private metaRepository: MetadataRepositoryService,
        private analyticsEventsService: AnalyticsEventsService,
        private router: Router
    ) { }

    private isValueCanBePixels() {
        return this.item().Key.endsWith('border-radius');
    }

    private isPositiveNumber(value: string) {
        return /^[1-9]\d*$/.test(value);
    }

    highlight(text: string): string {
        return this.names.getHighlightedForLeftMenuName(text, this.searchText);
    }

    getSettingsName(): string {
        const routeParts = this.router.url.split('/').filter((part) => part !== '');
        return routeParts[routeParts.length - 1];
    }

    value = computed(() => {
        this.metaRepository.css();
        return this.item().Value;
    });

    valueTextChanged(e: { value: string, component: any }, key: string): void {
        this.analyticsEventsService.trackEvent(
            'TB: Settings',
            `Tb ${this.getSettingsName()} - ${key}`
        );
        if(this.isValueCanBePixels() && this.isPositiveNumber(e.value)) {
            e.value = e.value + 'px';
        }

        this.metaRepository.updateSingleVariable(e, key);
    }

    valueChanged(e: any, key: string): void {
        this.analyticsEventsService.trackEvent(
            'TB: Settings',
            `Tb ${this.getSettingsName()} - ${key}`
        );
        this.metaRepository.updateSingleVariable(e, key);
    }
}
