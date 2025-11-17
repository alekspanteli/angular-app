import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { IMAGE_LOADER } from '@angular/common';
import { customCloudinaryLoader } from './custom-cloudinary-loader';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideRouter(routes),
    {
      provide: IMAGE_LOADER,
      useValue: customCloudinaryLoader,
    },
  ]
};
