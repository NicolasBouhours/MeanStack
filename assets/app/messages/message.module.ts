import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MessageService } from './message.service';

import { MessagesComponent } from './messages.component';
import { MessageComponent } from './message.component';
import { MessageListComponent } from './message-list.component';
import { MessageInputComponent } from './message-input.component';


@NgModule({
    declarations: [
        MessagesComponent,
        MessageComponent,
        MessageListComponent,
        MessageInputComponent,
    ],
    imports: [
        CommonModule, 
        FormsModule
    ],
    providers: [MessageService]
})
export class MessageModule {

}