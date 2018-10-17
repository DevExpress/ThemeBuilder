import { Component, ViewChild, ElementRef, OnDestroy } from '@angular/core';
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { MetadataRepositoryService } from '../meta-repository.service';
import { Subscription, BehaviorSubject, Subject } from 'rxjs';

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
                this.widgetName.next(params['widget']);
                if(this.theme !== params['theme']) {
                    this.theme = params['theme'];
                    this.url = window.location.origin + '/preview/' + this.theme;
                    this.iframeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.url);
                }
            });
    }

    onIframeLoad() {
        if(this.cssSubscription)
            this.cssSubscription.unsubscribe();
        this.cssSubscription = this.metadataService.css.subscribe(css => {
            this.iframe.nativeElement.contentWindow.postMessage({ css: css }, this.url);
        });

        this.widgetSubscription = this.widgetName.subscribe(widget => {
            this.iframe.nativeElement.contentWindow.postMessage({ widget: widget }, this.url);
        });
    }

    ngOnDestroy() {
        if(this.cssSubscription)
            this.cssSubscription.unsubscribe();

        this.widgetSubscription.unsubscribe();
    }

}
