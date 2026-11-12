import { Component, ViewChild, signal } from '@angular/core';
import { DxFormComponent } from 'devextreme-angular';
import { onExpandedChange } from '../expandable';
import { Properties } from 'devextreme/ui/form';

@Component({
    selector: 'app-form',
    templateUrl: './form.component.html',
    styleUrls: ['./form.component.css'],
    standalone: false
})
export class FormComponent {
    widgetGroup = 'form';
    isExpanded = signal<boolean>(false);

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

    constructor() {
        onExpandedChange(this.isExpanded, (expanded) => {
            this.form.instance.option(expanded ? this.expandedOptions : this.collapsedOptions);
            this.form.instance.updateDimensions();
        });
    }
}
