import { MessageService } from './message.service';
import { Component, Input, Output, EventEmitter } from '@angular/core';
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
    @Output() editClicked = new EventEmitter<string>();

    constructor(private messageService: MessageService) {}

    onEdit() {
        alert('it worked');
        this.editClicked.emit('A new value')
    }

    onDelete() {
        this.messageService.deleteMessage(this.message);
    }
}