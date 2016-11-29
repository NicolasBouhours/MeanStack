import { Message } from './message.models';

export class MessageService {
    private messages: Message[] = [];

    getMessages() {
        return this.messages
    }

    addMessage(message: Message) {
        this.messages.push(message);
    }

    deleteMessage(message: Message) {
        this.messages.splice(this.messages.indexOf(message), 1);
    }
}