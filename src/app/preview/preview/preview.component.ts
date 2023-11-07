import { AfterViewInit, Component, Input, OnChanges, QueryList, SimpleChanges, ViewChild, ViewChildren } from '@angular/core';
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

    notExpandableWidgets: string[] = [
        'navigations.menu',
        'navigations.tabs',
        'navigations.toolbar',
        'navigations.drawer',
        'navigations.treeview',
        'navigations.accordion',
        'gallery',
        'progressbars',
        'sliders',
        'scrollview',
        'filterbuilder',
        'fieldset'
    ];

    isWidgetClosed = true;

    createPreviewContent(widget: any): void {
        const EXPAND_CLASS_NAME = 'component-item--active';
        const SELECTED_ITEM_CLASS_NAME = 'selected-component-item';
        const flexContainers = document.getElementsByClassName('component-item');
        const scrollableContainer = this.scrollView.instance.element().querySelector('.dx-scrollable-container');
        const currentWidget: string = widget.currentValue || widget;
        const previousWidget = widget.previousValue || '';

        /* eslint @typescript-eslint/prefer-for-of: 'off' */
        for(let i = 0; i < flexContainers.length; i++) {
            flexContainers[i].classList.remove(EXPAND_CLASS_NAME);
            flexContainers[i].classList.remove(SELECTED_ITEM_CLASS_NAME);
        }

        this.widgetElements.forEach((widgetEl) => {
            if(!previousWidget || widgetEl.widgetGroup === previousWidget) {
                widgetEl.isExpanded.next(false);
            }
        });

        if(this.isWidgetClosed) {
            const PREVIEW_AREA_SCROLL_TIMEOUT = 600;
            const WIDGET_BLOCK_EXPAND_TIMEOUT = 400;
            setTimeout(() => {
                if(currentWidget === 'base.common' || currentWidget === 'base.typography') {
                    scrollableContainer.scrollTo({
                        top: 0,
                        behavior: 'smooth'
                    });

                    return;
                }

                const widgetContainer = document.getElementsByTagName('app-' + currentWidget.replace('navigations.', ''));
                const flexParentContainer = widgetContainer[0].parentElement.parentElement;
                const scrollTop = 30;

                flexParentContainer.classList.add(SELECTED_ITEM_CLASS_NAME);

                if(this.notExpandableWidgets.indexOf(currentWidget) >= 0) {
                    scrollableContainer.scrollTo({
                        top: flexParentContainer.offsetTop - scrollTop,
                        behavior: 'smooth'
                    });

                    return;
                }

                flexParentContainer.classList.add(EXPAND_CLASS_NAME);

                setTimeout(() => {
                    scrollableContainer.scrollTo({
                        top: flexParentContainer.offsetTop - scrollTop,
                        behavior: 'smooth'
                    });

                    this.widgetElements.forEach((widgetEl) => {
                        if(widgetEl.widgetGroup === currentWidget) {
                            widgetEl.isExpanded.next(true);
                        }
                    });
                }, PREVIEW_AREA_SCROLL_TIMEOUT);
            }, WIDGET_BLOCK_EXPAND_TIMEOUT);
        }

        this.isWidgetClosed = true;
    }

    buttonDetailedClick(e): void {
        this.isWidgetClosed = e.isClosed;
    }

    ngOnChanges(changes: SimpleChanges): void {
        if(!changes.widgetName.firstChange) {
            this.createPreviewContent(changes.widgetName);
        }
    }

    ngAfterViewInit(): void {
        this.createPreviewContent(this.widgetName);
    }

    fireScrollEventForClosingDropdowns() {
        document.body.dispatchEvent(new Event('scroll'));
    }
}
