import { Component } from '@angular/core';
import { alert } from 'devextreme/ui/dialog';
import { ImportService } from '../../import.service';

@Component({
    selector: 'app-import-meta',
    templateUrl: './import-meta.component.html',
    styleUrls: ['./import-meta.component.css']
})
export class ImportMetaComponent {
    constructor(private importService: ImportService) {}

    importValue = '';

    applyClick(t) {
        this.importService.importMetadata(t.value, 'advanced').then(null, () => {
            alert('Metadata has a wrong format.', 'Error');
        });
    }
}
