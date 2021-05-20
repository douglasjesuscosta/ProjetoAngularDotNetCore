import { NgbModal } from '@ng-bootstrap/ng-bootstrap'
import { Component, ViewChild, ElementRef } from '@angular/core'

import { MessageService } from 'src/app/shared/message/message.service'
import { Message } from 'src/app/shared/message/message-models/message.model'

@Component({
    selector: 'simple-message',
    templateUrl: './simple-message.component.html',
    styleUrls: ['./simple-message.component.css'],
})
export class SimpleMessageComponent {
    @ViewChild('simpleModal', { static: true }) modal: ElementRef

    public titleMessage: string
    public descriptionMessage: string

    constructor(private modalService: NgbModal, private messageService: MessageService) {
        this.monitorShowOkMessage()
    }

    /**
     * Method to open simple modal with "ok" button.
     */
    private monitorShowOkMessage() {
        this.messageService.displayOkMessageEvent.subscribe((message: Message) => {
            this.showOkMessageModal(message)
        })
    }

    // private monitorShowConfirmationMessage() {
    //     this.messageService.displayOkMessageEvent.subscribe((message: Message) => {
    //         this.showConfirmationModal(message)
    //     })
    // }

    private showOkMessageModal(message: Message) {
        this.descriptionMessage = message.description
        this.titleMessage = message.title

        this.modalService.open(this.modal, { ariaLabelledBy: 'modal-basic-title' }).result.then(
            (result) => {
                message.onOkPress()
            },
            (reason) => {
                message.onOkPress()
            }
        )
    }
}
