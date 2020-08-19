import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import DataSource from 'devextreme/data/data_source';
import { confirm } from 'devextreme/ui/dialog';
import { Subscription } from 'rxjs';
import { MetadataRepositoryService } from '../../meta-repository.service';
import { ThemeConfig } from '../../types/theme';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {
    @Input() switchEnabled: boolean;
    switcherData: DataSource;
    subscription: Subscription;
    currentThemeId: number;

    private themeConfigs: ThemeConfig[];

    constructor(private metadataService: MetadataRepositoryService, private route: Router) {}

    private getThemesConfig(): Promise<ThemeConfig[]> {
        if(this.themeConfigs) {
            return Promise.resolve(this.themeConfigs);
        }

        return this.metadataService.getThemes().then((themes) => {
            if(!this.themeConfigs) this.themeConfigs = themes;
            return themes;
        });
    }

    themeChanged(e): void {
        if(e.component.canceled) {
            e.component.canceled = false;
            return;
        }

        // eslint-disable-next-line @typescript-eslint/no-floating-promises
        this.getThemesConfig().then((themes) => {
            const newTheme = themes.filter((i) => i.themeId === e.value);

            // eslint-disable-next-line @typescript-eslint/no-floating-promises
            confirm('Are you sure you want to change the base theme? All changes will be lost.', 'ThemeBuilder').then((confirmed) => {
                if(confirmed && newTheme.length) {
                    const theme = newTheme[0].name;
                    const colorScheme = newTheme[0].colorScheme;
                    const urlParts = this.route.url.split('/');
                    const routeWidgetPosition = 4;
                    const widget = urlParts[routeWidgetPosition];
                    this.route.navigate(['advanced', theme, colorScheme, widget]);
                } else {
                    this.currentThemeId = e.previousValue;
                    e.component.canceled = true;
                }
            });
        });

    }

    ngOnInit(): void {
        // eslint-disable-next-line @typescript-eslint/no-floating-promises
        this.getThemesConfig().then((themes) => {
            this.switcherData = new DataSource({
                store: themes,
                key: 'themeId',
                group: 'group'
            });

            this.subscription = this.metadataService.css.subscribe(() => {
                const currentTheme = themes.filter((i) => i.name === this.metadataService.theme.name && i.colorScheme === this.metadataService.theme.colorScheme);

                if(currentTheme.length) {
                    this.currentThemeId = currentTheme[0].themeId;
                }
            });
        });
    }

    ngOnDestroy(): void {
        if(this.subscription) this.subscription.unsubscribe();
    }
}
