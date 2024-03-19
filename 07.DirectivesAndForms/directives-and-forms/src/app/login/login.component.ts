import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  @ViewChild('loginForm') form: NgForm | undefined;

  // Renders static component
  // ngOnInit() :void {

  // }

  // Render the final content + dynimic content
  // ngAfterViewInit(): void {

  // }

  formSubmitHandler () {
    if(!this.form) {
      return;
    }

    const form = this.form;

    console.log('Form is invalid!');
    
    if(form.invalid) {
      return;
    }

    console.log(form);

    //form value => ngModel on html
    const {email, password} = form.value;
    /**Two ways of reseting the data */
    // form.reset();

    form.setValue({email:'', password:''})
    
  }
}
