import { Component, ViewChild, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { DxDataGridComponent } from 'devextreme-angular';

@Component({
    selector: 'app-datagrid',
    templateUrl: './datatgrid.component.html',
    styleUrls: ['./datatgrid.component.css']
})
export class DatatgridComponent implements OnInit {
    widgetGroup = 'datagrid';
    isExpanded = new Subject<boolean>();

    @ViewChild('dataGrid') dataGrid: DxDataGridComponent;

    dataSource = {
        'store': [
            {
                'CustomerID': 'VINET',
                'OrderDate': '1996/07/04',
                'Freight': '32.3800',
                'ShipName': 'Vins et alcools Chevalier',
                'ShipCity': 'Reims',
                'ShipCountry': 'France'
            },
            {
                'CustomerID': 'TOMSP',
                'OrderDate': '1996/07/05',
                'Freight': '11.6100',
                'ShipName': 'Toms Spezialitaten',
                'ShipCity': 'Munster',
                'ShipCountry': 'Germany'
            },
            {
                'CustomerID': 'HANAR',
                'OrderDate': '1996/07/08',
                'Freight': '65.8300',
                'ShipName': 'Hanari Carnes',
                'ShipCity': 'Rio de Janeiro',
                'ShipCountry': 'Brazil'
            },
            {
                'CustomerID': 'VICTE',
                'OrderDate': '1996/07/08',
                'Freight': '41.3400',
                'ShipName': 'Victuailles en stock',
                'ShipCity': 'Lyon',
                'ShipCountry': 'France'
            },
            {
                'CustomerID': 'SUPRD',
                'OrderDate': '1996/07/09',
                'Freight': '51.3000',
                'ShipName': 'Supremes delices',
                'ShipCity': 'Charleroi',
                'ShipCountry': 'Belgium'
            },
            {
                'CustomerID': 'HANAR',
                'OrderDate': '1996/07/10',
                'Freight': '58.1700',
                'ShipName': 'Hanari Carnes',
                'ShipCity': 'Rio de Janeiro',
                'ShipCountry': 'Brazil'
            },
            {
                'CustomerID': 'CHOPS',
                'OrderDate': '1996/07/11',
                'Freight': '22.9800',
                'ShipName': 'Chop-suey Chinese',
                'ShipCity': 'Bern',
                'ShipCountry': 'Switzerland'
            },
            {
                'CustomerID': 'RICSU',
                'OrderDate': '1996/07/12',
                'Freight': '148.3300',
                'ShipName': 'Richter Supermarkt',
                'ShipCity': 'Geneve',
                'ShipCountry': 'Switzerland'
            },
            {
                'CustomerID': 'WELLI',
                'OrderDate': '1996/07/15',
                'Freight': '13.9700',
                'ShipName': 'Wellington Importadora',
                'ShipCity': 'Resende',
                'ShipCountry': 'Brazil'
            },
            {
                'CustomerID': 'HILAA',
                'OrderDate': '1996/07/16',
                'Freight': '81.9100',
                'ShipName': 'HILARION-Abastos',
                'ShipCity': 'San Cristobal',
                'ShipCountry': 'Venezuela'
            },
            {
                'CustomerID': 'ERNSH',
                'OrderDate': '1996/07/17',
                'Freight': '140.5100',
                'ShipName': 'Ernst Handel',
                'ShipCity': 'Graz',
                'ShipCountry': 'Austria'
            }
        ]
    };

    collapsedOptions = {
        'columnChooser': { 'enabled': false },
        'rowAlternationEnabled': false,
        'showBorders': true,
        'paging': {
            'pageSize': 10
        },
        'filterRow': {
            'visible': false
        },
        'searchPanel': {
            'visible': false
        },
        'groupPanel': {
            'visible': false
        },
        'editing': {
            'allowUpdating': false,
            'allowDeleting': false,
            'mode': 'row'
        },
        'summary': {
            'totalItems': [
                {
                    'column': undefined,
                    'summaryType': undefined,
                    'displayFormat': undefined
                }
            ],
            'groupItems': [
                {
                    'column': undefined,
                    'summaryType': undefined
                }
            ]
        },
        'hoverStateEnabled': false,
        'allowColumnResizing': false,
        'allowColumnReordering': false,
        'pager': {
            'showPageSizeSelector': true
        },
        'selection': {
            'mode': 'multiple'
        },
        'columns': [
            {
                'dataField': 'CustomerID',
                'allowFiltering': false
            },
            {
                'dataField': 'OrderDate',
                'dataType': 'date',
                'allowFiltering': false
            },
            'ShipName',
            {
                'dataField': 'ShipCity',
                'allowFiltering': false
            },
            {
                'dataField': 'ShipCountry',
                'allowFiltering': false
            },
            'Freight'
        ]
    };

    expandedOptions = {
        'columnChooser': { 'enabled': true },
        'rowAlternationEnabled': true,
        'filterRow': {
            'visible': true
        },
        'paging': {
            'pageSize': 10
        },
        'pager': {
            'showPageSizeSelector': true
        },
        'searchPanel': {
            'visible': true
        },
        'groupPanel': {
            'visible': true
        },
        'selection': {
            'mode': 'multiple'
        },
        'hoverStateEnabled': true,
        'allowColumnResizing': true,
        'allowColumnReordering': true,
        'editing': {
            'allowUpdating': true,
            'allowDeleting': true,
            'mode': 'batch'
        },
        'columns': [
            {
                'dataField': 'CustomerID',
                'allowFiltering': false
            },
            {
                'dataField': 'OrderDate',
                'dataType': 'date'
            },
            'ShipName',
            {
                'dataField': 'ShipCity',
                'groupIndex': 0,
                'filterOperations': ['startswith', 'contains', '=']
            },
            {
                'dataField': 'ShipCountry',
                'filterOperations': false,
                'selectedFilterOperation': 'startswith'
            },
            'Freight'
        ],
        'summary': {
            'totalItems': [
                {
                    'column': 'Freight',
                    'summaryType': 'sum',
                    'displayFormat': 'Total: {0}'
                }
            ],
            'groupItems': [
                {
                    'column': 'CustomerID',
                    'summaryType': 'count'
                }
            ]
        }
    };

    ngOnInit() {
        this.isExpanded.subscribe((expanded) => {
            this.dataGrid.instance.option(expanded ? this.expandedOptions : this.collapsedOptions);
            this.dataGrid.instance.updateDimensions();
        });
    }
}
