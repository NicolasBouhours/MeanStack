import { Component } from '@angular/core';

@Component({
    selector: 'app-message',
    templateUrl: './message.component.html'
})
export class MessageComponent {
    message = {
        content: 'A message',
        author: 'Max',
    };
}