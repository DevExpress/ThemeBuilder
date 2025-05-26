import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-preview-title',
    templateUrl: './preview-title.component.html',
    styleUrls: ['./preview-title.component.css']
})
export class PreviewTitleComponent{
    @Input() isNew = false;
}
