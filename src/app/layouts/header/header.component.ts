import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import * as themes from 'devextreme-themebuilder/modules/themes';
import DataSource from 'devextreme/data/data_source';
import { confirm } from 'devextreme/ui/dialog';
import { MetadataRepositoryService } from '../../meta-repository.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

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

    constructor(private metadataService: MetadataRepositoryService, private route: Router) { }

    themeChanged(e) {
        if(e.component.canceled) {
            e.component.canceled = false;
            return;
        }
        const newTheme = themes.filter(i => i.themeId === e.value);

        confirm('Are you sure you want to change the base theme? All changes will be lost.', 'Theme Builder').then(confirmed => {
            if(confirmed && newTheme.length) {
                const theme = newTheme[0].name;
                const colorScheme = newTheme[0].colorScheme;
                const url = this.route.url;
                const widget = url.substring(url.lastIndexOf('/') + 1);
                this.route.navigate(['advanced', theme, colorScheme, widget]);
            } else {
                this.currentThemeId = e.previousValue;
                e.component.canceled = true;
            }
        });
    }

    ngOnInit() {
        this.switcherData  = new DataSource({
            store: themes.filter(theme => theme.group !== 'Mobile'),
            key: 'themeId',
            group: 'group'
        });

        this.subscription = this.metadataService.css.subscribe(() => {
            const currentTheme = themes.filter(i =>
                i.name === this.metadataService.theme.name &&
                i.colorScheme === this.metadataService.theme.colorScheme);

            if(currentTheme.length) {
                this.currentThemeId = currentTheme[0].themeId;
            }
        });
    }

    ngOnDestroy() {
        if(this.subscription)
            this.subscription.unsubscribe();
    }
}
