import { Component, AfterViewInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import validationEngine from 'devextreme/ui/validation_engine';

@Component({
    selector: 'app-editors',
    templateUrl: './editors.component.html',
    styleUrls: ['./editors.component.css']
})
export class EditorsComponent implements AfterViewInit {
    widgetGroup = 'editors';
    isExpanded = new BehaviorSubject<boolean>(false);

    ngAfterViewInit() {
        validationEngine.validateGroup();
    }
}
