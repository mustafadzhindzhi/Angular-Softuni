import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';
import { User } from './types/user.js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent {
  title = 'my-playground';
  users: User[] = [{ name: 'Pesho', age: 10 },
  { name: 'Pesho', age: 20 },
  { name: 'Pesho', age: 30 },
  { name: 'Pesho', age: 40 }]

  addUser(inputName: HTMLInputElement, inputAge: HTMLInputElement) {
    //
    const user: User = {
      name: inputName.value,
      age: Number(inputAge.value)
    }
    this.users.push(user);
    // this.users = [...this.users, user]    

    inputName.value = '';
    inputAge.value = ''
  }

  // constructor(private cd: ChangeDetectorRef) {
  //   setTimeout(() => {
  //     this.title = 'Changed from Detector'
  //     this.cd.detectChanges();
  //   }, 3000);
  // }
}
