import { Component, OnDestroy, OnInit, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { AppLayoutComponent } from '../layouts/app-layout/app-layout.component';
import { MetadataRepositoryService } from '../meta-repository.service';
import { ThemeConfig } from '../types/theme';

@Component({
    templateUrl: './master.component.html',
    styleUrls: ['./master.component.css'],
    standalone: false
})

export class MasterComponent implements OnInit, OnDestroy {
    showIframe = signal(false);
    themeName = signal('');
    colorScheme = signal('');
    isThemeCompact = false;
    themeSize = signal('normal');
    themesList = signal<ThemeConfig[]>([]);
    subscription: Subscription;

    constructor(
        private route: ActivatedRoute,
        private appLayoutComponent: AppLayoutComponent,
        private metadataService: MetadataRepositoryService
    ) {
        this.route.params.subscribe((params) => {
            this.themeName.set(params['theme'] || '');
            this.colorScheme.set(params['color-scheme'] || '');
            this.isThemeCompact = this.colorScheme().includes('compact');
            this.themeSize.set(this.isThemeCompact ? 'compact' : 'normal');

            this.changeContent();
        });
    }

    changeContent(): void {
        // eslint-disable-next-line @typescript-eslint/no-floating-promises
        this.metadataService.getThemes().then((dataThemes: ThemeConfig[]) => {
            const themes = dataThemes.filter((t) => t.name === this.themeName());

            const themesBySize = themes.filter(
                (t) => this.isThemeCompact ?
                    t.group.includes('Compact') :
                    !t.group.includes('Compact'));
            if(this.themeName() === 'material') {
                // getting sorted list by background color
                this.themesList.set([
                    ...themesBySize.filter((t) => t.text.includes('Light')),
                    ...themesBySize.filter((t) => t.text.includes('Dark'))
                ]);
            } else {
                this.themesList.set(themesBySize);
            }
        });
    }

    ngOnInit(): void {
        this.subscription = this.appLayoutComponent.animationDone.subscribe((value) => {
            this.showIframe.set(value);
        });
    }

    ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }
}
