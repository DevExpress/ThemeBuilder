import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { DxFormComponent } from 'devextreme-angular';
import { Subject, Subscription } from 'rxjs';
import { Properties } from 'devextreme/ui/form';

@Component({
    selector: 'app-form',
    templateUrl: './form.component.html',
    styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit, OnDestroy {
    widgetGroup = 'form';
    isExpanded = new Subject<boolean>();
    subscription: Subscription;

    @ViewChild('form') form: DxFormComponent;

    collapsedOptions: Properties = {
        labelLocation: 'top',
        formData: {
            'ID': 1,
            'Full Name': 'John Heart'
        },
        items: [
            {
                itemType: 'group',
                caption: 'Personal Data',
                items: [{dataField: 'ID'}, {dataField: 'Full Name'}]
            }
        ]
    };

    expandedOptions: Properties = {
        labelLocation: 'top',
        formData: {
            Address: '351 S Hill St.',
            City: 'Los Angeles',
            State: 'CA',
            FirstName: 'John',
            LastName: 'Heart'
        },
        items: [
            {
                itemType: 'group',
                caption: 'Personal Data',
                items: [{dataField: 'FirstName'}, {dataField: 'LastName'}]
            },
            {
                itemType: 'group',
                colCount: 2,
                caption: 'Home Address',
                items: [
                    {dataField: 'Address'},
                    {
                        dataField: 'City',
                        label: {
                            text: 'City, State'
                        }
                    }
                ]
            }
        ]
    };

    ngOnInit(): void {
        this.subscription = this.isExpanded.subscribe((expanded) => {
            this.form.instance.option(expanded ? this.expandedOptions : this.collapsedOptions);
            this.form.instance.updateDimensions();
        });
    }

    ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }
}
