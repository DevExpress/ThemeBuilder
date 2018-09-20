import { Component, Input, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-iframe',
    templateUrl: './iframe.component.html',
    styleUrls: ['./iframe.component.css']
})
export class IframeComponent implements AfterViewInit {
    url: string;
    viewInited: boolean;

    @Input() iframeData: any;
    @Input() iframeUrl: SafeResourceUrl;
    @ViewChild('iframe') iframe: ElementRef;

    constructor(
        private route: ActivatedRoute,
        private sanitizer: DomSanitizer) {

        this.route.params.subscribe((params) => {
            this.url = window.location.origin + '/preview/' + params['theme'] + '/' + params['color-scheme'];
            this.iframeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.url);
        });
    }

    onIframeLoad() {
        if(this.viewInited) {
            this.iframe.nativeElement.contentWindow.postMessage({ cssData: this.iframeData }, this.url);
        }
    }

    ngAfterViewInit() {
        this.viewInited = true;
    }

}
