/*eslint @typescript-eslint/no-magic-numbers: 'off'*/
import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { DxTreeListComponent } from 'devextreme-angular';
import { Subject, Subscription } from 'rxjs';
import { Properties } from 'devextreme/ui/tree_list';

@Component({
    selector: 'app-treelist',
    templateUrl: './treelist.component.html',
    styleUrls: ['./treelist.component.css']
})
export class TreelistComponent implements OnInit, OnDestroy {
    widgetGroup = 'treelist';
    isExpanded = new Subject<boolean>();
    subscription: Subscription;

    @ViewChild('treeList') treeList: DxTreeListComponent;

    dataSource: any[] = [
        {
            ID: 1,
            Head_ID: 0,
            Full_Name: 'John Heart',
            Prefix: 'Mr.',
            Title: 'CEO',
            City: 'Los Angeles',
            Email: 'jheart@dx-email.com',
            Skype: 'jheart_DX_skype',
            Mobile_Phone: '(213) 555-9392',
            Birth_Date: '1964-03-16',
            Hire_Date: '1995-01-15'
        },
        {
            ID: 2,
            Head_ID: 1,
            Full_Name: 'Samantha Bright',
            Prefix: 'Dr.',
            Title: 'COO',
            City: 'Los Angeles',
            Email: 'samanthab@dx-email.com',
            Skype: 'samanthab_DX_skype',
            Mobile_Phone: '(213) 555-2858',
            Birth_Date: '1966-05-02',
            Hire_Date: '2004-05-24'
        },
        {
            ID: 3,
            Head_ID: 1,
            Full_Name: 'Arthur Miller',
            Prefix: 'Mr.',
            Title: 'CTO',
            City: 'Los Angeles',
            Email: 'arthurm@dx-email.com',
            Skype: 'arthurm_DX_skype',
            Mobile_Phone: '(310) 555-8583',
            Birth_Date: '1972-07-11',
            Hire_Date: '2007-12-18'
        },
        {
            ID: 4,
            Head_ID: 1,
            Full_Name: 'Robert Reagan',
            Prefix: 'Mr.',
            Title: 'CMO',
            City: 'Pasadena',
            Email: 'robertr@dx-email.com',
            Skype: 'robertr_DX_skype',
            Mobile_Phone: '(818) 555-2387',
            Birth_Date: '1974-09-07',
            Hire_Date: '2002-11-08'
        },
        {
            ID: 5,
            Head_ID: 1,
            Full_Name: 'Greta Sims',
            Prefix: 'Ms.',
            Title: 'HR Manager',
            City: 'Alhambra',
            Email: 'gretas@dx-email.com',
            Skype: 'gretas_DX_skype',
            Mobile_Phone: '(818) 555-6546',
            Birth_Date: '1977-11-22',
            Hire_Date: '1998-04-23'
        },
        {
            ID: 6,
            Head_ID: 3,
            Full_Name: 'Brett Wade',
            Prefix: 'Mr.',
            Title: 'IT Manager',
            City: 'San Marino',
            Email: 'brettw@dx-email.com',
            Skype: 'brettw_DX_skype',
            Mobile_Phone: '(626) 555-0358',
            Birth_Date: '1968-12-01',
            Hire_Date: '2009-03-06'
        },
        {
            ID: 7,
            Head_ID: 5,
            Full_Name: 'Sandra Johnson',
            Prefix: 'Mrs.',
            Title: 'Controller',
            City: 'Long Beach',
            Email: 'sandraj@dx-email.com',
            Skype: 'sandraj_DX_skype',
            Mobile_Phone: '(562) 555-2082',
            Birth_Date: '1974-11-15',
            Hire_Date: '2005-05-11'
        },
        {
            ID: 8,
            Head_ID: 4,
            Full_Name: 'Ed Holmes',
            Prefix: 'Dr.',
            Title: 'Sales Manager',
            City: 'Malibu',
            Email: 'edwardh@dx-email.com',
            Skype: 'edwardh_DX_skype',
            Mobile_Phone: '(310) 555-1288',
            Birth_Date: '1973-07-14',
            Hire_Date: '2005-06-19'
        },
        {
            ID: 9,
            Head_ID: 3,
            Full_Name: 'Barb Banks',
            Prefix: 'Mrs.',
            Title: 'Support Manager',
            City: 'Pacific Palisades',
            Email: 'barbarab@dx-email.com',
            Skype: 'barbarab_DX_skype',
            Mobile_Phone: '(310) 555-3355',
            Birth_Date: '1979-04-14',
            Hire_Date: '2002-08-07'
        },
        {
            ID: 10,
            Head_ID: 2,
            Full_Name: 'Kevin Carter',
            Prefix: 'Mr.',
            Title: 'Shipping Manager',
            City: 'Los Angeles',
            Email: 'kevinc@dx-email.com',
            Skype: 'kevinc_DX_skype',
            Mobile_Phone: '(213) 555-2840',
            Birth_Date: '1978-01-09',
            Hire_Date: '2009-08-11'
        },
        {
            ID: 11,
            Head_ID: 5,
            Full_Name: 'Cindy Stanwick',
            Prefix: 'Ms.',
            Title: 'HR Assistant',
            City: 'Glendale',
            Email: 'cindys@dx-email.com',
            Skype: 'cindys_DX_skype',
            Mobile_Phone: '(818) 555-6655',
            Birth_Date: '1985-06-05',
            Hire_Date: '2008-03-24'
        },
        {
            ID: 12,
            Head_ID: 8,
            Full_Name: 'Sammy Hill',
            Prefix: 'Mr.',
            Title: 'Sales Assistant',
            City: 'Pasadena',
            Email: 'sammyh@dx-email.com',
            Skype: 'sammyh_DX_skype',
            Mobile_Phone: '(626) 555-7292',
            Birth_Date: '1984-02-17',
            Hire_Date: '2012-02-01'
        },
        {
            ID: 13,
            Head_ID: 10,
            Full_Name: 'Davey Jones',
            Prefix: 'Mr.',
            Title: 'Shipping Assistant',
            City: 'Pasadena',
            Email: 'davidj@dx-email.com',
            Skype: 'davidj_DX_skype',
            Mobile_Phone: '(626) 555-0281',
            Birth_Date: '1983-03-06',
            Hire_Date: '2011-04-24'
        },
        {
            ID: 14,
            Head_ID: 10,
            Full_Name: 'Victor Norris',
            Prefix: 'Mr.',
            Title: 'Shipping Assistant',
            City: 'Los Angeles',
            Email: 'victorn@dx-email.com',
            Skype: 'victorn_DX_skype',
            Mobile_Phone: '(213) 555-9278',
            Birth_Date: '1986-07-23',
            Hire_Date: '2012-07-23'
        },
        {
            ID: 15,
            Head_ID: 10,
            Full_Name: 'Mary Stern',
            Prefix: 'Ms.',
            Title: 'Shipping Assistant',
            City: 'Glendale',
            Email: 'marys@dx-email.com',
            Skype: 'marys_DX_skype',
            Mobile_Phone: '(818) 555-7857',
            Birth_Date: '1982-04-08',
            Hire_Date: '2012-08-12'
        },
        {
            ID: 16,
            Head_ID: 10,
            Full_Name: 'Robin Cosworth',
            Prefix: 'Mrs.',
            Title: 'Shipping Assistant',
            City: 'Los Angeles',
            Email: 'robinc@dx-email.com',
            Skype: 'robinc_DX_skype',
            Mobile_Phone: '(818) 555-0942',
            Birth_Date: '1981-06-12',
            Hire_Date: '2012-09-01'
        },
        {
            ID: 17,
            Head_ID: 9,
            Full_Name: 'Kelly Rodriguez',
            Prefix: 'Ms.',
            Title: 'Support Assistant',
            City: 'Glendale',
            Email: 'kellyr@dx-email.com',
            Skype: 'kellyr_DX_skype',
            Mobile_Phone: '(818) 555-9248',
            Birth_Date: '1988-05-11',
            Hire_Date: '2012-10-13'
        },
        {
            ID: 18,
            Head_ID: 9,
            Full_Name: 'James Anderson',
            Prefix: 'Mr.',
            Title: 'Support Assistant',
            City: 'Los Angeles',
            Email: 'jamesa@dx-email.com',
            Skype: 'jamesa_DX_skype',
            Mobile_Phone: '(323) 555-4702',
            Birth_Date: '1987-01-29',
            Hire_Date: '2012-10-18'
        },
        {
            ID: 19,
            Head_ID: 9,
            Full_Name: 'Antony Remmen',
            Prefix: 'Mr.',
            Title: 'Support Assistant',
            City: 'San Pedro',
            Email: 'anthonyr@dx-email.com',
            Skype: 'anthonyr_DX_skype',
            Mobile_Phone: '(310) 555-6625',
            Birth_Date: '1986-02-19',
            Hire_Date: '2013-01-19'
        },
        {
            ID: 20,
            Head_ID: 8,
            Full_Name: 'Olivia Peyton',
            Prefix: 'Mrs.',
            Title: 'Sales Assistant',
            City: 'San Pedro',
            Email: 'oliviap@dx-email.com',
            Skype: 'oliviap_DX_skype',
            Mobile_Phone: '(310) 555-2728',
            Birth_Date: '1981-06-03',
            Hire_Date: '2012-05-14'
        },
        {
            ID: 21,
            Head_ID: 6,
            Full_Name: 'Taylor Riley',
            Prefix: 'Mr.',
            Title: 'Network Admin',
            City: 'West Hollywood',
            Email: 'taylorr@dx-email.com',
            Skype: 'taylorr_DX_skype',
            Mobile_Phone: '(310) 555-7276',
            Birth_Date: '1982-08-14',
            Hire_Date: '2012-04-14'
        },
        {
            ID: 22,
            Head_ID: 6,
            Full_Name: 'Amelia Harper',
            Prefix: 'Mrs.',
            Title: 'Network Admin',
            City: 'Los Angeles',
            Email: 'ameliah@dx-email.com',
            Skype: 'ameliah_DX_skype',
            Mobile_Phone: '(213) 555-4276',
            Birth_Date: '1983-11-19',
            Hire_Date: '2011-02-10'
        },
        {
            ID: 23,
            Head_ID: 6,
            Full_Name: 'Wally Hobbs',
            Prefix: 'Mr.',
            Title: 'Programmer',
            City: 'Chatsworth',
            Email: 'wallyh@dx-email.com',
            Skype: 'wallyh_DX_skype',
            Mobile_Phone: '(818) 555-8872',
            Birth_Date: '1984-12-24',
            Hire_Date: '2011-02-17'
        },
        {
            ID: 24,
            Head_ID: 6,
            Full_Name: 'Brad Jameson',
            Prefix: 'Mr.',
            Title: 'Programmer',
            City: 'San Fernando',
            Email: 'bradleyj@dx-email.com',
            Skype: 'bradleyj_DX_skype',
            Mobile_Phone: '(818) 555-4646',
            Birth_Date: '1988-10-12',
            Hire_Date: '2011-03-02'
        },
        {
            ID: 25,
            Head_ID: 6,
            Full_Name: 'Karen Goodson',
            Prefix: 'Miss',
            Title: 'Programmer',
            City: 'South Pasadena',
            Email: 'kareng@dx-email.com',
            Skype: 'kareng_DX_skype',
            Mobile_Phone: '(626) 555-0908',
            Birth_Date: '1987-04-26',
            Hire_Date: '2011-03-14'
        },
        {
            ID: 26,
            Head_ID: 5,
            Full_Name: 'Marcus Orbison',
            Prefix: 'Mr.',
            Title: 'Travel Coordinator',
            City: 'Los Angeles',
            Email: 'marcuso@dx-email.com',
            Skype: 'marcuso_DX_skype',
            Mobile_Phone: '(213) 555-7098',
            Birth_Date: '1982-03-02',
            Hire_Date: '2005-05-19'
        },
        {
            ID: 27,
            Head_ID: 5,
            Full_Name: 'Sandy Bright',
            Prefix: 'Ms.',
            Title: 'Benefits Coordinator',
            City: 'Tujunga',
            Email: 'sandrab@dx-email.com',
            Skype: 'sandrab_DX_skype',
            Mobile_Phone: '(818) 555-0524',
            Birth_Date: '1983-09-11',
            Hire_Date: '2005-06-04'
        },
        {
            ID: 28,
            Head_ID: 6,
            Full_Name: 'Morgan Kennedy',
            Prefix: 'Mrs.',
            Title: 'Graphic Designer',
            City: 'San Fernando Valley',
            Email: 'morgank@dx-email.com',
            Skype: 'morgank_DX_skype',
            Mobile_Phone: '(818) 555-8238',
            Birth_Date: '1984-07-17',
            Hire_Date: '2012-01-11'
        },
        {
            ID: 29,
            Head_ID: 28,
            Full_Name: 'Violet Bailey',
            Prefix: 'Ms.',
            Title: 'Jr Graphic Designer',
            City: 'La Canada',
            Email: 'violetb@dx-email.com',
            Skype: 'violetb_DX_skype',
            Mobile_Phone: '(818) 555-2478',
            Birth_Date: '1985-06-10',
            Hire_Date: '2012-01-19'
        },
        {
            ID: 30,
            Head_ID: 5,
            Full_Name: 'Ken Samuelson',
            Prefix: 'Dr.',
            Title: 'Ombudsman',
            City: 'Santa Fe Springs',
            Email: 'kents@dx-email.com',
            Skype: 'kents_DX_skype',
            Mobile_Phone: '(562) 555-9282',
            Birth_Date: '1972-09-11',
            Hire_Date: '2009-04-22'
        }
    ];

    collapsedOptions: Properties = {
        height: '100%',
        expandedRowKeys: [1],
        selectedRowKeys: [2],
        columnAutoWidth: false,
        columnHidingEnabled: true,
        columnChooser: { enabled: false },
        rowAlternationEnabled: false,
        filterRow: {
            visible: false
        },
        searchPanel: {
            visible: false
        },
        selection: {
            mode: 'multiple'
        },
        showBorders: true,
        hoverStateEnabled: false,
        allowColumnResizing: false,
        allowColumnReordering: false,
        editing: {
            allowUpdating: false,
            allowDeleting: false,
            mode: 'row'
        },
        columns: [
            {
                dataField: 'Title',
                caption: 'Position'
            },
            'Full_Name',
            'City',
            {
                dataField: 'Hire_Date',
                dataType: 'date'
            }
        ]
    };

    expandedOptions: Properties = {
        height: 460,
        columnChooser: { enabled: true },
        rowAlternationEnabled: true,
        selectedRowKeys: [2, 3],
        expandedRowKeys: [1, 5],
        columnAutoWidth: false,
        columnHidingEnabled: true,
        filterRow: {
            visible: true
        },
        searchPanel: {
            visible: true
        },
        selection: {
            mode: 'multiple'
        },
        showBorders: true,
        hoverStateEnabled: true,
        allowColumnResizing: true,
        allowColumnReordering: true,
        editing: {
            allowUpdating: true,
            allowDeleting: true,
            mode: 'batch'
        },
        columns: [
            {
                dataField: 'Title',
                caption: 'Position'
            },
            'Full_Name',
            'City',
            {
                dataField: 'Hire_Date',
                dataType: 'date'
            }
        ]
    };

    ngOnInit(): void {
        this.subscription = this.isExpanded.subscribe((expanded) => {
            this.treeList.instance.option(expanded ? this.expandedOptions : this.collapsedOptions);
        });
    }

    ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }
}
