import { Component, OnDestroy } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

interface PaneContentTemplate {
    name: string;
    data?: any;
}

@Component({
    selector: 'app-splitter',
    templateUrl: './splitter.component.html',
    styleUrls: ['./splitter.component.css']
})
export class SplitterComponent implements OnDestroy {
    isExpanded = new BehaviorSubject<boolean>(false);
    widgetGroup = 'splitter';
    dimensionOptions = new Set(['size', 'minSize', 'maxSize']);

    paneContentTemplates: PaneContentTemplate[] = [
        { name: 'Left Pane' },
        { name: 'Central Pane' },
        { name: 'Right Pane' },
        { name: 'Nested Left Pane' },
        { name: 'Nested Central Pane' },
        { name: 'Nested Right Pane' },
        { name: 'Nested Top Pane' },
        { name: 'Nested Bottom Pane' }
    ];

    getPaneState(data: any): string {
        if(data.resizable !== false && !data.collapsible) {
            return 'Resizable only';
        }
        const resizableText = data.resizable ? 'Resizable' : 'Non-resizable';
        const collapsibleText = data.collapsible ? 'collapsible' : 'non-collapsible';

        return `${resizableText} and ${collapsibleText}`;
    }

    filterDimensionOptions(data: any): { key: string; value: any }[] {
        return Object.entries(data)
            .reverse()
            .filter(([key]) => this.dimensionOptions.has(key))
            .map(([key, value]) => ({ key, value }));
    }

    ngOnDestroy(): void {
        this.isExpanded.unsubscribe();
    }
}
