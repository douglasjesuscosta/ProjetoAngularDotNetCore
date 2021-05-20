import { Component } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'

import { UsuarioClientService } from '../users-client.service'
import { MessageService } from 'src/app/shared/message/message.service'
import { TranslatePipe } from '@ngx-translate/core'

/**
 * Component responsable to insert or update User/Usuario.
 */

@Component({
    selector: 'app-user-form',
    templateUrl: './user-form.component.html',
    styleUrls: ['./user-form.component.css'],
})
export class UserFormComponent {
    public user
    public userForm: FormGroup
    public isSaved: boolean
    public isUpdate: boolean
    public isLoading: boolean
    public isSubmitted: boolean

    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private formBuilder: FormBuilder,
        private userService: UsuarioClientService,
        private messageService: MessageService,
        private translate: TranslatePipe
    ) {
        let value = this.route.firstChild && this.route.firstChild.data['value']
        this.user = value && value['userUpdate']
        this.isUpdate = this.user && this.user.id ? true : false

        this.createForm(this.user)
    }

    /**
     * Method to initialize values.
     * @param config
     */
    private initializeValues() {
        this.isLoading = false
        this.isSaved = false
        this.isSubmitted = false
    }

    /**
     * Method to initialize the form.
     */
    createForm(user) {
        //let formattedBirthday = user !== null ? new Date(user.birthday) : null

        this.userForm = this.formBuilder.group({
            id: [user !== null ? user.id : null],
            name: [user !== null ? user.name : null, Validators.required],
            cpf: [user !== null ? user.cpf : null, Validators.required],
            email: [user !== null ? user.email : null, Validators.required],
            telephone: [user !== null ? user.telephone : null, Validators.required],
            sex: [user !== null ? user.sex : null, Validators.required],
            birthday: [user !== null ? user.birthday : null, Validators.required],
        })
    }

    /**
     * Getters of form fields for validation.
     */
    get nameInput() {
        return this.userForm.get('name')
    }
    get cpfInput() {
        return this.userForm.get('cpf')
    }
    get emailInput() {
        return this.userForm.get('email')
    }
    get telephoneInput() {
        return this.userForm.get('telephone')
    }
    get sexInput() {
        return this.userForm.get('sex')
    }
    get birthdayInput() {
        return this.userForm.get('birthday')
    }

    /**
     * Save User data.
     *
     * */
    public saveUser(): void {
        this.isSubmitted = true

        if (this.userForm.valid) {
            this.isLoading = true
            let userObject = this.userForm.value

            if (this.isUpdate) {
                this.updateUser(userObject)
            } else {
                this.persistUser(userObject)
            }
        }
    }

    /**
     * Persist user data.
     *
     * @param userObject
     *
     */
    private persistUser(userObject: any) {
        this.userService.save(userObject).subscribe(
            (value) => {
                this.showSuccessFeedback(value)
            },
            (error) => {
                this.showErrorFeedback(error)
            }
        )
    }

    /**
     * Update User.
     *
     * @param userObject
     */
    private updateUser(userObject) {
        this.userService.update(userObject).subscribe(
            (value) => {
                this.showSuccessFeedback(value)
            },
            (error) => {
                this.showErrorFeedback(error)
            }
        )
    }

    /**
     * Method to show success feedback.
     *
     * @param value
     */
    public showSuccessFeedback(value) {
        this.isLoading = false
        this.isSaved = true

        let titleKey: string = 'success.message.save.title'
        let descriptionKey: string = 'user.message.save.success'

        let title = this.translate.transform(titleKey)
        let description = this.translate.transform(descriptionKey)

        this.messageService.displayOkMessage(title, description, 200, () => {
            this.router.navigate([`users/`])
        })
    }

    /**
     * Method to show error feedback.
     * @param error
     */
    private showErrorFeedback(error) {
        this.isLoading = false
        this.isSaved = false

        let title: string = 'error.message.save.title'
        let description: string = 'user.message.save.error'

        this.messageService.displayOkMessage(title, description, 500, () => {})
    }

    /**
     * Method to redirect to list page.
     */
    public back() {
        this.router.navigate([`users/`])
    }
}
