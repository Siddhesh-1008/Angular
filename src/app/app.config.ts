import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideAuth0 } from '@auth0/auth0-angular';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }), 
    provideRouter(routes),
    provideAuth0({
      domain: 'dev-3nmxi335lsdgbvq5.us.auth0.com',
      clientId: 'LrtK8YJmOfAZcI7HRow9TiVha4DyerYE',
      authorizationParams: {
        redirect_uri: window.location.origin
      }
    }),

  ]
};
