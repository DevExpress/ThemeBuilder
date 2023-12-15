import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { DxLoadPanelComponent, DxToastComponent, DxTooltipComponent } from 'devextreme-angular';
import { BehaviorSubject, Subscription } from 'rxjs';

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

    ngOnInit(): void {
        this.subscription = this.isExpanded.subscribe((value) => {
            const flexContainer = document.getElementsByTagName('app-overlays')[0].parentElement.parentElement;
            flexContainer.addEventListener('transitionend', () => {
                if(this.tooltip) this.tooltip.instance.repaint();
                if(this.toast) this.toast.instance.repaint();
                if(this.loadPanel) this.loadPanel.instance.repaint();
            }, false);
            this.ofValue = value ? '#loadpanel-target-expanded' : '#loadpanel-target';
        });
    }

    ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }
}
