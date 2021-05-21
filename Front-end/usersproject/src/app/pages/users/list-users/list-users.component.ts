import { Component, OnInit } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router'
import { TranslatePipe } from '@ngx-translate/core'
import { MessageService } from 'src/app/shared/message/message.service'

import { UsuarioClientService } from '../users-client.service'

/**
 *  Class that represents a component to list the users.
 *
 */
@Component({
    selector: 'app-list-users',
    templateUrl: './list-users.component.html',
    styleUrls: ['./list-users.component.css'],
})
export class ListUsersComponent implements OnInit {
    public users = []
    public isLoading: boolean
    public showSuccessMessage: boolean

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private userService: UsuarioClientService,
        private messageService: MessageService,
        private translatePipe: TranslatePipe
    ) {
        this.users = this.route.snapshot.data['users']
        this.isLoading = false
        this.showSuccessMessage = false
    }

    ngOnInit(): void {}

    /**
     * Method that redirects to edit page.
     *
     * @param user
     *
     */
    public editUser(user) {
        this.router.navigate([`users/create/${user.id}`])
    }

    /**
     * Method that start the delete action, calling the confirmation modal.
     *
     * @param user
     *
     */
    public deleteUserButtonClick(user) {
        this.openConfirmationModal(user)
    }

    /**
     * Method that opens and control the confirmation modal.
     *
     * @param user
     *
     */
    private openConfirmationModal(user) {
        let titleKey = 'user.message.confirm.delete.title'
        let descriptionKey = 'user.message.confirm.delete.description'

        let title = this.translatePipe.transform(titleKey)
        let description = this.translatePipe.transform(descriptionKey)

        this.messageService.displayConfirmationMessage(title, description, null, this.continueUserExclusion, () => {
            this.router.navigate([`users/`])
        })
    }

    /**
     * Method that continues the exclusion action. It passes the user to start the request to delete user.
     *
     * @param user
     *
     */
    private continueUserExclusion(user) {
        this.isLoading = true
        this.userService.delete(user).subscribe(
            () => {
                this.refreshListAfterExclusion()
            },
            () => {
                this.isLoading = false
            }
        )
    }

    /**
     *  Method that update the user list after exclusion.
     *
     */
    private refreshListAfterExclusion() {
        this.userService.getUsuarios().subscribe(
            (users) => {
                this.users = users
                this.isLoading = false
            },
            (err) => {}
        )
    }
}
