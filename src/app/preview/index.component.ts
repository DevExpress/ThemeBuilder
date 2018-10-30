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

    constructor(private router: Router) {
       this.viewName = this.router.url.split('/')[1];
    }

    receiveMessage(e) {
        if(e.data.css) {
            this.addHeadStyles(e.data.css);
        }
    }

    addHeadStyles(css: string) {
        const head = document.getElementsByTagName('head')[0];
        const style = document.createElement('style');
        const DYNAMIC_STYLES_ID = 'dynamic-styles';

        if (document.getElementById(DYNAMIC_STYLES_ID))
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

    ngOnInit() {
        window.addEventListener('message', this.receiveMessage.bind(this), false);
    }
}
