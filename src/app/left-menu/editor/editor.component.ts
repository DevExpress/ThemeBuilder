/* eslint-disable @typescript-eslint/no-magic-numbers */
import { Component, Input, OnInit } from '@angular/core';
import { SafeHtml } from '@angular/platform-browser';

import { MetadataRepositoryService } from '../../meta-repository.service';
import { NamesService } from '../../names.service';
import { MetaItem } from '../../types/meta-item';

@Component({
    selector: 'app-editor',
    templateUrl: './editor.component.html',
    styleUrls: ['./editor.component.css']
})
export class EditorComponent implements OnInit {
    @Input('item') item: MetaItem;

    @Input() searchText = '';

    header: SafeHtml;

    constructor(private names: NamesService,
        private metaRepository: MetadataRepositoryService) { }

    ngOnInit(): void {
        this.header = this.highlight(this.item.Name);
        if(this.item.Value) {
            if(this.item.Type === 'color') {
                this.item.Value = this.hexToRgba(this.item.Value);
            }
        }
    }

    highlight(text: string): SafeHtml {
        return this.names.getHighlightedForLeftMenuName(text, this.searchText);
    }

    valueChanged(e: any, key: string): void {
        this.metaRepository.updateSingleVariable(e, key);
    }

    hexToRgba = (hex: string): string => {
        if(!hex || !hex.startsWith('#')) return hex;

        hex = hex.replace('#', '');

        const red = parseInt(hex.slice(0, 2), 16);
        const green = parseInt(hex.slice(2, 4), 16);
        const blue = parseInt(hex.slice(4, 6), 16);
        const alpha = parseInt(hex.slice(6, 8) || 'ff', 16);

        return `rgba(${red}, ${green}, ${blue}, ${alpha})`;
    };
}
