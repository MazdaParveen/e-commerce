import { Injectable } from '@angular/core';

@Injectable({
 
  providedIn: 'root'})

export class MyFirstService {

  messages: Array<any> =[];
  getAllMessages: any;

  constructor() { 
    this.init();
  }
   init():void{
    this.insert({
      name: 'mazda',
      email: 'mazda@gmail.com',
      messege: 'hello mazda'
    });
   

   this.insert({
    name: 'prity',
    email: 'prity@gmail.com',
    messege: 'hello hello mazda'
  });
 
 this.insert({
  name: 'mazu',
  email: 'mazu@gmail.com',
  messege: 'hello mazda hi'
});
   }

  insert( message: {name: string, email:string, messege:string}): void{
   this.messages.push(message);
  }
  getAllMessage():any[]{
    return this.messages;
  }
  deleteMessage(index: number): void{
    this.messages.splice(index,  1  ); 
  }
}
