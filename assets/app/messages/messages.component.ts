import { Component } from '@angular/core';

@Component({
    selector: 'app-messages',
    template: `
        <div class="container">
            <div class="row">
                <app-message-input></app-message-input>
            </div>
            <hr>
            <div class="row">
                <app-message-list></app-message-list>
            </div>
        </div>   
    `
})
export class MessagesComponent {

}