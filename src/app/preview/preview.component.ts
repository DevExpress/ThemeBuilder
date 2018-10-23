import { Component, OnInit, ViewChildren, ViewChild, QueryList } from '@angular/core';
import { DxScrollViewComponent } from 'devextreme-angular';

@Component({
    selector: 'app-preview',
    templateUrl: './preview.component.html',
    styleUrls: ['./preview.component.css']
})
export class PreviewComponent implements OnInit {
    @ViewChildren('widget') widgetElements: QueryList<any>;

    @ViewChild('scrollView') scrollView: DxScrollViewComponent;

    isStylesReady = false;

    receiveMessage(e) {
        if(e.data.css) {
            this.addHeadStyles(e.data.css);
        }
        if(e.data.widget) {
            this.createPreviewContent(e.data.widget);
        }
    }

    addHeadStyles(css: string) {
        const head = document.getElementsByTagName('head')[0];
        const style = document.createElement('style');
        const DYNAMIC_STYLES_ID = 'dynamic-styles';

        if(document.getElementById(DYNAMIC_STYLES_ID))
            document.getElementById(DYNAMIC_STYLES_ID).remove();

        style.type = 'text/css';
        style.id = DYNAMIC_STYLES_ID;

        css = css
            .replace(/url\(icons\/dxicons/gi, 'url(content/css/icons/dxicons')
            .replace(/url\(fonts\/Roboto/gi, 'url(content/css/fonts/Roboto');

        style.appendChild(document.createTextNode(css));
        head.appendChild(style);

        this.isStylesReady = true;
    }

    createPreviewContent(widget: string) {
        const EXPAND_CLASS_NAME = 'expanded';
        const flexContainers = document.getElementsByClassName('flex-item');
        const scrollableContainer = this.scrollView.instance.element().querySelector('.dx-scrollable-container');

        for(let i = 0; i < flexContainers.length; i++) {
            flexContainers[i].classList.remove(EXPAND_CLASS_NAME);
        }

        this.widgetElements.forEach((widgetEl) => {
            widgetEl.isExpanded.next(widgetEl.widgetGroup === widget);
        });


        setTimeout(() => {
            if(widget === 'base.common' || widget === 'base.typography') {
                scrollableContainer.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });

                return;
            }

            const widgetContainer = document.getElementsByTagName('app-' + widget.replace('navigations.', ''));
            const flexParentContainer =  widgetContainer[0].parentElement.parentElement;
            const scrollTop = 30;

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
                    widgetEl.isExpanded.next(widgetEl.widgetGroup === widget);
                });
            }, 600);
        }, 400);
    }

    ngOnInit() {
        window.addEventListener('message', this.receiveMessage.bind(this), false);
    }
}
