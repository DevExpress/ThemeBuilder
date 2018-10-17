import { Component, ViewChild, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { DxListComponent } from 'devextreme-angular';

@Component({
    selector: 'app-list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
    widgetGroup = 'list';
    isExpanded = new Subject<boolean>();

    @ViewChild('list') list: DxListComponent;

    collapsedOptions = {
        'grouped': true,
        'editEnabled': true,
        'editConfig': {
            'deleteEnabled': true,
            'selectionEnabled': true
        },
        'selectionMode': 'single',
        'items': [{
            'key': 'Ship Country: Germany',
            'items': [
                {
                    'text': 'Toms Spezialitaten'
                },
                {
                    'text': 'Ottilies Kaseladen',
                    'badge': 5
                }
            ]
        },
        {
            'key': 'Ship Country: France',
            'items': [
                {
                    'text': 'Vins et alcools Chevalier'
                },
                {
                    'text': 'Richter Supermarkt'
                },
                {
                    'text': 'Blondel pere et fils'
                },
                {
                    'text': 'Que Delicia',
                    'badge': 33
                },
                {
                    'text': 'Folk och fa HB',
                    'showChevron': true
                }
            ]
        },
        {
            'key': 'Ship Country: Switzerland',
            'items': [
                {
                    'text': 'Hanari Carnes'
                },
                {
                    'text': 'Chop-suey Chinese'
                }
            ]
        }]
    };

    expandedOptions = {
        'grouped': true,
        'editEnabled': true,
        'editConfig': {
            'deleteEnabled': true,
            'selectionEnabled': true
        },
        'selectionMode': 'single',
        'items': [{
            'key': 'Ship Country: Germany',
            'items': [
                {
                    'text': 'Toms Spezialitaten'
                },
                {
                    'text': 'Ottilies Kaseladen',
                    'badge': 5
                }
            ]
        },
        {
            'key': 'Ship Country: France',
            'items': [
                {
                    'text': 'Vins et alcools Chevalier'
                },
                {
                    'text': 'Richter Supermarkt'
                },
                {
                    'text': 'Blondel pere et fils'
                },
                {
                    'text': 'Que Delicia',
                    'badge': 33
                },
                {
                    'text': 'Folk och fa HB'
                }
            ]
        },
        {
            'key': 'Ship Country: Switzerland',
            'items': [
                {
                    'text': 'Hanari Carnes'
                },
                {
                    'text': 'Chop-suey Chinese'
                }
            ]
        }]
    };

    ngOnInit() {
        this.isExpanded.subscribe((expanded) => {
            this.list.instance.option(expanded ? this.expandedOptions : this.collapsedOptions);
            this.list.instance.updateDimensions();
        });
    }
}
