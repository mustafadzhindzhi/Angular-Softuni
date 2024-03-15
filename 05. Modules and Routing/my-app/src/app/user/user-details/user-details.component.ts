import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit{
  constructor (private userService: UserService, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(value => {
      console.log(this.activatedRoute.snapshot.data['user']);
    
      // const id = value['id'];
      // this.userService.getSingleUser(id).subscribe(user => {
      //   console.log(user);
      // }) 
    })
  }
}
