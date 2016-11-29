import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Message } from './message.models';

@Component({
    selector: 'app-message',
    templateUrl: './message.component.html'
})
export class MessageComponent {
    @Input() message: Message;
    @Output() editClicked = new EventEmitter<string>();

    onClick() {
        alert('it worked');
        this.editClicked.emit('A new value')
    }
}