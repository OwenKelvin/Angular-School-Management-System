import 'hammerjs';
import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import { TOGGLE_DIALOGUE } from './app/store/reducers';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => {
    this.store.dispatch({
      type: TOGGLE_DIALOGUE,
      payload: 'Unable to bootstrap the application'
    });
  });
