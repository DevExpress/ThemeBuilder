import { Component, Input, ViewChild, ElementRef, AfterViewInit, OnDestroy, OnInit } from '@angular/core';
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { MetadataRepositoryService } from '../meta-repository.service';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-iframe',
    templateUrl: './iframe.component.html',
    styleUrls: ['./iframe.component.css']
})
export class IframeComponent implements OnDestroy {

    @Input() iframeUrl: SafeResourceUrl;
    @ViewChild('iframe') iframe: ElementRef;

    url: string;
    subscription: Subscription;
    theme: string;
    colorScheme: string;

    constructor(
        private route: ActivatedRoute,
        private sanitizer: DomSanitizer,
        private metadataService: MetadataRepositoryService) {
            this.route.params.subscribe((params) => {
                if(this.theme !== params['theme'] && this.colorScheme !== params['color-scheme']) {
                    this.theme = params['theme'];
                    this.colorScheme = params['color-scheme'];
                    this.url = window.location.origin + '/preview/' + this.theme + '/' + this.colorScheme;
                    this.iframeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.url);
                }
            });
    }

    onIframeLoad() {
        if(this.subscription)
            this.subscription.unsubscribe();
        this.subscription = this.metadataService.css.subscribe(css => {
            this.iframe.nativeElement.contentWindow.postMessage({ css: css }, this.url);
        });
    }

    ngOnDestroy() {
        if(this.subscription)
            this.subscription.unsubscribe();
    }

}
