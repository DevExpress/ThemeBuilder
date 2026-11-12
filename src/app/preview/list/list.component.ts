import { Component, ViewChild, ChangeDetectionStrategy, signal } from '@angular/core';
import { DxListComponent } from 'devextreme-angular';
import { onExpandedChange } from '../expandable';
import { Properties } from 'devextreme/ui/list';

@Component({
    selector: 'app-list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.css'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class ListComponent {
    widgetGroup = 'list';
    isExpanded = signal<boolean>(false);

    @ViewChild('list') list: DxListComponent;

    collapsedOptions: Properties = {
        grouped: true,
        allowItemDeleting: true,
        selectionMode: 'single',
        items: [{
            key: 'Ship Country: Germany',
            items: [
                {
                    text: 'Toms Spezialitaten'
                }, {
                    text: 'Ottilies Kaseladen',
                    badge: 5
                }
            ]
        },
        {
            key: 'Ship Country: France',
            items: [
                {
                    text: 'Vins et alcools Chevalier'
                }, {
                    text: 'Richter Supermarkt'
                }, {
                    text: 'Blondel pere et fils'
                }, {
                    text: 'Que Delicia',
                    badge: 33
                }, {
                    text: 'Folk och fa HB',
                    showChevron: true
                }
            ]
        },
        {
            key: 'Ship Country: Switzerland',
            items: [
                {
                    text: 'Hanari Carnes'
                }, {
                    text: 'Chop-suey Chinese'
                }
            ]
        }]
    };

    expandedOptions: Properties = {
        grouped: true,
        allowItemDeleting: true,
        selectionMode: 'single',
        items: [{
            key: 'Ship Country: Germany',
            items: [
                {
                    text: 'Toms Spezialitaten'
                }, {
                    text: 'Ottilies Kaseladen',
                    badge: 5
                }
            ]
        },
        {
            key: 'Ship Country: France',
            items: [
                {
                    text: 'Vins et alcools Chevalier'
                }, {
                    text: 'Richter Supermarkt'
                }, {
                    text: 'Blondel pere et fils'
                }, {
                    text: 'Que Delicia',
                    badge: 33
                }, {
                    text: 'Folk och fa HB'
                }
            ]
        },
        {
            key: 'Ship Country: Switzerland',
            items: [
                {
                    text: 'Hanari Carnes'
                }, {
                    text: 'Chop-suey Chinese'
                }
            ]
        }]
    };

    constructor() {
        onExpandedChange(this.isExpanded, (expanded) => {
            this.list.instance.option(expanded ? this.expandedOptions : this.collapsedOptions);
            this.list.instance.updateDimensions();
        });
    }
}
