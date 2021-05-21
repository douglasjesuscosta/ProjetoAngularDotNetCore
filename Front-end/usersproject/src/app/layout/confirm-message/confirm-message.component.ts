import { TranslatePipe } from '@ngx-translate/core'
import { NgbModal } from '@ng-bootstrap/ng-bootstrap'
import { ElementRef, ViewChild, Component, OnInit } from '@angular/core'

import { MessageService } from 'src/app/shared/message/message.service'
import { Message } from 'src/app/shared/message/message-models/message.model'

@Component({
    selector: 'confirm-message',
    templateUrl: './confirm-message.component.html',
    styleUrls: ['./confirm-message.component.css'],
})
export class ConfirmMessageComponent {
    public titleMessage: string
    public descriptionMessage: string

    @ViewChild('modalConfirmation', { static: true }) modalConfirmation: ElementRef

    constructor(private messageService: MessageService, private translatePipe: TranslatePipe, private modalService: NgbModal) {
        this.monitorShowConfirmationMessage()
    }

    private monitorShowConfirmationMessage() {
        this.messageService.displayConfirmMessageEvent.subscribe((message: Message) => {
            this.showConfirmationModal(message)
        })
    }
    /**
     * Method that opens and control the confirmation modal.
     *
     * @param user
     *
     */
    private showConfirmationModal(message: Message) {
        this.titleMessage = this.translatePipe.transform(message.title)
        this.descriptionMessage = this.translatePipe.transform(message.description)

        this.modalService.open(this.modalConfirmation, { ariaLabelledBy: 'modal-basic-title' }).result.then(
            (result) => {
                message.onYesPress()
            },
            (reason) => {
                message.onNoPress()
            }
        )
    }
}
