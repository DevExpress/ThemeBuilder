import { Component, OnInit } from '@angular/core';
import { PreviewService } from './../preview.service';


@Component({
    selector: 'app-preview',
    templateUrl: './preview.component.html',
    styleUrls: ['./preview.component.css']
})
export class PreviewComponent implements OnInit {
    widgets: Array<any> = [];

    constructor(private previewService: PreviewService) { }

    receiveMessage(e) {
        if(e.data.css) {
            this.addHeadStyles(e.data.css);
        }
    }

    saveInstance(e) {
        this.widgets.push(e.component);
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
    }

    createPreviewContent() {
        this.previewService.getPreviewWidgets('datagrid')
            .then((result: any) => {
                for(let i = 0; i < result.widgets.length; i++) {
                    const widget = result.widgets[i];

                    if(this.widgets[0].NAME === widget.name) {
                        this.widgets[0].option(widget.options);
                    }
                }
            });
    }

    ngOnInit() {
        window.addEventListener('message', this.receiveMessage.bind(this), false);
        this.createPreviewContent();
    }
}
