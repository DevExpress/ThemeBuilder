import { Component, ChangeDetectionStrategy, signal } from '@angular/core';

@Component({
    selector: 'app-filterbuilder',
    templateUrl: './filterbuilder.component.html',
    styleUrls: ['./filterbuilder.component.css'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class FilterbuilderComponent {
    widgetGroup = 'filterbuilder';
    isExpanded = signal<boolean>(false);

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
