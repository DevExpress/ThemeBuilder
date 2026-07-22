import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'app-preview-title',
    templateUrl: './preview-title.component.html',
    styleUrls: ['./preview-title.component.css'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class PreviewTitleComponent{
    @Input() isNew = false;
}
