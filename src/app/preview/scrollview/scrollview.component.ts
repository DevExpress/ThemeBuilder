import { Component, ViewChild, OnInit, OnDestroy } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { DxScrollViewComponent } from 'devextreme-angular';

@Component({
    selector: 'app-scrollview',
    templateUrl: './scrollview.component.html',
    styleUrls: ['./scrollview.component.css']
})
export class ScrollviewComponent implements OnInit, OnDestroy {
    widgetGroup = 'scrollview';
    isExpanded = new Subject<boolean>();
    subscription: Subscription;

    @ViewChild('scrollView') scrollView: DxScrollViewComponent;

    collapsedOptions = {
        bounceEnabled: 'true',
        direction: 'both'
    };

    expandedOptions = {};

    ngOnInit() {
        this.subscription = this.isExpanded.subscribe((expanded) => {
            this.scrollView.instance.option(expanded ? this.expandedOptions : this.collapsedOptions);
        });
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
}
