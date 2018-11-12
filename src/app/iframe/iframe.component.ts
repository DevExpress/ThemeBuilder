import { Component, ViewChild, ElementRef, OnDestroy } from '@angular/core';
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { MetadataRepositoryService } from '../meta-repository.service';
import { Subscription, BehaviorSubject } from 'rxjs';

@Component({
    selector: 'app-iframe',
    templateUrl: './iframe.component.html',
    styleUrls: ['./iframe.component.css']
})
export class IframeComponent implements OnDestroy {
    @ViewChild('iframe') iframe: ElementRef;

    url: string;
    iframeUrl: SafeResourceUrl;
    cssSubscription: Subscription;
    widgetSubscription: Subscription;
    theme: string;
    widgetName = new BehaviorSubject<string>('');

    constructor(
        private route: ActivatedRoute,
        private sanitizer: DomSanitizer,
        private metadataService: MetadataRepositoryService) {
            this.route.params.subscribe((params) => {
                if(this.widgetName.getValue() !== params['widget']) {
                    this.widgetName.next(params['widget']);
                }
                if(this.theme !== params['theme']) {
                    this.theme = params['theme'];
                    this.url = document.getElementsByTagName('base')[0].href + '/' + (params['widget'] ? 'preview' : 'wizard') + '/' + this.theme;
                    this.iframeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.url);
                }
            });
    }

    onIframeLoad() {
        if(this.cssSubscription)
            this.cssSubscription.unsubscribe();
        this.cssSubscription = this.metadataService.css.subscribe(css => {
            const theme = this.metadataService.theme;
            const themeSize = theme.name === 'generic' ? (theme.colorScheme.split('-')[1] || 'normal') : '';
            this.iframe.nativeElement.contentWindow.postMessage({
                css: css,
                themeSize: themeSize,
                widget: this.widgetName.getValue()
            }, this.url);
        });

        if(this.widgetSubscription)
            this.widgetSubscription.unsubscribe();
        this.widgetSubscription = this.widgetName.subscribe(widget => {
            this.iframe.nativeElement.contentWindow.postMessage({ widget: widget }, this.url);
        });
    }

    ngOnDestroy() {
        if(this.cssSubscription)
            this.cssSubscription.unsubscribe();

        if(this.widgetSubscription)
            this.widgetSubscription.unsubscribe();
    }
}
