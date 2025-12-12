import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { BehaviorSubject, Subscription } from 'rxjs';
import { LoadingService } from '../loading.service';
import { MetadataRepositoryService } from '../meta-repository.service';

@Component({
    selector: 'app-iframe',
    templateUrl: './iframe.component.html',
    styleUrls: ['./iframe.component.css'],
    standalone: false
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

    receiveMessage(e): void {
        if(e.data.widget) {
            this.router.navigate(['/advanced', this.metadataService.theme.name, this.metadataService.theme.colorScheme, e.data.widget]);
        }

        if(e.data.hideLoading) {
            this.onIframeLoad();
            this.loading.hide();
        }
    }

    onIframeLoad(): void {
        const frameWindow = this.iframe.nativeElement.contentWindow;

        // frameWindow can be null if iframe reloaded (wizard -> preview navigation)
        if(frameWindow === null) return;

        if(this.cssSubscription) this.cssSubscription.unsubscribe();
        this.cssSubscription = this.metadataService.css.subscribe((css) => {
            const theme = this.metadataService.theme;
            const themeSize = theme.colorScheme.includes('compact') ? 'compact' : 'normal';
            frameWindow.postMessage({
                css,
                themeSize,
                widget: this.widgetName.getValue()
            }, this.url);
        });

        if(this.widgetSubscription) this.widgetSubscription.unsubscribe();
        this.widgetSubscription = this.widgetName.subscribe((widget) => {
            frameWindow.postMessage({ widget }, this.url);
        });
    }

    ngOnDestroy(): void {
        if(this.cssSubscription) this.cssSubscription.unsubscribe();
        if(this.widgetSubscription) this.widgetSubscription.unsubscribe();
    }

    ngOnInit(): void {
        window.addEventListener('message', this.receiveMessage.bind(this), false);
    }
}
