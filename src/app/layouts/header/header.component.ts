import { Component, Input, OnInit, Pipe, PipeTransform, computed, linkedSignal, signal } from '@angular/core';
import { Router } from '@angular/router';
import DataSource from 'devextreme/data/data_source';
import { confirm } from 'devextreme/ui/dialog';
import { MetadataRepositoryService } from '../../meta-repository.service';
import { ThemeConfig } from '../../types/theme';

@Pipe({
    name: 'includes',
    standalone: false
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
    providers: [IncludesPipe],
    standalone: false
})
export class HeaderComponent implements OnInit {
    @Input() switchEnabled: boolean;

    private readonly themes = signal<ThemeConfig[]>([]);

    switcherData = computed(() => {
        const themes = this.themes();
        return themes.length ? new DataSource({ store: themes, key: 'themeId', group: 'group' }) : null;
    });

    // Re-synced with the current theme after each build; also written by the select box and on cancel
    currentThemeId = linkedSignal<{ themes: ThemeConfig[]; css: string }, number>({
        source: () => ({ themes: this.themes(), css: this.metadataService.css() }),
        computation: ({ themes }, previous) => {
            const { name, colorScheme } = this.metadataService.theme;
            const currentTheme = themes.find((i) => i.name === name && i.colorScheme === colorScheme);
            return currentTheme ? currentTheme.themeId : previous?.value;
        }
    });

    getDisplayText = (item: { name: string; text: string } | null): string => {
        if(!item) return '';
        const name = item.name.toLowerCase().replace(/^\w/, (c) => c.toUpperCase());
        return `${name} ${item.text}`;
    };

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
                    this.currentThemeId.set(e.previousValue);
                    e.component.canceled = true;
                }
            });
        });
    }

    ngOnInit(): void {
        // eslint-disable-next-line @typescript-eslint/no-floating-promises
        this.metadataService.getThemes().then((themes) => this.themes.set(themes));
    }
}
