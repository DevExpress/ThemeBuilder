import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { DxListComponent } from 'devextreme-angular';
import { Subject, Subscription } from 'rxjs';
import { Properties } from 'devextreme/ui/list';

@Component({
    selector: 'app-list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit, OnDestroy {
    widgetGroup = 'list';
    isExpanded = new Subject<boolean>();
    subscription: Subscription;

    @ViewChild('list') list: DxListComponent;

    collapsedOptions: Properties = {
        grouped: true,
        allowItemDeleting: true,
        selectionMode: 'single',
        items: [{
            key: 'Ship Country: Germany',
            items: [
                {
                    text: 'Toms Spezialitaten'
                }, {
                    text: 'Ottilies Kaseladen',
                    badge: 5
                }
            ]
        },
        {
            key: 'Ship Country: France',
            items: [
                {
                    text: 'Vins et alcools Chevalier'
                }, {
                    text: 'Richter Supermarkt'
                }, {
                    text: 'Blondel pere et fils'
                }, {
                    text: 'Que Delicia',
                    badge: 33
                }, {
                    text: 'Folk och fa HB',
                    showChevron: true
                }
            ]
        },
        {
            key: 'Ship Country: Switzerland',
            items: [
                {
                    text: 'Hanari Carnes'
                }, {
                    text: 'Chop-suey Chinese'
                }
            ]
        }]
    };

    expandedOptions: Properties = {
        grouped: true,
        allowItemDeleting: true,
        selectionMode: 'single',
        items: [{
            key: 'Ship Country: Germany',
            items: [
                {
                    text: 'Toms Spezialitaten'
                }, {
                    text: 'Ottilies Kaseladen',
                    badge: 5
                }
            ]
        },
        {
            key: 'Ship Country: France',
            items: [
                {
                    text: 'Vins et alcools Chevalier'
                }, {
                    text: 'Richter Supermarkt'
                }, {
                    text: 'Blondel pere et fils'
                }, {
                    text: 'Que Delicia',
                    badge: 33
                }, {
                    text: 'Folk och fa HB'
                }
            ]
        },
        {
            key: 'Ship Country: Switzerland',
            items: [
                {
                    text: 'Hanari Carnes'
                }, {
                    text: 'Chop-suey Chinese'
                }
            ]
        }]
    };

    ngOnInit(): void {
        this.isExpanded.subscribe((expanded) => {
            this.list.instance.option(expanded ? this.expandedOptions : this.collapsedOptions);
            this.list.instance.updateDimensions();
        });
    }

    ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }
}
