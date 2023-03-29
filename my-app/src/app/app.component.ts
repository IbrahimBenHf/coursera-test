import { Component,ViewChild, AfterViewInit } from '@angular/core';
import { NavbarComponent } from './navbar/navbar.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  title = 'my-app';
  pMessage:string = 'Message from dad';

  cMessage :string;
  outputM :string;

  username : string;

  @ViewChild(NavbarComponent) childComp;

  constructor(){

  }

  ngAfterViewInit(): void {
    console.log(this.childComp)
    this.cMessage = this.childComp.childMessage;
  }

  recieveMessage($event){
    this.outputM = $event;
  }

  onKeyup(){
    console.log(this.username)
  }
}
