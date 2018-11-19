import { Component, OnInit, OnDestroy } from '@angular/core';
import { BehaviorSubject, Subscription } from 'rxjs';
import validationEngine from 'devextreme/ui/validation_engine';

@Component({
    selector: 'app-editors',
    templateUrl: './editors.component.html',
    styleUrls: ['./editors.component.css']
})
export class EditorsComponent implements OnInit, OnDestroy {
    widgetGroup = 'editors';
    isExpanded = new BehaviorSubject<boolean>(false);
    subscription: Subscription;

    ngOnInit() {
        this.subscription = this.isExpanded.subscribe((expanded) => {
             if(expanded)
                setTimeout(() => validationEngine.validateGroup());
        });
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
}
