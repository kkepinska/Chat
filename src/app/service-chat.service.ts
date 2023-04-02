import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { io } from "socket.io-client";

@Injectable({
  providedIn: 'root'
})
export class ServiceChatService {

  public message$: BehaviorSubject<string> = new BehaviorSubject('');
  constructor() {}

  socket = io('http://localhost:8080');

  public sendMessage(message:string) {
    this.socket.emit('message', message);
  }

  public getNewMessage = () => {
    console.log("getting message");
    this.socket.on('message', (message:string) =>{
      console.log(`message ${message}`)
      this.message$.next(message);
    });
    
    return this.message$.asObservable();
  };

}
