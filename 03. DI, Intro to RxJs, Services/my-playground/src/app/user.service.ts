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
