import { Component, OnDestroy, OnInit } from '@angular/core';
import validationEngine from 'devextreme/ui/validation_engine';
import { BehaviorSubject, Subscription } from 'rxjs';

@Component({
    selector: 'app-editors',
    templateUrl: './editors.component.html',
    styleUrls: ['./editors.component.css']
})
export class EditorsComponent implements OnInit, OnDestroy {
    widgetGroup = 'editors';
    isExpanded = new BehaviorSubject<boolean>(false);
    subscription: Subscription;
    dropDownOptions = {hideOnParentScroll: true};
    labelMode = 'floating';
    stylingModeValue = 'outlined';

    ngOnInit(): void {
        this.subscription = this.isExpanded.subscribe((expanded) => {
            if(expanded) setTimeout(() => validationEngine.validateGroup());
        });
    }

    ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }
}
