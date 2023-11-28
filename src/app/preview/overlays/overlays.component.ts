import { Component, OnDestroy, OnInit, ViewChild, ElementRef } from '@angular/core';
import { DxLoadPanelComponent, DxToastComponent, DxTooltipComponent } from 'devextreme-angular';
import { BehaviorSubject, Subscription } from 'rxjs';

const UPDATE_TOOLTIP_VISIBILITY_INTERVAL = 50;

@Component({
    selector: 'app-overlays',
    templateUrl: './overlays.component.html',
    styleUrls: ['./overlays.component.css']
})
export class OverlaysComponent implements OnInit, OnDestroy {
    subscription: Subscription;
    updateTooltipVisibilityIntervalHandler: number;

    @ViewChild('tooltipPreview') tooltipPreview: DxTooltipComponent;
    @ViewChild('tooltipPreviewBlock') tooltipPreviewBlock: ElementRef;
    @ViewChild('tooltip') tooltip: DxTooltipComponent;
    @ViewChild('toast') toast: DxToastComponent;
    @ViewChild('loadPanel') loadPanel: DxLoadPanelComponent;

    widgetGroup = 'overlays';
    isExpanded = new BehaviorSubject<boolean>(false);
    ofValue = '#loadpanel-target';

    actionSheetData: any[] = [
        { text: 'Command 1' },
        { text: 'Command 2' },
        { text: 'Command 3' },
        { text: 'Command 4' }
    ];

    toastInit(e: any): void {
        const toastContainer = this.isExpanded.getValue() ? '#target-block' : '#toast-block';
        e.component.option('container', toastContainer);
    }

    hiding(e: any): void {
        e.cancel = true;
    }

    isElementInViewport(el) {
        const rect = el.getBoundingClientRect();

        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    updateVisibilityPreviewTooltip(): void {
        const isElementInViewport = this.isElementInViewport(this.tooltipPreviewBlock?.nativeElement);
        this.tooltipPreview.visible = isElementInViewport;

        if(isElementInViewport) {
            this.tooltipPreview.instance.repaint();
        }
    }

    ngOnInit(): void {
        this.updateTooltipVisibilityIntervalHandler = setInterval(() => {
            this.updateVisibilityPreviewTooltip();
        }, UPDATE_TOOLTIP_VISIBILITY_INTERVAL);

        this.subscription = this.isExpanded.subscribe((value) => {
            const flexContainer = document.getElementsByTagName('app-overlays')[0].parentElement.parentElement;
            flexContainer.addEventListener('transitionend', () => {
                if(this.tooltipPreview) this.tooltipPreview.instance.repaint();
                if(this.tooltip) this.tooltip.instance.repaint();
                if(this.toast) this.toast.instance.repaint();
                if(this.loadPanel) this.loadPanel.instance.repaint();
            }, false);
            this.ofValue = value ? '#loadpanel-target-expanded' : '#loadpanel-target';
        });
    }

    ngOnDestroy(): void {
        this.subscription.unsubscribe();
        clearInterval(this.updateTooltipVisibilityIntervalHandler);
    }
}
