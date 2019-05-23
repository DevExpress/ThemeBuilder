import { Component, ViewChild, OnInit, OnDestroy } from '@angular/core';
import { BehaviorSubject, Subscription } from 'rxjs';
import { DxTooltipComponent, DxToastComponent, DxLoadPanelComponent } from 'devextreme-angular';

@Component({
    selector: 'app-overlays',
    templateUrl: './overlays.component.html',
    styleUrls: ['./overlays.component.css']
})
export class OverlaysComponent implements OnInit, OnDestroy {
    subscription: Subscription;

    @ViewChild('tooltip') tooltip: DxTooltipComponent;
    @ViewChild('toast') toast: DxToastComponent;
    @ViewChild('loadPanel') loadPanel: DxLoadPanelComponent;

    widgetGroup = 'overlays';
    isExpanded = new BehaviorSubject<boolean>(false);
    isExpandedValue = false;

    actionSheetData: Array<any> = [
        { 'text': 'Command 1' },
        { 'text': 'Command 2' },
        { 'text': 'Command 3' },
        { 'text': 'Command 4' }
    ];

    toastInit(e) {
        const toastContainer = this.isExpanded.getValue() ? '#target-block': '#toast-block';
        e.component.option('container', toastContainer);
    }

    hiding(e) {
        e.cancel = true;
    }

    ngOnInit() {
        this.subscription = this.isExpanded.subscribe((expanded) => {
            const flexContainer = document.getElementsByTagName('app-overlays')[0].parentElement.parentElement;
            flexContainer.addEventListener('transitionend', () => {
                this.tooltip && this.tooltip.instance.repaint();
                this.toast && this.toast.instance.repaint();
                this.loadPanel && this.loadPanel.instance.repaint();
            }, false);
        });
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
}
