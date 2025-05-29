/*eslint @typescript-eslint/no-magic-numbers: 'off'*/
import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { DxCardViewComponent } from 'devextreme-angular';
import { Properties } from 'devextreme/ui/card_view';
import { Subject, Subscription } from 'rxjs';

@Component({
    selector: 'app-cardview',
    templateUrl: './cardview.component.html',
    styleUrls: ['./cardview.component.css']
})
export class CardviewComponent implements OnInit, OnDestroy {
    widgetGroup = 'cardview';
    isExpanded = new Subject<boolean>();
    subscription: Subscription;

    @ViewChild('cardView') cardView: DxCardViewComponent;

    dataSource: any[] = [ // TODO change datasource data
        {
            orderId: 10248,
            region: 'North America',
            country: 'United States',
            city: 'New York',
            amount: 1740,
            date: '2013/01/06'
        }, {
            orderId: 10249,
            region: 'North America',
            country: 'United States',
            city: 'Los Angeles',
            amount: 850,
            date: '2013/01/13'
        }, {
            orderId: 10250,
            region: 'North America',
            country: 'United States',
            city: 'Denver',
            amount: 2235,
            date: '2013/01/07'
        }, {
            orderId: 10251,
            region: 'North America',
            country: 'Canada',
            city: 'Vancouver',
            amount: 1965,
            date: '2013/01/03'
        }, {
            orderId: 10252,
            region: 'North America',
            country: 'Canada',
            city: 'Edmonton',
            amount: 880,
            date: '2013/01/10'
        }, {
            orderId: 10256,
            region: 'Europe',
            country: 'United Kingdom',
            city: 'London',
            amount: 6175,
            date: '2013/01/24'
        }, {
            orderId: 10257,
            region: 'Europe',
            country: 'Germany',
            city: 'Berlin',
            amount: 4575,
            date: '2013/01/11'
        }, {
            orderId: 10258,
            region: 'Europe',
            country: 'Spain',
            city: 'Madrid',
            amount: 3680,
            date: '2013/01/12'
        }, {
            orderId: 10259,
            region: 'Europe',
            country: 'Russian Federation',
            city: 'Moscow',
            amount: 2260,
            date: '2013/01/01'
        }, {
            orderId: 10260,
            region: 'Asia',
            country: 'China',
            city: 'Beijing',
            amount: 2910,
            date: '2013/01/26'
        }, {
            orderId: 10261,
            region: 'Asia',
            country: 'Japan',
            city: 'Tokyo',
            amount: 8400,
            date: '2013/01/05'
        }, {
            orderId: 10262,
            region: 'Asia',
            country: 'Korea (Republic of)',
            city: 'Seoul',
            amount: 1325,
            date: '2013/01/14'
        }, {
            orderId: 10263,
            region: 'Australia',
            country: 'Australia',
            city: 'Sydney',
            amount: 3920,
            date: '2013/01/05'
        }, {
            orderId: 10264,
            region: 'Australia',
            country: 'Australia',
            city: 'Melbourne',
            amount: 2220,
            date: '2013/01/15'
        }, {
            orderId: 10265,
            region: 'Africa',
            country: 'South Africa',
            city: 'Pretoria',
            amount: 940,
            date: '2013/01/01'
        }, {
            orderId: 10266,
            region: 'Africa',
            country: 'Egypt',
            city: 'Cairo',
            amount: 1630,
            date: '2013/01/10'
        }, {
            orderId: 10267,
            region: 'North America',
            country: 'Canada',
            city: 'Edmonton',
            amount: 2910,
            date: '2013/01/23'
        }
    ];

    // TODO
    collapsedOptions: Properties = {
        height: '100%',
        columnChooser: { enabled: false },
        paging: {
            pageSize: 10
        },
        searchPanel: {
            visible: false
        },
        editing: {
            allowUpdating: false,
            allowDeleting: false,
        },
        hoverStateEnabled: false,
        allowColumnReordering: false,
        pager: {
            showPageSizeSelector: true
        },
        selection: {
            mode: 'multiple'
        },
        keyExpr: 'orderId',
        columns: [
            {
                dataField: 'orderId',
                caption: 'Order ID',
            },
            'city', {
                dataField: 'country',
            }, {
                dataField: 'region',
                sortOrder: 'desc'
            }, {
                dataField: 'date',
                dataType: 'date'
            }, {
                dataField: 'amount',
                format: 'currency',
            }
        ]
    };

    expandedOptions: Properties = {
        height: 460,
        columnChooser: { enabled: true },
        paging: {
            pageSize: 10
        },
        pager: {
            showPageSizeSelector: true
        },
        searchPanel: {
            visible: true
        },
        selection: {
            mode: 'multiple',
            showCheckBoxesMode: 'always'
        },
        hoverStateEnabled: true,
        allowColumnReordering: true,
        editing: {
            allowUpdating: true,
            allowDeleting: true,
        },
        keyExpr: 'orderId',
        columns: [
            {
                dataField: 'orderId',
                caption: 'Order ID',
            },
            'city', {
                dataField: 'country',
            },
            {
                dataField: 'region',
                sortOrder: 'desc',
            }, {
                dataField: 'date',
                dataType: 'date',
            }, {
                dataField: 'amount',
                format: 'currency',
            }
        ],
    };

    ngOnInit(): void {
        this.subscription = this.isExpanded.subscribe((expanded) => {
            this.cardView.instance.option(expanded ? this.expandedOptions : this.collapsedOptions);
        });
    }

    ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }
}
