import { Component } from '@angular/core';
import { ServiceChatService } from './service-chat.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  newMessage: string;
  messageList: string[] = [];

  constructor(private chatService: ServiceChatService){
    this.newMessage = "";
  }

  ngOnInit(){
    this.chatService.getNewMessage().subscribe((message: string) => {
      this.messageList.push(message);
    })
  }

  sendMessage() {
    this.chatService.sendMessage(this.newMessage);
    this.newMessage = '';
  }
}