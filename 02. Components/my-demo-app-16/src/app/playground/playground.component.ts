import { Component } from '@angular/core';

@Component({
  selector: 'app-playground',
  templateUrl: './playground.component.html',
  styleUrls: ['./playground.component.css']
})
export class PlaygroundComponent {
  isToggle = false;
  greenBackground = 'background-green'
  imgUrl = 'https://cdn.pixabay.com/photo/2016/02/10/16/37/cat-1192026_640.jpg'
  
  handleClick(event: Event) {
    console.log('clicked',event);
    this.isToggle = !this.isToggle

    console.log(this.isToggle);
  }

  handleInput(usernameInput:HTMLInputElement) {
    console.log('username :', usernameInput, "value:" ,usernameInput.value);
    
  }
}
