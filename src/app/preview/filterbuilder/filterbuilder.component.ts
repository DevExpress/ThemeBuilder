import { Component, ViewChild, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { DxFilterBuilderComponent } from 'devextreme-angular';

@Component({
    selector: 'app-filterbuilder',
    templateUrl: './filterbuilder.component.html',
    styleUrls: ['./filterbuilder.component.css']
})
export class FilterbuilderComponent implements OnInit {
    widgetGroup = 'filterbuilder';
    isExpanded = new Subject<boolean>();

    @ViewChild('filterBuilder') filterBuilder: DxFilterBuilderComponent;

    collapsedOptions = {
        'value': [
            ['Name', '=', 'Projector PlusHD'],
            'or',
            [
                ['Category', '=', 'Monitors'],
                ['Price', '<', '1300']
            ],
            'or',
            []
        ],
        'fields': [{
            'dataField': 'ID',
            'dataType': 'number'
        }, {
            'dataField': 'Name'
        }, {
            'dataField': 'Price',
            'dataType': 'number'
        }, {
            'dataField': 'Current_Inventory',
            'dataType': 'number'
        }, {
            'dataField': 'Category'
        }]
    };

    expandedOptions = {
        'value': [
            ['Name', '=', 'Projector PlusHD'],
            'or',
            [
                ['Category', '=', 'Monitors'],
                ['Price', '<', '1300']
            ],
            'or',
            [
                ['Category', '=', 'Televisions'],
                ['Price', '<', '4000']
            ]
        ],
        'fields': [{
            'dataField': 'ID',
            'dataType': 'number'
        }, {
            'dataField': 'Name'
        }, {
            'dataField': 'Price',
            'dataType': 'number'
        }, {
            'dataField': 'Current_Inventory',
            'dataType': 'number'
        }, {
            'dataField': 'Category'
        }]
    };

    ngOnInit() {
        this.isExpanded.subscribe((expanded) => {
            this.filterBuilder.instance.option(expanded ? this.expandedOptions : this.collapsedOptions);
        });
    }
}
