import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'
import { TranslateModule } from '@ngx-translate/core'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'

import { NavbarComponent } from './navbar/navbar.component'
import { MessageModule } from '../shared/message/message.module'
import { ProgressBarComponent } from './progress-bar/progress-bar.component'
import { SimpleMessageComponent } from './simple-message/simple-message.component'
import { ConfirmMessageComponent } from './confirm-message/confirm-message.component'
import { ProgressBarManangerModule } from '../shared/progress-bar-mananger/progress-bar-mananger.module'

@NgModule({
    declarations: [NavbarComponent, ProgressBarComponent, SimpleMessageComponent, ConfirmMessageComponent],
    imports: [CommonModule, TranslateModule, FormsModule, RouterModule, ProgressBarManangerModule, NgbModule, MessageModule],
    providers: [NavbarComponent],
    exports: [NavbarComponent, ProgressBarComponent, SimpleMessageComponent, ConfirmMessageComponent],
})
export class LayoutModule {}
