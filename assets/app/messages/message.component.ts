import { MessageService } from './message.service';
import { Component, Input } from '@angular/core';
import { Message } from './message.models';

@Component({
    selector: 'app-message',
    templateUrl: './message.component.html',
    styles: [`
        .author, .config {
            display: inline-block;
        }

        .config {
            float: right;
        }
    `]
})
export class MessageComponent {
    @Input() message: Message;

    constructor(private messageService: MessageService) {}

    onEdit() {
        this.messageService.editMessage(this.message);
    }

    onDelete() {
        this.messageService.deleteMessage(this.message)
            .subscribe(
                result => console.log(result)
        );
    }

    belongToUser() {
        return this.message.userId === localStorage.getItem('userId');
    }
}