import {
    enableProdMode,
    isDevMode,
    provideCheckNoChangesConfig
} from '@angular/core';
import { platformBrowser } from '@angular/platform-browser';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if(environment.production) {
    enableProdMode();
}

platformBrowser().bootstrapModule(
    AppModule, {
        applicationProviders: isDevMode()
            ? [provideCheckNoChangesConfig({ exhaustive: true, interval: 1000 })]
            : []
    })
    .catch((err) => console.log(err));
