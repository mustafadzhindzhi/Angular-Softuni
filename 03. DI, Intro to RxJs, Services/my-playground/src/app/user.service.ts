import { Injectable, OnDestroy } from '@angular/core';
import { User } from './types/user.js';

@Injectable()

export class UserService implements OnDestroy {

  users: User[] = [{ name: 'Pesho', age: 10 },
  { name: 'Pesho', age: 20 },
  { name: 'Pesho', age: 30 },
  { name: 'Pesho', age: 40 }]

  ngOnDestroy(): void {
    //clear terminal, detatch from events
  }

  addUser(inputName: HTMLInputElement, inputAge: HTMLInputElement) {
    const user: User = {
      name: inputName.value,
      age: Number(inputAge.value)
    }
    this.users.push(user);
    // this.users = [...this.users, user]    

    inputName.value = '';
    inputAge.value = ''
  }
}

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
[1,2,3,4].map((x) => x * 2);


