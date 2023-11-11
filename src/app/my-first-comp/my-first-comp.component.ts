import { Component, inject } from '@angular/core';
import { MyFirstService } from '../services/my-first.service';

@Component({
  selector: 'app-my-first-comp',
  templateUrl: './my-first-comp.component.html',
  styleUrls: ['./my-first-comp.component.css']
})
export class MyFirstCompComponent { 
 name: string = '';
email: string = '';
message: string = '';
isSumbitted: boolean =false;
messages: Array<any> =[];
 
  
  constructor(
  private service:MyFirstService 
){
  this.messages = this.service.getAllMessage();
  this.isSumbitted = this.messages.length > 0;
}
  
onSumbit():void{
  this.isSumbitted = true;
  this.service.insert({
    'name': this.name,
    'email': this.email,
    "messege" : this.message 
    
  });
console.log(this.messages);
}
deleteMessage(index: number) : void {
  this.service.deleteMessage(index  ); 
  
}
}

