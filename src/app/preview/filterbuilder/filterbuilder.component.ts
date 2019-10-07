import { Component } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
    selector: 'app-filterbuilder',
    templateUrl: './filterbuilder.component.html',
    styleUrls: ['./filterbuilder.component.css']
})
export class FilterbuilderComponent {
    widgetGroup = 'filterbuilder';
    isExpanded = new Subject<boolean>();

    filterBuilderValue: any[] = [
        ['Name', '=', 'Projector PlusHD'],
        'or',
        [
            ['Category', '=', 'Monitors'],
            ['Price', '<', '1300']
        ],
        'or',
        [
            ['Category', '=', 'Televisions']
        ]
    ];

    filterBuilderFields: any[] = [{
        dataField: 'ID',
        dataType: 'number'
    }, {
        dataField: 'Name'
    }, {
        dataField: 'Price',
        dataType: 'number'
    }, {
        dataField: 'Current_Inventory',
        dataType: 'number'
    }, {
        dataField: 'Category'
    }];
}
