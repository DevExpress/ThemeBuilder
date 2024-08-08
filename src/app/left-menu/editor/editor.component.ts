/* eslint-disable @typescript-eslint/no-magic-numbers */
import { Component, Input } from '@angular/core';
import { SafeHtml } from '@angular/platform-browser';
import { Router } from '@angular/router';

import { MetadataRepositoryService } from '../../meta-repository.service';
import { NamesService } from '../../names.service';
import { MetaItem } from '../../types/meta-item';
import { AnalyticsEventsService } from '../../analytics-events.service';

@Component({
    selector: 'app-editor',
    templateUrl: './editor.component.html',
    styleUrls: ['./editor.component.css']
})
export class EditorComponent {
    @Input('item') item: MetaItem;

    @Input() searchText = '';

    constructor(private names: NamesService,
        private metaRepository: MetadataRepositoryService,
        private analyticsEventsService: AnalyticsEventsService,
        private router: Router
    ) { }

    private isValueCanBePixels() {
        return this.item.Key.endsWith('border-radius');
    }

    private isPositiveNumber(value) {
        return /^[1-9]\d*$/.test(value);
    }

    highlight(text: string): SafeHtml {
        return this.names.getHighlightedForLeftMenuName(text, this.searchText);
    }

    getSettingsName(): string {
        const routeParts = this.router.url.split('/').filter((part) => part !== '');
        return routeParts[routeParts.length - 1];
    }

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
