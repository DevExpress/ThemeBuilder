import { Component, OnDestroy } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { DxStepperTypes } from 'devextreme-angular/ui/stepper';
import { DxButtonGroupTypes } from 'devextreme-angular/ui/button-group';
import { DxSelectBoxTypes } from 'devextreme-angular/ui/select-box';

@Component({
    selector: 'app-stepper',
    templateUrl: './stepper.component.html',
    styleUrls: ['./stepper.component.css'],
    standalone: false
})
export class StepperComponent implements OnDestroy {
    isExpanded = new BehaviorSubject<boolean>(false);
    widgetGroup = 'stepper';

    showLabel = true;
    showOptionalText = true;
    disabledSteps = false;

    stepperTypes = [
        {text: 'Icons', showIcons: true},
        {text: 'Text', showIcons: false}
    ];

    isValidOptions = [
        {id: 1, text: 'Undefined', value: undefined},
        {id: 2, text: 'True', value: true},
        {id: 3, text: 'False', value: false}
    ];

    steps: DxStepperTypes.Item[] = [
        {
            text: 'A',
            label: 'Cart',
            icon: 'cart'
        },
        {
            text: 'B',
            label: 'Shipping Info',
            icon: 'clipboardtasklist'
        },
        {
            text: 'C',
            label: 'Promo Code',
            icon: 'gift',
            optional: true
        },
        {
            text: 'D',
            label: 'Checkout',
            icon: 'packagebox'
        },
        {
            text: 'E',
            label: 'Ordered',
            icon: 'checkmarkcircle'
        }
    ];

    selectedOption = this.isValidOptions[0];
    showIcons = this.stepperTypes[0].showIcons;

    toggleLabel() {
        this.showLabel = !this.showLabel;
    }

    toggleOptionalText() {
        this.showOptionalText = !this.showOptionalText;
    }

    toggleStepperType(e: DxButtonGroupTypes.ItemClickEvent) {
        this.showIcons = e.itemData.showIcons;
    }

    toggleValidation(e: DxSelectBoxTypes.ValueChangedEvent) {
        this.selectedOption = e.value;
        this.steps.forEach((item) => item.isValid = this.selectedOption.value);
    }

    toggleDisabledSteps() {
        this.disabledSteps = !this.disabledSteps;
        this.steps.forEach((item) => item.disabled = this.disabledSteps);
    }

    ngOnDestroy(): void {
        this.isExpanded.unsubscribe();
    }
}
