import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { AsyncSubject, BehaviorSubject, Observable, ReplaySubject, Subject, map } from 'rxjs';


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

  //SUBJECTS
  // const subject$$ = new Subject();
  // subject$$.subscribe((data) => console.log('A:', data)); //A

  // subject$$.next(100); //A
 
  // subject$$.subscribe((data) => console.log('B:', data)) //B
  // subject$$.subscribe((data) => console.log('C:', data)) //C
  // subject$$.next(200) //A, B, C

  // setTimeout(() => {
  //   subject$$.subscribe((data) => console.log('D:', data))//D
  //   subject$$.next(300) //A, B, C, D
  // }, 2000);

  //BEHAVIOR SUBJECTS
  // const bSubject$$ = new BehaviorSubject(100);
  // bSubject$$.subscribe(data => console.log('Subscription 1:', data))

  // setTimeout(() => {
  //   bSubject$$.next(200)
  //   bSubject$$.next(300)
  //   bSubject$$.next(400)
  //   bSubject$$.next(500)
  //   bSubject$$.next(900)
  //   bSubject$$.subscribe(data => console.log('Subscription 2:', data))
  //   setTimeout(() => {
  //     bSubject$$.next(300)
  //     bSubject$$.subscribe(data => console.log('Subscription 3:', data))
  //   }, 2000);
  // }, 2000);

  //REPLAY SUBJECTS
  // const rSubject$$ = new ReplaySubject(5);
  // rSubject$$.subscribe(data => console.log(`Tsveti: ${data} minute`))

  // for (let i = 1; i <= 50; i++) {
  //   rSubject$$.next(i);
  // }

  // console.log('----------------');

  // rSubject$$.subscribe(data => console.log(`Desi: ${data} minute`))

  // console.log('----------------');

  // rSubject$$.subscribe(data => console.log(`Petyo: ${data} minute`))

  //ASYNC SUBJECT
  const asyncSubject$$ = new AsyncSubject();
  asyncSubject$$.next(1);
  asyncSubject$$.next(2);
  asyncSubject$$.next(3);
  asyncSubject$$.subscribe(data => console.log(`Subscribe1: ${data}`))

  asyncSubject$$.next(5);
  asyncSubject$$.subscribe(data => console.log(`Subscribe1: ${data}`))
  asyncSubject$$.complete() //always takes the last value


