import { Component, OnDestroy, OnInit, ViewChild, ChangeDetectionStrategy, computed, signal } from '@angular/core';
import { DxLoadPanelComponent, DxToastComponent, DxTooltipComponent } from 'devextreme-angular';

@Component({
    selector: 'app-overlays',
    templateUrl: './overlays.component.html',
    styleUrls: ['./overlays.component.css'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class OverlaysComponent implements OnInit, OnDestroy {
    @ViewChild('tooltip') tooltip: DxTooltipComponent;
    @ViewChild('toast') toast: DxToastComponent;
    @ViewChild('loadPanel') loadPanel: DxLoadPanelComponent;

    widgetGroup = 'overlays';
    isExpanded = signal<boolean>(false);
    ofValue = computed(() => this.isExpanded() ? '#loadpanel-target-expanded' : '#loadpanel-target');

    private flexContainer: HTMLElement;
    private readonly repaintOverlays = (): void => {
        if(this.tooltip) this.tooltip.instance.repaint();
        if(this.toast) this.toast.instance.repaint();
        if(this.loadPanel) this.loadPanel.instance.repaint();
    };

    actionSheetData: any[] = [
        { text: 'Command 1' },
        { text: 'Command 2' },
        { text: 'Command 3' },
        { text: 'Command 4' }
    ];

    toastInit(e: any): void {
        const toastContainer = this.isExpanded() ? '#target-block' : '#toast-block';
        e.component.option('container', toastContainer);
    }

    hiding(e: any): void {
        e.cancel = true;
    }

    ngOnInit(): void {
        this.flexContainer = document.getElementsByTagName('app-overlays')[0].parentElement.parentElement;
        this.flexContainer.addEventListener('transitionend', this.repaintOverlays, false);
    }

    ngOnDestroy(): void {
        this.flexContainer?.removeEventListener('transitionend', this.repaintOverlays);
    }
}
