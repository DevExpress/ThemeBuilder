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
        const startText = text.slice(0, text.toLowerCase().indexOf(this.searchText));
        const colorText = text.slice(text.toLowerCase().indexOf(this.searchText), text.toLowerCase().indexOf(this.searchText) + this.searchText.length);
        const textEnd = text.slice(text.toLowerCase().indexOf(this.searchText) + this.searchText.length);
        if(this.searchText.length >= 3) {
            text = startText + '<span style="color:#f05b41">' + colorText + '</span>' + textEnd;
            return this.sanitizer.bypassSecurityTrustHtml(text);
        }
        return text;
   }

    valueChanged(e: any, key: string) {
        this.metaRepository.updateSingleVariable(e, key);
    }

}
