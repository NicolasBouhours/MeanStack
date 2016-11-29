import { Component, Input } from '@angular/core';
import { Message } from './message.models';

@Component({
    selector: 'app-message-list',
    template: `
        <div class="col-md-8 col-md-offset-2">
            <app-message *ngFor="let message of messages" [message]="message" (editClicked)="message.content = $event"></app-message>
        </div>    
    `
})
export class MessageListComponent {
    @Input() messages: Message[];
}