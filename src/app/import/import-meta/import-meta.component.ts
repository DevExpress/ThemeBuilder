import { Component } from '@angular/core';
import { ImportService } from '../../import.service';

@Component({
    selector: 'app-import-meta',
    templateUrl: './import-meta.component.html',
    styleUrls: ['./import-meta.component.css']
})
export class ImportMetaComponent {
    constructor(private importService: ImportService) {}

    importValue = '';

    applyClick(t): void {
        this.importService.importMetadata(t.value, 'advanced');
    }
}
