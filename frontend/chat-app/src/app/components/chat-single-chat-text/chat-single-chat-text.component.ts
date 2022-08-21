import { Component, Input, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';
import { IMessageToView } from 'src/app/interfaces/message.interface';
import { IUserToView } from 'src/app/interfaces/user.interface';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'chat-single-chat-text',
  templateUrl: './chat-single-chat-text.component.html',
  styleUrls: ['./chat-single-chat-text.component.scss'],
})
export class ChatSingleChatTextComponent implements OnInit {
  @Input() chat: IMessageToView;
  currentUser: IUserToView;
  isCurrentUser!: boolean;
  isMobile!: boolean;
  constructor(private platform: Platform, private authService: AuthService) {
    this.currentUser = this.authService.currentUser;
    this.isMobile = !this.platform.is('desktop');
  }
  ngOnInit(chat = this.chat) {
    this.isCurrentUser = chat?.user?.user_id === this.currentUser?.user_id;
  }
}
