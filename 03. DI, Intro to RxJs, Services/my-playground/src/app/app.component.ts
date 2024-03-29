import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { UserService } from './user.service';
import { JsonPlaceHolder, User } from './types/user';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [UserService],
})

export class AppComponent implements OnInit {
  title = 'my-playground';
  appUsers: JsonPlaceHolder[] = [];
  isLoading = true;

  constructor(private userService: UserService) {
    this.appUsers = this.userService.users;
  }

  ngOnInit(): void {
    // this.userService.getUsers().then((users) => {
    //   console.log('users data', users);
    //   this.appUsers = users;
    //   setTimeout(() => {
    //     this.isLoading = false
    //   }, 3000);
    // })
    this.userService.getUsers().subscribe((users) =>{
          console.log('users data', users);
          this.appUsers = users;
          setTimeout(() => {
            this.isLoading = false
          }, 3000);
    });
  }

  setUsers(inputName: HTMLInputElement, inputAge: HTMLInputElement) {
    //Validation of inputs?? Transformation of the input
    this.userService.addUser(inputName, inputAge);
    //Add Additional Functionality
  }
}
