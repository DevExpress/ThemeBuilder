import { Component, EventEmitter, Input, Output } from '@angular/core';
import { alert } from 'devextreme/ui/dialog';
import { GoogleAnalyticsEventsService } from '../../google-analytics-events.service';
import { ImportService } from '../../import.service';

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

    constructor(
        private importService: ImportService,
        private googleAnalyticsEventsService: GoogleAnalyticsEventsService
    ) {}

    uploaded(e): void {
        const file = e.value[0];
        if(file) {
            const fileReader = new FileReader();
            fileReader.onload = (): void => {
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

                this.googleAnalyticsEventsService.emitEvent(
                    'import',
                    this.version ? 'bootstrap variables (file)' : 'metadata (file)');

                this.imported.emit();
                e.component.reset();
            };
            fileReader.readAsText(file);
        }
    }
}
