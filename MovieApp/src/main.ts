import './polyfills.ts';

//Supports other platforms
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { environment } from './environments/environment';
import { AppModule } from './app/app.module';

if (environment.production) {
  enableProdMode();
}

//Expects Root module. This will run the file as the Index of the page.
platformBrowserDynamic().bootstrapModule(AppModule);
