import { Component, AfterViewInit, ViewChildren, ViewChild, QueryList, Input, OnChanges, SimpleChanges } from '@angular/core';
import { DxScrollViewComponent } from 'devextreme-angular';

@Component({
    selector: 'app-preview',
    templateUrl: './preview.component.html',
    styleUrls: ['./preview.component.css']
})
export class PreviewComponent implements AfterViewInit, OnChanges {
    @ViewChildren('widget') widgetElements: QueryList<any>;
    @ViewChild('scrollView') scrollView: DxScrollViewComponent;
    @Input() widgetName: string;

    notExpandableWidgets: Array<string> = [
        'navigations.menu',
        'navigations.navbar',
        'navigations.tabs',
        'navigations.toolbar',
        'navigations.drawer',
        'navigations.treeview',
        'progressbars',
        'sliders',
        'scrollview',
        'filterbuilder',
        'accordion'
    ];

    isWidgetClosed = true;

    createPreviewContent(widget: any) {
        const EXPAND_CLASS_NAME = 'expanded';
        const NOT_EXPAND_CLASS_NAME = 'not-expanded';
        const flexContainers = document.getElementsByClassName('flex-item');
        const scrollableContainer = this.scrollView.instance.element().querySelector('.dx-scrollable-container');
        const currentWidget = widget.currentValue || widget;

        for(let i = 0; i < flexContainers.length; i++) {
            flexContainers[i].classList.remove(EXPAND_CLASS_NAME);
            flexContainers[i].classList.remove(NOT_EXPAND_CLASS_NAME);
        }

        this.widgetElements.forEach((widgetEl) => {
            widgetEl.isExpanded.next(false);
        });

        if(this.isWidgetClosed) {
            setTimeout(() => {
                if(currentWidget === 'base.common' || currentWidget === 'base.typography') {
                    scrollableContainer.scrollTo({
                        top: 0,
                        behavior: 'smooth'
                    });

                    return;
                }

                const widgetContainer = document.getElementsByTagName('app-' + currentWidget.replace('navigations.', ''));
                const flexParentContainer =  widgetContainer[0].parentElement.parentElement;
                const scrollTop = 30;

                if(this.notExpandableWidgets.includes(currentWidget)) {
                    flexParentContainer.classList.add(NOT_EXPAND_CLASS_NAME);

                    scrollableContainer.scrollTo({
                        top: flexParentContainer.offsetTop - scrollTop,
                        behavior: 'smooth'
                    });

                    return;
                }

                if(flexParentContainer.parentElement.classList.contains('group')) {
                    flexParentContainer.parentElement.classList.add(EXPAND_CLASS_NAME);
                }

                flexParentContainer.classList.add(EXPAND_CLASS_NAME);

                setTimeout(() => {
                    scrollableContainer.scrollTo({
                        top: flexParentContainer.offsetTop - scrollTop,
                        behavior: 'smooth'
                    });

                    this.widgetElements.forEach((widgetEl) => {
                        if(widgetEl.widgetGroup === currentWidget)
                            widgetEl.isExpanded.next(true);
                    });
                }, 600);
            }, 400);
        }

        this.isWidgetClosed = true;
    }

    buttonDetailedClick(e) {
       this.isWidgetClosed = e.isClosed;
    }

    ngOnChanges(changes: SimpleChanges) {
        if(!changes.widgetName.firstChange)
            this.createPreviewContent(changes.widgetName);
    }

    ngAfterViewInit() {
        this.createPreviewContent(this.widgetName);
    }
}
