import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';

import {AppModule} from './app/app.module';

/**
 * how to bootstrap the application
 * there are specific to bootstrap an application
 * - on the server
 * - on the client
 *  - by pre compilation (advanced topic)
 */

// platformBrowserDynamic is a function (not a decorator)

platformBrowserDynamic().bootstrapModule(AppModule);
