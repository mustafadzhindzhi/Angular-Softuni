import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';
import { UserService } from './user.service';
import { User } from './types/user';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent {
  title = 'my-playground';
  appUsers: User[] = [];
  
  constructor (private userService: UserService) {
    this.appUsers = this.userService.users;
  }

  setUsers(inputName: HTMLInputElement, inputAge: HTMLInputElement) {
    //Validation of inputs?? Transformation of the input
    this.userService.addUser(inputName, inputAge);
    //Add Additional Functionality
  }
}
