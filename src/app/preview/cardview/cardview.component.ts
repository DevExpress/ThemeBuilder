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

    dataSource: any[] = [
          {
            id: 3,
            firstName: "Arthur",
            lastName: "Miller",
            title: "CTO",
            email: "arthurm@dx-email.com",
            mobilePhone: "3105558583",
            department: "Management",
            pictureName: "Arthur Miller.jpg",
            picture: undefined
        },
        {
            id: 4,
            firstName: "Robert",
            lastName: "Reagan",
            title: "CMO",
            email: "robertr@dx-email.com",
            mobilePhone: "8185552387",
            department: "Management",
            pictureName: "Robert Reagan.jpg",
            picture: "images/employees/Robert Reagan.jpg"
        },
        {
            id: 5,
            firstName: "Greta",
            lastName: "Sims",
            title: "HR Manager",
            email: "gretas@dx-email.com",
            mobilePhone: "8185556546",
            department: "Human Resources",
            pictureName: "Greta Sims.jpg",
            picture: "images/employees/Greta Sims.jpg"
        },
        {
            id: 6,
            firstName: "Brett",
            lastName: "Wade",
            title: "IT Manager",
            email: "brettw@dx-email.com",
            mobilePhone: "6265550358",
            department: "IT",
            pictureName: "Brett Wade.jpg",
            picture: "images/employees/Brett Wade.jpg"
        },
        {
            id: 7,
            firstName: "Sandra",
            lastName: "Johnson",
            title: "Controller",
            email: "sandraj@dx-email.com",
            mobilePhone: "5625552082",
            department: "Human Resources",
            pictureName: "Sandra Johnson.jpg",
            picture: "images/employees/Sandra Johnson.jpg"
        },
        {
            id: 8,
            firstName: "Edward",
            lastName: "Holmes",
            title: "Sales Manager",
            email: "edwardh@dx-email.com",
            mobilePhone: "3105551288",
            department: "Sales",
            pictureName: "Ed Holmes.jpg",
            picture: undefined
        },
        {
            id: 9,
            firstName: "Barbara",
            lastName: "Banks",
            title: "Support Manager",
            email: "barbarab@dx-email.com",
            mobilePhone: "3105553355",
            department: "Support",
            pictureName: "Barb Banks.jpg",
            picture: "images/employees/Barb Banks.jpg"
        },
        {
            id: 10,
            firstName: "Kevin",
            lastName: "Carter",
            title: "Shipping Manager",
            email: "kevinc@dx-email.com",
            mobilePhone: "2135552840",
            department: "Shipping",
            pictureName: "Kevin Carter.jpg",
            picture: "images/employees/Kevin Carter.jpg"
        },
        {
            id: 11,
            firstName: "Cynthia",
            lastName: "Stanwick",
            title: "HR Assistant",
            email: "cindys@dx-email.com",
            mobilePhone: "8185556655",
            department: "Human Resources",
            pictureName: "Cindy Stanwick.jpg",
            picture: "images/employees/Cindy Stanwick.jpg"
        },
        {
            id: 12,
            firstName: "Sam",
            lastName: "Hill",
            title: "Sales Assistant",
            email: "sammyh@dx-email.com",
            mobilePhone: "6265557292",
            department: "Sales",
            pictureName: "Sammy Hill.jpg",
            picture: "images/employees/Sammy Hill.jpg"
        },
        {
            id: 13,
            firstName: "David",
            lastName: "Jones",
            title: "Shipping Assistant",
            email: "davidj@dx-email.com",
            mobilePhone: "6265550281",
            department: "Shipping",
            pictureName: "Davey Jones.jpg",
            picture: "images/employees/Davey Jones.jpg"
        },
        {
            id: 14,
            firstName: "Victor",
            lastName: "Norris",
            title: "Shipping Assistant",
            email: "victorn@dx-email.com",
            mobilePhone: "2135559278",
            department: "Shipping",
            pictureName: "Victor Norris.jpg",
            picture: "images/employees/Victor Norris.jpg"
        },
        {
            id: 15,
            firstName: "Mary",
            lastName: "Stern",
            title: "Shipping Assistant",
            email: "marys@dx-email.com",
            mobilePhone: "8185557857",
            department: "Shipping",
            pictureName: "Mary Stern.jpg",
            picture: "images/employees/Mary Stern.jpg"
        },
        {
            id: 16,
            firstName: "Robin",
            lastName: "Cosworth",
            title: "Shipping Assistant",
            email: "robinc@dx-email.com",
            mobilePhone: "8185550942",
            department: "Shipping",
            pictureName: "Robin Cosworth.jpg",
            picture: "images/employees/Robin Cosworth.jpg"
        },
        {
            id: 17,
            firstName: "Kelly",
            lastName: "Rodriguez",
            title: "Support Assistant",
            email: "kellyr@dx-email.com",
            mobilePhone: "8185559248",
            department: "Support",
            pictureName: "Kelly Rodriguez.jpg",
            picture: "images/employees/Kelly Rodriguez.jpg"
        },
        {
            id: 18,
            firstName: "James",
            lastName: "Anderson",
            title: "Support Assistant",
            email: "jamesa@dx-email.com",
            mobilePhone: "3235554702",
            department: "Support",
            pictureName: "James Anderson.jpg",
            picture: undefined
        },
        {
            id: 19,
            firstName: "Anthony",
            lastName: "Remmen",
            title: "Support Assistant",
            email: "anthonyr@dx-email.com",
            mobilePhone: "3105556625",
            department: "Support",
            pictureName: "Antony Remmen.jpg",
            picture: "images/employees/Antony Remmen.jpg"
        },
        {
            id: 20,
            firstName: "Olivia",
            lastName: "Peyton",
            title: "Sales Assistant",
            email: "oliviap@dx-email.com",
            mobilePhone: "3105552728",
            department: "Sales",
            pictureName: "Olivia Peyton.jpg",
            picture: "images/employees/Olivia Peyton.jpg"
        },
    ];

    collapsedOptions: Properties = {
        height: "100%",
        cardsPerRow: 2,
        columnChooser: { 
            enabled: false,
        },
        pager: {
            visible: false,
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
            allowAdding: false,
        },
        cardCover: undefined,
        columns: [
            {
                dataField: 'firstName',
                sortIndex: 0,
                sortOrder: 'asc',
            },
            {
                dataField: 'lastName',
                sortIndex: 1,
                sortOrder: 'asc',
            },
            {
                dataField: 'title'
            },
        ],
    };

    expandedOptions: Properties = {
        dataSource: this.dataSource,
        height: 800,
        cardsPerRow: 4,
        columnChooser: { 
            enabled: true,
        },
        pager: {
            visible: true,
        },
        sorting: {
            mode: 'multiple'
        },
        searchPanel: {
            visible: true
        },
        selection: {
            mode: 'multiple',
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
        },
        cardCover: {
            imageExpr: 'picture',
            altExpr: 'picutreName',
        },
        columns: [
            {
                dataField: 'id',
            },
            {
                dataField: 'firstName',
                sortIndex: 0,
                sortOrder: 'asc',
            },
            {
                dataField: 'lastName',
                sortIndex: 1,
                sortOrder: 'asc',
            },
            {
                dataField: 'title'
            },
            {
                dataField: 'email'
            },
            {
                dataField: 'mobilePhone'
            },
            {
                dataField: 'department'
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
