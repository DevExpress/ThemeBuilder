import { Component, Input } from '@angular/core';
import { MetadataRepositoryService } from '../../meta-repository.service';
import { NamesService } from '../../names.service';
import { MetaItem } from '../../types/meta-item';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent {

    @Input('item') item: MetaItem;
    @Input() searchText: string;

    constructor(private names: NamesService,
                private metaRepository: MetadataRepositoryService,
                private sanitizer: DomSanitizer) { }

    getRealName = (name) => this.names.getRealName(name);

    changeColor(text: string) {
      if (this.searchText.length >= 3) {
       text = '<span style="color:#f05b41">' + text.slice(0, this.searchText.length) + '</span>' + text.slice(this.searchText.length);
       return this.sanitizer.bypassSecurityTrustHtml(text);
      }
      return text;
   }

    valueChanged(e: any, key: string) {
        this.metaRepository.updateSingleVariable(e, key);
    }

}
