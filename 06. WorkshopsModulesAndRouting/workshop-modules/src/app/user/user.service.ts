import { Injectable } from '@angular/core';
import { UserForAuth } from '../types/user.js';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  user: UserForAuth | undefined;
  USER_KEY = '[user]';

  get isLogged(): boolean {
    return !!this.user;
  }

  constructor() {
    try {
      const lsUser = localStorage.getItem(this.USER_KEY) || '';
      this.user = JSON.parse(lsUser);
    } catch (err) {
      this.user = undefined;
    }
  }

  login() {
    this.user = {
      firstName: 'Petko',
      email: 'petkoivanov@gmail.com',
      password: '123456',
      id: '5fa64c1f2183ce1728ff3723',
      phoneNumber: '123-123-123'
    };

    localStorage.setItem(this.USER_KEY, JSON.stringify(this.user));
  }

  logout() {
    this.user = undefined;
    localStorage.removeItem(this.USER_KEY)
  }
}
