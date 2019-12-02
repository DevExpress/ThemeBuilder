import { AfterViewInit, Component, Input, ViewChild } from '@angular/core';
import { DxFormComponent } from 'devextreme-angular';

@Component({
    selector: 'app-wizard',
    templateUrl: './wizard.component.html',
    styleUrls: ['./wizard.component.css']
})
export class WizardComponent implements AfterViewInit {
    @ViewChild('form') form: DxFormComponent;
    @Input() theme: string;
    @Input() themeSize: string;

    employee: any = {
        ID: 1,
        FirstName: 'John',
        LastName: 'Heart',
        Position: 'CEO',
        BirthDate: '1964/03/16',
        HireDate: '1995/01/15',
        Address: '351 S Hill St., Los Angeles, CA',
        Phone: '360-684-1334',
        Email: 'jheart@dx-email.com'
    };

    employees: any[] = [{
        key: 'Mr. John Heart',
        items: ['Choose between PPO and HMO Health Plan', 'Google AdWords Strategy']
    }, {
        key: 'Mrs. Olivia Peyton',
        items: ['Update Personnel Files', 'Review Health Insurance Options Under the Affordable Care Act', 'Non-Compete Agreements']
    }];

    positions: string[] = [
        'HR Manager',
        'IT Manager',
        'CEO',
        'Controller',
        'Sales Manager',
        'Support Manager',
        'Shipping Manager'
    ];

    sales: any[] = [{
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
        orderId: 10253,
        region: 'South America',
        country: 'Brazil',
        city: 'Rio de Janeiro',
        amount: 5260,
        date: '2013/01/17'
    }, {
        orderId: 10254,
        region: 'South America',
        country: 'Argentina',
        city: 'Buenos Aires',
        amount: 2790,
        date: '2013/01/21'
    }, {
        orderId: 10255,
        region: 'South America',
        country: 'Paraguay',
        city: 'Asuncion',
        amount: 3140,
        date: '2013/01/01'
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
    }];

    toolbarItems: any[] = [{
        location: 'before',
        widget: 'dxButton',
        options: {
            icon: 'menu',
            stylingMode: 'text'
        }
    }, {
        location: 'before',
        locateInMenu: 'never',
        template: (): string => {
            return '<span style="font-size: 22px; font-weight: 500;">Theme Preview</span>';
        }
    }, {
        location: 'after',
        locateInMenu: 'never',
        template: (): string => {
            return '<img src="images/person.png" width="30" height="30"/><span>John Heart</span>';
        }
    }];

    ngAfterViewInit(): void {
        this.form.instance.validate();
    }

}
