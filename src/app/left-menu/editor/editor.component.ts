import { Component, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MetadataRepositoryService } from '../../meta-repository.service';
import { NamesService } from '../../names.service';
import { MetaItem } from '../../types/meta-item';

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
                private sanitizer: DomSanitizer) { }

    highlight(text: string) {
        text = this.names.getRealName(text);
        if(!this.searchText) return text;

        const highlightedText = text.replace(new RegExp(`(${this.searchText})`, 'ig'), `<span style="color:#f05b41">$1</span>`);

        return this.sanitizer.bypassSecurityTrustHtml(highlightedText);
   }

    valueChanged(e: any, key: string) {
        this.metaRepository.updateSingleVariable(e, key);
    }

}
