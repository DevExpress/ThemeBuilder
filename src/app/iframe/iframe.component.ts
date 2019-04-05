import { Component, ViewChild, ElementRef, OnDestroy, OnInit } from '@angular/core';
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { MetadataRepositoryService } from '../meta-repository.service';
import { Subscription, BehaviorSubject } from 'rxjs';
import { LoadingService } from '../loading.service';

@Component({
    selector: 'app-iframe',
    templateUrl: './iframe.component.html',
    styleUrls: ['./iframe.component.css']
})
export class IframeComponent implements OnDestroy, OnInit {
    @ViewChild('iframe') iframe: ElementRef;

    url: string;
    iframeUrl: SafeResourceUrl;
    cssSubscription: Subscription;
    widgetSubscription: Subscription;
    theme: string;
    widgetName = new BehaviorSubject<string>('');

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private sanitizer: DomSanitizer,
        private metadataService: MetadataRepositoryService,
        private loading: LoadingService) {
            this.route.params.subscribe((params) => {
                const widget = params['widget'] || params['group'];
                if(this.widgetName.getValue() !== widget) {
                    this.widgetName.next(widget);
                }
                if(this.theme !== params['theme']) {
                    this.loading.show();
                    this.theme = params['theme'];
                    this.url = document.getElementsByTagName('base')[0].href + (widget ? 'preview' : 'wizard') + '/' + this.theme;
                    this.iframeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.url);
                }
            });
    }

    receiveMessage(e) {
        if(e.data.widget)
            this.router.navigate(['/advanced', this.metadataService.theme.name, this.metadataService.theme.colorScheme, e.data.widget]);

        if(e.data.hideLoading) {
            this.loading.hide();
        }
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

    ngOnInit() {
        window.addEventListener('message', this.receiveMessage.bind(this), false);
    }
}
