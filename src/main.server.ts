import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { AppRoutingModule } from './app/app.routes';                    /*  './app/app.routes'; */






import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.config.server';


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
  const bootstrap = () => bootstrapApplication(AppComponent, AppRoutingModule);

  export default bootstrap;
   
  