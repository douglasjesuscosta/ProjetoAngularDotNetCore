import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'
import { TranslateModule } from '@ngx-translate/core'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'

import { NavbarComponent } from './navbar/navbar.component'
import { MessageModule } from '../shared/message/message.module'
import { ProgressBarComponent } from './progress-bar/progress-bar.component'
import { ProgressBarManangerModule } from '../shared/progress-bar-mananger/progress-bar-mananger.module'
import { SimpleMessageComponent } from './simple-message/simple-message.component'

@NgModule({
    declarations: [NavbarComponent, ProgressBarComponent, SimpleMessageComponent],
    imports: [CommonModule, TranslateModule, FormsModule, RouterModule, ProgressBarManangerModule, NgbModule, MessageModule],
    providers: [NavbarComponent],
    exports: [NavbarComponent, ProgressBarComponent],
})
export class LayoutModule {}
