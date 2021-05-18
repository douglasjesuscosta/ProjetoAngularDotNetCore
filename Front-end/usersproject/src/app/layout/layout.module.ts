import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'
import { TranslateModule } from '@ngx-translate/core'

import { NavbarComponent } from './navbar/navbar.component'
import { ProgressBarComponent } from './progress-bar/progress-bar.component'
import { ProgressBarManangerModule } from '../shared/progress-bar-mananger/progress-bar-mananger.module'

@NgModule({
    declarations: [NavbarComponent, ProgressBarComponent],
    imports: [CommonModule, TranslateModule, FormsModule, RouterModule, ProgressBarManangerModule],
    providers: [NavbarComponent],
    exports: [NavbarComponent, ProgressBarComponent],
})
export class LayoutModule {}
