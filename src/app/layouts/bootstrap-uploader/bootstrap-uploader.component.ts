import { Component, EventEmitter, Input, Output } from '@angular/core';
import { alert } from 'devextreme/ui/dialog';
import { NotificationsService } from 'src/app/notification.service';
import { mutePromise } from 'src/app/promise-helper';
import { ImportService } from '../../import.service';

@Component({
    selector: 'app-bootstrap-uploader',
    templateUrl: './bootstrap-uploader.component.html',
    styleUrls: ['./bootstrap-uploader.component.css'],
    standalone: false
})
export class BootstrapUploaderComponent {
    @Input() accept: string;
    @Input() buttonText: string;
    @Input() type: string;
    @Input() version: number;
    @Input() height: number;
    @Input() labelText = 'or Drop the file here';
    @Output() imported = new EventEmitter();

    constructor(
        private importService: ImportService,
        private notifications: NotificationsService
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

                const isWizard = location.pathname.startsWith('/import') || location.pathname.startsWith('/ThemeBuilder');
                if(this.version) {
                    this.importService.importBootstrapVariables(meta, this.version, 'advanced').catch(() => {
                        const message = 'ThemeBuilder couldn\'t create a theme. The file may be corrupt or have an unsupported format.';

                        if(isWizard) {
                            this.notifications.error(message);
                        } else {
                            mutePromise(alert(message, 'Import Error'));
                        }
                    });
                } else {
                    this.importService.importMetadata(meta, 'advanced').catch(() => {
                        const message = 'Metadata has a wrong format.';

                        if(isWizard) {
                            this.notifications.error(message);
                        } else {
                            mutePromise(alert(message, 'Error'));
                        }
                    });
                }

                this.imported.emit();
                e.component.reset();
            };
            fileReader.readAsText(file);
        }
    }
}
