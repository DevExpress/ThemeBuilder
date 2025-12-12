/*eslint @typescript-eslint/no-magic-numbers: 'off'*/
import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { DxCardViewComponent } from 'devextreme-angular';
import { DxCardViewTypes } from 'devextreme-angular/ui/card-view';
import { Subject, Subscription } from 'rxjs';

@Component({
    selector: 'app-cardview',
    templateUrl: './cardview.component.html',
    styleUrls: ['./cardview.component.css'],
    standalone: false
})
export class CardviewComponent implements OnInit, OnDestroy {
    widgetGroup = 'cardview';
    isExpanded = new Subject<boolean>();
    subscription: Subscription;

    @ViewChild('cardView') cardView: DxCardViewComponent;

    dataSource: any[] = [
        {
            id: 3,
            fullName: 'Arthur Miller',
            title: 'CTO',
            department: 'Management',
            email: 'arthurm@dx-email.com',
            pictureName: 'Arthur Miller.jpg',
            picture: undefined
        },
        {
            id: 4,
            firstName: 'Robert',
            lastName: 'Reagan',
            title: 'CMO',
            email: 'robertr@dx-email.com',
            mobilePhone: '8185552387',
            department: 'Management',
            pictureName: 'Robert Reagan.jpg',
            picture: 'images/employees/Robert Reagan.jpg'
        },
        {
            id: 5,
            fullName: 'Greta Sims',
            title: 'HR Manager',
            department: 'Human Resources',
            email: 'gretas@dx-email.com',
            pictureName: 'Greta Sims.jpg',
            picture: 'images/employees/Greta Sims.jpg'
        },
        {
            id: 6,
            fullName: 'Brett Wade',
            title: 'IT Manager',
            department: 'IT',
            email: 'brettw@dx-email.com',
            pictureName: 'Brett Wade.jpg',
            picture: 'images/employees/Brett Wade.jpg'
        },
        {
            id: 7,
            fullName: 'Sandra Johnson',
            title: 'Controller',
            department: 'Human Resources',
            email: 'sandraj@dx-email.com',
            pictureName: 'Sandra Johnson.jpg',
            picture: 'images/employees/Sandra Johnson.jpg'
        },
        {
            id: 8,
            fullName: 'Edward Holmes',
            title: 'Sales Manager',
            department: 'Sales',
            email: 'edwardh@dx-email.com',
            pictureName: 'Ed Holmes.jpg',
            picture: 'images/employees/Ed Holmes.jpg'
        },
        {
            id: 9,
            fullName: 'Barbara Banks',
            title: 'Support Manager',
            department: 'Support',
            email: 'barbarab@dx-email.com',
            pictureName: 'Barb Banks.jpg',
            picture: 'images/employees/Barb Banks.jpg'
        },
        {
            id: 10,
            fullName: 'Kevin Carter',
            title: 'Shipping Manager',
            department: 'Shipping',
            email: 'kevinc@dx-email.com',
            pictureName: 'Kevin Carter.jpg',
            picture: 'images/employees/Kevin Carter.jpg'
        }
    ];

    commonOptions: DxCardViewTypes.Properties = {
        keyExpr: 'id',
        dataSource: this.dataSource,
        hoverStateEnabled: true,
        allowColumnReordering: true,
        paging: {
            pageSize: 4
        },
        filterBuilderPopup: {
            width: 560,
            height: 320
        }
    };

    collapsedOptions: DxCardViewTypes.Properties = {
        ...this.commonOptions,
        height: '100%',
        cardsPerRow: 2,
        columnChooser: {
            enabled: false
        },
        pager: {
            visible: false
        },
        sorting: {
            mode: 'multiple'
        },
        searchPanel: {
            visible: false
        },
        selection: {
            mode: 'none'
        },
        filterPanel: {
            visible: false
        },
        headerFilter: {
            visible: false
        },
        editing: {
            allowUpdating: false,
            allowDeleting: false,
            allowAdding: false
        },
        cardCover: undefined,
        columns: [
            {
                dataField: 'fullName',
                sortIndex: 0,
                sortOrder: 'asc'
            },
            {
                dataField: 'title',
                sortIndex: 1,
                sortOrder: 'asc'
            },
            {
                dataField: 'email'
            }
        ]
    };

    expandedOptions: DxCardViewTypes.Properties = {
        ...this.commonOptions,
        height: 800,
        cardsPerRow: 4,
        columnChooser: {
            enabled: true
        },
        pager: {
            visible: true,
            showPageSizeSelector: true,
            allowedPageSizes: [4, 8]
        },
        sorting: {
            mode: 'multiple'
        },
        searchPanel: {
            visible: true
        },
        selection: {
            mode: 'multiple',
            showCheckBoxesMode: 'always'
        },
        filterPanel: {
            visible: true
        },
        headerFilter: {
            visible: true
        },
        editing: {
            allowUpdating: true,
            allowDeleting: true,
            allowAdding: true,
            popup: {
                title: 'Employee Info',
                showTitle: true,
                width: 560,
                height: 320
            }
        },
        cardCover: {
            imageExpr: 'picture',
            altExpr: 'picutreName'
        },
        columns: [
            {
                dataField: 'fullName',
                sortIndex: 0,
                sortOrder: 'asc'
            },
            {
                dataField: 'title',
                sortIndex: 1,
                sortOrder: 'asc'
            },
            {
                dataField: 'email'
            },
            {
                dataField: 'department'
            }
        ]
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
