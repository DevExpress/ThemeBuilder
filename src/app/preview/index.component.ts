import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-preview-index',
    templateUrl: './index.component.html',
    styleUrls: ['./index.component.css']
})
export class PreviewIndexComponent implements OnInit {
    isStylesReady = false;
    viewName: string;
    themeName: string;
    themeSize: string;
    widgetName: string;
    typographyClass: string;

    constructor(private router: Router) {
       this.viewName = this.router.url.split('/')[1];
       this.themeName = this.router.url.split('/')[2];
       this.typographyClass = 'dx-theme-' + this.themeName + '-typography';
    }

    receiveMessage(e) {
        if(e.data.css) {
            this.addHeadStyles(e.data.css);
            this.themeSize = e.data.themeSize;
        }

        if(e.data.widget) {
            this.widgetName = e.data.widget;
        }
    }

    addHeadStyles(css: string) {
        const head = document.getElementsByTagName('head')[0];
        const style = document.createElement('style');
        const DYNAMIC_STYLES_ID = 'dynamic-styles';

        const dynamicStylesElement = document.getElementById(DYNAMIC_STYLES_ID);

        if(dynamicStylesElement) {
            dynamicStylesElement.parentNode.removeChild(dynamicStylesElement);
        }

        style.type = 'text/css';
        style.id = DYNAMIC_STYLES_ID;

        css = css
            .replace(/url\(icons\/dxicons/gi, 'url(content/css/icons/dxicons')
            .replace(/url\(fonts\/Roboto/gi, 'url(content/css/fonts/Roboto');

        style.appendChild(document.createTextNode(css));
        head.appendChild(style);

        this.isStylesReady = true;
    }

    ngOnInit() {
        const messageListener = this.receiveMessage.bind(this);
        window.removeEventListener('message', messageListener);
        window.addEventListener('message', messageListener, false);
        window.parent.postMessage({ hideLoading: true }, window.parent.location.href);
    }
}
