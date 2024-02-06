import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { DxButtonTypes } from 'devextreme-angular/ui/button';
import { DxButtonGroupTypes } from 'devextreme-angular/ui/button-group';
import { DxCheckBoxTypes } from 'devextreme-angular/ui/check-box';
import { DxSelectBoxTypes } from 'devextreme-angular/ui/select-box';
import dxButtonGroup from 'devextreme/ui/button_group';

type CustomButtonGroupItem = DxButtonGroupTypes.Item & {
    key: string
};

@Component({
    selector: 'app-button-group',
    templateUrl: './button-group.component.html',
    styleUrls: ['./button-group.component.css']
})
export class ButtonGroupComponent {
    listButtonGroup: dxButtonGroup[] = [];

    typeValue = 'default';

    capitalizeFirstLetter(str: string) {
        // eslint-disable-next-line @typescript-eslint/no-magic-numbers
        return str.charAt(0).toUpperCase() + str.slice(1);
    }

    initStateHover(event: DxButtonGroupTypes.ContentReadyEvent) {
        event.element.querySelector('.dx-button:first-child').classList.add('dx-state-hover');
    }

    initStateActive(event: DxButtonGroupTypes.ContentReadyEvent) {
        event.element.querySelector('.dx-button:first-child').classList.add('dx-state-active');
    }

    initStateFocused(event: DxButtonGroupTypes.ContentReadyEvent) {
        event.element.querySelector('.dx-button:first-child').classList.add('dx-state-focused');
    }

    initStateSelected(event: DxButtonGroupTypes.ContentReadyEvent) {
        event.element.querySelector('.dx-button:first-child').classList.add('dx-state-selected');
    }

    initStateDisabled(event: DxButtonGroupTypes.ContentReadyEvent) {
        event.element.querySelectorAll('.dx-button').forEach((button) => {
            button.classList.add('dx-state-disabled');
        });
    }

    changeType(event: DxSelectBoxTypes.ValueChangedEvent) {
        this.listButtonGroup.forEach((component) => {
            const items = component.option('items');
            const changedItems = items.map((item: CustomButtonGroupItem) => {
                item.type = event.value;
                return item;
            });

            component.option('items', changedItems);
        });
    }

    toogleIcons(event: DxCheckBoxTypes.ValueChangedEvent) {
        this.listButtonGroup.forEach((component) => {
            const items = component.option('items');
            const changedItems = items.map((item: CustomButtonGroupItem) => {
                item.icon = event.value ? 'align' + item.key : undefined;
                return item;
            });

            component.option('items', changedItems);
        });
    }

    toogleText(event: DxCheckBoxTypes.ValueChangedEvent) {
        this.listButtonGroup.forEach((component) => {
            const items = component.option('items');
            const changedItems = items.map((item: CustomButtonGroupItem) => {
                item.text = event.value ? this.capitalizeFirstLetter(item.key) : undefined;
                return item;
            });

            component.option('items', changedItems);
        });
    }

    saveStateButtonGroup(event: DxButtonGroupTypes.InitializedEvent) {
        this.listButtonGroup.push(event.component);
    }

    isExpanded = new BehaviorSubject<boolean>(false);

    buttonModes: DxButtonTypes.ButtonStyle[] = ['contained', 'outlined', 'text'];

    fullButtonItems: CustomButtonGroupItem[] = [
        {
            key: 'left',
            icon: 'alignleft',
            text: 'Left',
            type: 'default'
        },
        {
            key: 'center',
            icon: 'aligncenter',
            text: 'Center',
            type: 'default'
        },
        {
            key: 'right',
            icon: 'alignright',
            text: 'Right',
            type: 'default'
        }
    ];

    shortButtonItems: DxButtonGroupTypes.Item[] = [
        {
            icon: 'alignleft',
            type: 'default'
        },
        {
            icon: 'aligncenter',
            type: 'default'
        },
        {
            icon: 'alignright',
            type: 'default'
        }
    ];

    widgetGroup = 'button-group';
}
