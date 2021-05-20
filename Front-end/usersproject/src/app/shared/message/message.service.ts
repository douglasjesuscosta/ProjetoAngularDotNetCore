import { Injectable, EventEmitter } from '@angular/core'
import { Observable } from 'rxjs'

import { Message } from './message-models/message.model'

/**
 * Class responsável pelo controle do componente de 'Message'.
 *
 */
@Injectable()
export class MessageService {
    public displayConfirmMessageEvent: EventEmitter<Message>
    public displayOkMessageEvent: EventEmitter<Message>

    /**
     * Construtor da classe.
     */
    constructor() {
        this.displayOkMessageEvent = new EventEmitter<Message>()
        this.displayConfirmMessageEvent = new EventEmitter<Message>()
    }

    public displayOkMessage(title: string, description: string, status: number, onOkPress) {
        let message = new Message(MessageEnum.SUCCESS_MESSAGE, title, description, status, onOkPress, null, null)
        this.displayOkMessageEvent.emit(message)
    }

    public displayConfirmationMessage(title: string, description: string, status: number,, onYesPressed: any, onNoPressed): any {
        let message = new Message(MessageEnum.CONFIRM_MESSAGE, title, description, status, null, onYesPressed, onNoPressed)
        this.displayConfirmMessageEvent.emit(message)
    }
}
