import { Injectable, OnDestroy } from '@angular/core';
import { JsonPlaceHolder, User } from './types/user.js';
import { Observable,interval, map, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable()

export class UserService implements OnDestroy {
  URL = 'https://jsonplaceholder.typicode.com/users'

  users: JsonPlaceHolder[] = []

  constructor(private http: HttpClient) {}

  ngOnDestroy(): void {
    //clear terminal, detatch from events
  }

  getUsers() {
    return this.http.get<JsonPlaceHolder[]>(this.URL);
  }

  // getUsers(): Promise<JsonPlaceHolder[]> {
  //   return fetch(this.URL)
  //     .then(res => res.json())
  //     .then(data => data as JsonPlaceHolder[]);
  // }

  addUser(inputName: HTMLInputElement, inputEmail: HTMLInputElement) {
    const user = {
      name: inputName.value,
      email: inputEmail.value
    } as JsonPlaceHolder
    this.users.push(user);
    // this.users = [...this.users, user]    

    inputName.value = '';
    inputEmail.value = ''
  }
}








