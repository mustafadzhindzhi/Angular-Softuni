import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { Observable, map } from 'rxjs';


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));


  //REFRESHER
  // const p = new Promise((resolve, reject) => {
  //   resolve(100);

  //   //reject -> catch
  // })

  // p.then(console.log)

  // const observable$ = new Observable<number>((observer) => {
  //   observer.next(101);
  //   observer.next(102);
  //   observer.next(103);

  //   // observer.error(new Error('Something went wrong!'));
  //   observer.complete();

  //   return () => {
  //     //cleanup

  //   }
  // })

  // observable$.pipe(map((n) => n*10)).subscribe({
  //   next: console.log,
  //   error: (err) => console.log('Error from subscribe'),
  //   complete: () => console.log('Completed')
    
    
  // })

  //RXJS
  

