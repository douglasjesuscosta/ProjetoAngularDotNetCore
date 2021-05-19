import { ViewChild } from '@angular/core'
import { ElementRef } from '@angular/core'
import { Component } from '@angular/core'
import { NgbModal } from '@ng-bootstrap/ng-bootstrap'

@Component({
    selector: 'app-messages',
    templateUrl: './messages.component.html',
    styleUrls: ['./messages.component.css'],
})
export class MessagesComponent {
    @ViewChild('modal', { static: true }) modal: ElementRef

    constructor(private modalService: NgbModal) {}

    /**
     * Method to open success modal.
     */
    private openSuccessModal() {
        this.modalService.open(this.modal, { ariaLabelledBy: 'modal-basic-title' }).result.then(
            (result) => {
                this.router.navigate([`users/`])
            },
            (reason) => {
                this.router.navigate([`users/`])
            }
        )
    }
}
