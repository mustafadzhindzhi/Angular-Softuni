import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

  //Standart console log
  console.log('123');
  
  //Monkey-patched console log
  const originalConsoleLog = console.log; //create a copy
  console.log = (...args) => {
    originalConsoleLog(...args); //invokes the original copy

    //any other logic 
    console.warn('Notify Angular for that this method happend');

    //Notify Angular
  };

  console.log('345');
  
  
  
