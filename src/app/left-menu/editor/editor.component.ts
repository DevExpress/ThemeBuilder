import { Component, Input, EventEmitter, Output } from '@angular/core';
import { MetadataRepositoryService } from '../../meta-repository.service';
import { NamesService } from '../../names.service';
import { MetaItem } from '../left-menu.aliases';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent {

    @Input('item') item: MetaItem;
    @Output() changed = new EventEmitter<void>();

    constructor(private names: NamesService, private metaRepository: MetadataRepositoryService) { }

    getRealName = name => this.names.getRealName(name);

    valueChanged(e: any, key: string) {
        this.metaRepository.updateSingleVariable(e, key, this.changed);
    }

}
