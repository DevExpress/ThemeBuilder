import { Component, Input } from '@angular/core';

import { MetadataRepositoryService } from '../../meta-repository.service';
import { NamesService } from '../../names.service';
import { MetaItem } from '../../types/meta-item';
import { SafeHtml } from '@angular/platform-browser';

@Component({
    selector: 'app-editor',
    templateUrl: './editor.component.html',
    styleUrls: ['./editor.component.css']
})
export class EditorComponent {

    @Input('item') item: MetaItem;
    @Input() searchText = '';

    constructor(private names: NamesService,
        private metaRepository: MetadataRepositoryService) { }

    highlight(text: string): SafeHtml {
        return this.names.getHighlightedForLeftMenuName(text, this.searchText);
    }

    valueChanged(e: any, key: string): void {
        this.metaRepository.updateSingleVariable(e, key);
    }

}
