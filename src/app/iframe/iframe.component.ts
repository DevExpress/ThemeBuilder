import {
    AfterViewInit,
    Component,
    ElementRef,
    ViewChild,
    HostListener,
    effect,
    signal,
    untracked
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoadingService } from '../loading.service';
import { MetadataRepositoryService } from '../meta-repository.service';

@Component({
    selector: 'app-iframe',
    templateUrl: './iframe.component.html',
    styleUrls: ['./iframe.component.css'],
    standalone: false
})
export class IframeComponent implements AfterViewInit {
    @ViewChild('iframe') iframe: ElementRef;

    url: string;
    theme: string;
    widgetName = signal<string>('');

    private readonly frameWindow = signal<Window | null>(null, { equal: () => false });

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private metadataService: MetadataRepositoryService,
        private loading: LoadingService) {
        this.route.params.subscribe((params) => {
            const widget = params['widget'] || params['group'];
            this.widgetName.set(widget);
            if(this.theme !== params['theme']) {
                this.loading.show();
                this.theme = params['theme'];
                this.url = document.getElementsByTagName('base')[0].href + (widget ? 'preview' : 'wizard') + '/' + this.theme + '/';
                if(this.iframe) {
                    this.iframe.nativeElement.src = this.url;
                }
            }
        });

        effect(() => {
            const css = this.metadataService.css();
            const frameWindow = this.frameWindow();
            if(!frameWindow) return;

            untracked(() => {
                const theme = this.metadataService.theme;
                const themeSize = theme.colorScheme.includes('compact') ? 'compact' : 'normal';
                frameWindow.postMessage({
                    css,
                    themeSize,
                    widget: this.widgetName()
                }, this.url);
            });
        });

        effect(() => {
            const widget = this.widgetName();
            const frameWindow = this.frameWindow();
            if(!frameWindow) return;

            untracked(() => frameWindow.postMessage({ widget }, this.url));
        });
    }

    ngAfterViewInit(): void {
        if(this.url) {
            this.iframe.nativeElement.src = this.url;
        }
    }

    @HostListener('window:message', ['$event'])
    receiveMessage(e: MessageEvent): void {
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

        this.frameWindow.set(frameWindow);
    }
}
