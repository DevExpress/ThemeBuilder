import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ImportService } from 'src/app/import.service';
import { alert } from 'devextreme/ui/dialog';

@Component({
  selector: 'app-bootstrap-uploader',
  templateUrl: './bootstrap-uploader.component.html',
  styleUrls: ['./bootstrap-uploader.component.css']
})
export class BootstrapUploaderComponent {
    @Input() accept: string;
    @Input() buttonText: string;
    @Input() version: number;
    @Input() height: number;
    @Input() labelText = 'or Drop the file here';
    @Output() imported = new EventEmitter();

    constructor(private importService: ImportService) {}

    uploaded(e) {
        const file = e.value[0];
        if(file) {
            let fileReader: FileReader;
            fileReader = new FileReader();
            fileReader.onload = () => {
                let meta: string;
                if(typeof fileReader.result === 'string') {
                    meta = fileReader.result;
                } else {
                    throw new Error('FileReader.readAsText set FileReader.result to a value which is not a string');
                }

                if(this.version) {
                    this.importService.importBootstrapVariables(meta, this.version, 'advanced');
                } else {
                    this.importService.importMetadata(meta, 'advanced').catch(() => {
                        alert('Metadata has a wrong format.', 'Error');
                    });
                }

                this.imported.emit();
                e.component.reset();
            };
            fileReader.readAsText(file);
        }
    }
}
