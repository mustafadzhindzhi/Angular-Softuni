import { Observable,interval, map, tap } from 'rxjs';

//PROMISE
// - promises are not lazy, code invokes
// - can not be canceled
const p = new Promise((resolve, reject) => {
    // console.log('promise involked');
  
    setTimeout(() => {
      resolve(111)
      // reject('Why not?')
    }, 30000);
  });
  
  p.then((data) => {
    console.log('from propmise', data);
  }).then().then().catch(err => console.log('Error:', err));
  
  //way 2
  Promise.resolve(112).then(data => data * 10).then(x => console.log('from promise 2:', x));
  
  //sync analogy
  [1].map((x) => x * 2);
  
  //Obserbables
  //sync analogy
  [1, 2, 3, 4].map((x) => x * 2);
  
  //async exmaple
  
  // const  o = new Observable((observer) => {
  //   observer.next(200);
  //   observer.next(201);
  //   observer.next(202);
  // });
  
  // o.subscribe ((data) => {
  //   console.log('from observable', data);
  // });
  
  // const interval = (intervalValue: number) => {
  //   const o = new Observable<number>((observer) => {
  //     console.log('from OBSERVER!!!');
      
  //     let counter = 0
  
  //     const timer = setInterval(() => {
  
  //       observer.next(counter++)
  //     }, intervalValue)
  
  //     return () => {
  //       //clear data on destroy
  //       clearInterval(timer)
  //     }
  //   });
  
  //   return o
  // }
  
  const stream$ = interval(2000)
  .pipe(map(x => x * 3))
  .pipe(map((x) => x * 10))
  .pipe(tap((x) => console.log(x + ' test 123')))
  
  // stream$.subscribe(data => console.log(data))
  setTimeout(() => {
    stream$.subscribe({
      next: (data) => console.log(data),
      error: (error) => console.log('error:', error),
      complete: () => console.log('the Stream has completed'),
    })
  }, 3000);
  