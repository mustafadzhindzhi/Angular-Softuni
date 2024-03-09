import { Component, OnDestroy, OnInit, Input, Output, EventEmitter } from '@angular/core';

const IMG_URL = 'https://cdn.pixabay.com/photo/2016/02/10/16/37/cat-1192026_640.jpg'
@Component({
  selector: 'app-playground',
  templateUrl: './playground.component.html',
  styleUrls: ['./playground.component.css']
})
export class PlaygroundComponent implements OnInit, OnDestroy {
  @Input('color') colorValue = 'white'
  @Output() onTestOutput = new EventEmitter<string>();

  isToggle = false;
  greenBackground = 'background-green'
  imgUrl = IMG_URL;

  ngOnInit() {
    console.log('Component Created!');
  }

  ngAfterViewInit () {
    console.log('After Init!');
  }

  ngOnDestroy() {
    //clean up of stuff!
    console.log('On Destroy');
  }

  ngDoCheck() {
    if(this.isToggle)
    console.log({isToggle: this.isToggle});
    
  }

  handleClick(event: Event) {
    console.log('clicked', event);
    this.isToggle = !this.isToggle
    console.log(this.isToggle);
  }

  handleInput(usernameInput: HTMLInputElement) {
    console.log('username :', usernameInput, "value:", usernameInput.value);
    console.log(this.colorValue);

    this.onTestOutput.emit(usernameInput?.value || ''); //we call it with emit
  }
}
