import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
title:string = "Navbar is here!";
messagePost:string = "hola";

childMessage : string = 'child';

outputMessage : string ="message with output";

@Input() fromParent:string;

@Output() MessageEvent = new EventEmitter<string>();

sendMessage(){
  this.MessageEvent.emit(this.outputMessage);
}

}
