import { Injectable, EventEmitter } from '@angular/core'

import { Message } from './message-models/message.model'

/**
 * Class responsável pelo controle do componente de 'Message'.
 *
 */
@Injectable()
export class MessageService {
    public displayMessageEvent: EventEmitter<Message>

    /**
     * Construtor da classe.
     */
    constructor() {
        this.displayMessageEvent = new EventEmitter<Message>()
    }

    public displayErrorMessage(onOkPress) {}

    public displaySuccessMessage(title?: String, description?: String, status?: Number, onOkPress) {
        let message = new Message(MessageEnum.SUCCESS_MESSAGE)
        this.displayMessageEvent.emit(message)
    }

    public displayConfirmationMessage(onYesPressed, onNoPressed) {}
}
