import {Component, Input, OnDestroy, OnInit, Pipe, PipeTransform} from '@angular/core';
import { Router } from '@angular/router';
import DataSource from 'devextreme/data/data_source';
import { confirm } from 'devextreme/ui/dialog';
import { Subscription } from 'rxjs';
import { MetadataRepositoryService } from '../../meta-repository.service';

@Pipe({
    name: 'includes'
})
export class IncludesPipe implements PipeTransform {
    transform(value: string, str: string): boolean {
        return value.toLowerCase().includes(str.toLowerCase());
    }
}

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css'],
    providers: [ IncludesPipe ]
})
export class HeaderComponent implements OnInit, OnDestroy {
    @Input() switchEnabled: boolean;
    switcherData: DataSource;
    subscription: Subscription;
    currentThemeId: number;

    constructor(private metadataService: MetadataRepositoryService, private route: Router) {}

    themeChanged(e): void {
        if(e.component.canceled) {
            e.component.canceled = false;
            return;
        }

        // eslint-disable-next-line @typescript-eslint/no-floating-promises
        this.metadataService.getThemes().then((themes) => {
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
        this.metadataService.getThemes().then((themes) => {
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
