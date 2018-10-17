import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { Subject } from 'rxjs';
import { DxScrollViewComponent } from 'devextreme-angular';

@Component({
    selector: 'app-scrollview',
    templateUrl: './scrollview.component.html',
    styleUrls: ['./scrollview.component.css']
})
export class ScrollviewComponent implements AfterViewInit {
    widgetGroup = 'scrollview';
    isExpanded = new Subject<boolean>();

    @ViewChild('scrollView') scrollView: DxScrollViewComponent;

    collapsedOptions = {
        bounceEnabled: 'true',
        direction: 'both'
    };

    expandedOptions = {};

    ngAfterViewInit() {
        this.isExpanded.subscribe((expanded) => {
            this.scrollView.instance.option(expanded ? this.expandedOptions : this.collapsedOptions);
        });
    }
}
