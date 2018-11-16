import { Component, ViewChild, OnInit, OnDestroy } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { DxPivotGridComponent } from 'devextreme-angular';

@Component({
    selector: 'app-pivotgrid',
    templateUrl: './pivotgrid.component.html',
    styleUrls: ['./pivotgrid.component.css' ]
})
export class PivotgridComponent implements OnInit, OnDestroy {
    widgetGroup = 'pivotgrid';
    isExpanded = new Subject<boolean>();
    subscription: Subscription;

    @ViewChild('pivotGrid') pivotGrid: DxPivotGridComponent;

    dataSourceStore: Array<any> = [
        {
            'OrderID':10248,
            'CustomerID':'VINET',
            'EmployeeID':5,
            'OrderDate':'1996/07/04',
            'RequiredDate':'1996/08/01',
            'ShippedDate':'1996/07/16',
            'ShipVia':3,
            'Freight':'32.3800',
            'ShipName':'Vins et alcools Chevalier',
            'ShipAddress':'59 rue de lAbbaye',
            'ShipCity':'Reims',
            'ShipRegion':null,
            'ShipPostalCode':'51100',
            'ShipCountry':'France'
        },
        {
            'OrderID':10249,
            'CustomerID':'TOMSP',
            'EmployeeID':6,
            'OrderDate':'1996/07/05',
            'RequiredDate':'1996/08/16',
            'ShippedDate':'1996/07/10',
            'ShipVia':1,
            'Freight':'11.6100',
            'ShipName':'Toms Spezialitaten',
            'ShipAddress':'Luisenstr. 48',
            'ShipCity':'Munster',
            'ShipRegion':null,
            'ShipPostalCode':'44087',
            'ShipCountry':'Germany'
        },
        {
            'OrderID':10250,
            'CustomerID':'HANAR',
            'EmployeeID':4,
            'OrderDate':'1996/07/08',
            'RequiredDate':'1996/08/05',
            'ShippedDate':'1996/07/12',
            'ShipVia':2,
            'Freight':'65.8300',
            'ShipName':'Hanari Carnes',
            'ShipAddress':'Rua do Paco, 67',
            'ShipCity':'Rio de Janeiro',
            'ShipRegion':'RJ',
            'ShipPostalCode':'05454-876',
            'ShipCountry':'Brazil'
        },
        {
            'OrderID':10251,
            'CustomerID':'VICTE',
            'EmployeeID':3,
            'OrderDate':'1996/07/08',
            'RequiredDate':'1996/08/05',
            'ShippedDate':'1996/07/15',
            'ShipVia':1,
            'Freight':'41.3400',
            'ShipName':'Victuailles en stock',
            'ShipAddress':'2, rue du Commerce',
            'ShipCity':'Lyon',
            'ShipRegion':null,
            'ShipPostalCode':'69004',
            'ShipCountry':'France'
        },
        {
            'OrderID':10252,
            'CustomerID':'SUPRD',
            'EmployeeID':4,
            'OrderDate':'1996/07/09',
            'RequiredDate':'1996 / 08 / 06',
            'ShippedDate':'1996 / 07 / 11',
            'ShipVia':2,
            'Freight':'51.3000',
            'ShipName':'Supremes delices',
            'ShipAddress':'Boulevard Tirou, 255',
            'ShipCity':'Charleroi',
            'ShipRegion':null,
            'ShipPostalCode':'B-6000',
            'ShipCountry':'Belgium'
        },
        {
            'OrderID':10253,
            'CustomerID':'HANAR',
            'EmployeeID':3,
            'OrderDate':'1996 / 07 / 10',
            'RequiredDate':'1996 / 07 / 24',
            'ShippedDate':'1996 / 07 / 16',
            'ShipVia':2,
            'Freight':'58.1700',
            'ShipName':'Hanari Carnes',
            'ShipAddress':'Rua do Paco, 67',
            'ShipCity':'Rio de Janeiro',
            'ShipRegion':'RJ',
            'ShipPostalCode':'05454-876',
            'ShipCountry':'Brazil'
        },
        {
            'OrderID':10254,
            'CustomerID':'CHOPS',
            'EmployeeID':5,
            'OrderDate':'1996 / 07 / 11',
            'RequiredDate':'1996 / 08 / 08',
            'ShippedDate':'1996 / 07 / 23',
            'ShipVia':2,
            'Freight':'22.9800',
            'ShipName':'Chop - suey Chinese',
            'ShipAddress':'Hauptstr. 31',
            'ShipCity':'Bern',
            'ShipRegion':null,
            'ShipPostalCode':'3012',
            'ShipCountry':'Switzerland'
        },
        {
            'OrderID':10255,
            'CustomerID':'RICSU',
            'EmployeeID':9,
            'OrderDate':'1996/07/12',
            'RequiredDate':'1996 / 08 / 09',
            'ShippedDate':'1996 / 07 / 15',
            'ShipVia':3,
            'Freight':'148.3300',
            'ShipName':'Richter Supermarkt',
            'ShipAddress':'Starenweg 5',
            'ShipCity':'Geneve',
            'ShipRegion':null,
            'ShipPostalCode':'1204',
            'ShipCountry':'Switzerland'
        },
        {
            'OrderID':10256,
            'CustomerID':'WELLI',
            'EmployeeID':3,
            'OrderDate':'1996 / 07 / 15',
            'RequiredDate':'1996 / 08 / 12',
            'ShippedDate':'1996 / 07 / 17',
            'ShipVia':2,
            'Freight':'13.9700',
            'ShipName':'Wellington Importadora',
            'ShipAddress':'Rua do Mercado, 12',
            'ShipCity':'Resende',
            'ShipRegion':'SP',
            'ShipPostalCode':'08737-363',
            'ShipCountry':'Brazil'
        },
        {
            'OrderID':10257,
            'CustomerID':'HILAA',
            'EmployeeID':4,
            'OrderDate':'1996 / 07 / 16',
            'RequiredDate':'1996 / 08 / 13',
            'ShippedDate':'1996 / 07 / 22',
            'ShipVia':3,
            'Freight':'81.9100',
            'ShipName':'HILARION - Abastos',
            'ShipAddress':'Carrera 22 con Ave.Carlos Soublette #8-35',
            'ShipCity':'San Cristobal',
            'ShipRegion':'Tachira',
            'ShipPostalCode':'5022',
            'ShipCountry':'Venezuela'
        },
        {
            'OrderID':10258,
            'CustomerID':'ERNSH',
            'EmployeeID':1,
            'OrderDate':'1996/07/17',
            'RequiredDate':'1996 / 08 / 14',
            'ShippedDate':'1996 / 07 / 23',
            'ShipVia':1,
            'Freight':'140.5100',
            'ShipName':'Ernst Handel',
            'ShipAddress':'Kirchgasse 6',
            'ShipCity':'Graz',
            'ShipRegion':null,
            'ShipPostalCode':'8010',
            'ShipCountry':'Austria'
        },
        {
            'OrderID':10259,
            'CustomerID':'CENTC',
            'EmployeeID':4,
            'OrderDate':'1996 / 07 / 18',
            'RequiredDate':'1996 / 08 / 15',
            'ShippedDate':'1996 / 07 / 25',
            'ShipVia':3,
            'Freight':'3.2500',
            'ShipName':'Centro comercial Moctezuma',
            'ShipAddress':'Sierras de Granada 9993',
            'ShipCity':'Mexico D.F.',
            'ShipRegion':null,
            'ShipPostalCode':'05022',
            'ShipCountry':'Mexico'
        },
        {
            'OrderID':10260,
            'CustomerID':'OTTIK',
            'EmployeeID':4,
            'OrderDate':'1996 / 07 / 19',
            'RequiredDate':'1996 / 08 / 16',
            'ShippedDate':'1996 / 07 / 29',
            'ShipVia':1,
            'Freight':'55.0900',
            'ShipName':'Ottilies Kaseladen',
            'ShipAddress':'Mehrheimerstr. 369',
            'ShipCity':'Koln',
            'ShipRegion':null,
            'ShipPostalCode':'50739',
            'ShipCountry':'Germany'
        },
        {
            'OrderID':10261,
            'CustomerID':'QUEDE',
            'EmployeeID':4,
            'OrderDate':'1996/07/19',
            'RequiredDate':'1996 / 08 / 16',
            'ShippedDate':'1996 / 07 / 30',
            'ShipVia':2,
            'Freight':'3.0500',
            'ShipName':'Que Delicia',
            'ShipAddress':'Rua da Panificadora, 12',
            'ShipCity':'Rio de Janeiro',
            'ShipRegion':'RJ',
            'ShipPostalCode':'02389 - 673',
            'ShipCountry':'Brazil'
        },
        {
            'OrderID':10262,
            'CustomerID':'RATTC',
            'EmployeeID':8,
            'OrderDate':'1996 / 07 / 22',
            'RequiredDate':'1996 / 08 / 19',
            'ShippedDate':'1996 / 07 / 25',
            'ShipVia':3,
            'Freight':'48.2900',
            'ShipName':'Rattlesnake Canyon Grocery',
            'ShipAddress':'2817 Milton Dr.',
            'ShipCity':'Albuquerque',
            'ShipRegion':'NM',
            'ShipPostalCode':'87110',
            'ShipCountry':'USA'
        }
        ];

    collapsedOptions = {
        'dataSource': {
            'store': this.dataSourceStore,
            'fields': [
                {
                    'dataField':'OrderDate',
                    'dataType':'date',
                    'groupName':'OrderDate',
                    'area':'column'
                },
                {
                    'dataField':'OrderDate',
                    'groupInterval':'year',
                    'dataType':'date',
                    'groupName':'OrderDate',
                    'groupIndex':0
                },
                {
                    'dataField':'OrderDate',
                    'groupInterval':'quarter',
                    'dataType':'date',
                    'groupName':'OrderDate',
                    'groupIndex':0
                },
                {
                    'dataField':'OrderDate',
                    'groupInterval':'month',
                    'dataType':'date',
                    'groupName':'OrderDate',
                    'groupIndex':0
                },
                {
                    'dataField':'ShipCountry',
                    'dataType':'string',
                    'area':'row'
                },
                {
                    'dataField':'ShipCity',
                    'dataType':'string',
                    'area':'row'
                },
                {
                    'dataField':'ShipName',
                    'dataType':'string',
                    'area':'row'
                },
                {
                    'summaryType':'count',
                    'caption':'Count',
                    'area':'data'
                },
                {
                    'dataField':'Freight',
                    'dataType':'number',
                    'summaryType':'avg',
                    'caption':'Avg Freight',
                    'format':{
                        'type':'fixedPoint',
                        'precision':2
                    },
                    'area':'data'
                }
            ],

        },
        'showBorders': true,
        'allowSorting': true,
        'allowSortingBySummary': true,
        'allowExpandAll': true,
        'allowFiltering': true
    };

    expandedOptions = {
        'dataSource': {
            'store': this.dataSourceStore,
            'fields': [
                {
                    'dataField':'OrderDate',
                    'dataType':'date',
                    'groupName':'OrderDate',
                    'area':'column'
                },
                {
                    'dataField':'OrderDate',
                    'groupInterval':'year',
                    'dataType':'date',
                    'expanded': true,
                    'groupName':'OrderDate',
                    'groupIndex':0
                },
                {
                    'dataField':'OrderDate',
                    'groupInterval':'quarter',
                    'dataType':'date',
                    'groupName':'OrderDate',
                    'groupIndex':0
                },
                {
                    'dataField':'OrderDate',
                    'groupInterval':'month',
                    'dataType':'date',
                    'groupName':'OrderDate',
                    'groupIndex':0
                },
                {
                    'dataField':'ShipCountry',
                    'dataType':'string',
                    'area':'row'
                },
                {
                    'dataField':'ShipCity',
                    'dataType':'string',
                    'area':'row'
                },
                {
                    'dataField':'ShipName',
                    'dataType':'string',
                    'area':'row'
                },
                {
                    'summaryType':'count',
                    'caption':'Count',
                    'area':'data'
                },
                {
                    'dataField':'Freight',
                    'dataType':'number',
                    'summaryType':'avg',
                    'caption':'Avg Freight',
                    'format':{
                        'type':'fixedPoint',
                        'precision':2
                    },
                    'area':'data'
                }
            ]
        },
        'fieldPanel': {
            'visible': true
        },
        'allowSorting': true,
        'allowSortingBySummary': true,
        'allowExpandAll': true,
        'allowFiltering': true
    };

    ngOnInit() {
        this.subscription = this.isExpanded.subscribe((expanded) => {
            this.pivotGrid.instance.option(expanded ? this.expandedOptions : this.collapsedOptions);
            this.pivotGrid.instance.updateDimensions();
        });
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
}
