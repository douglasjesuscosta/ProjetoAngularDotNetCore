import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { CommonModule } from '@angular/common'
import { TranslateModule } from '@ngx-translate/core'

import { SharedModule } from '../shared/shared.module'
import { NavbarComponent } from './navbar/navbar.component'
import { ProgressBarComponent } from './progress-bar/progress-bar.component'

@NgModule({
    declarations: [NavbarComponent, ProgressBarComponent],
    imports: [CommonModule, SharedModule, TranslateModule, FormsModule],
    providers: [NavbarComponent],
    exports: [NavbarComponent, ProgressBarComponent],
})
export class LayoutModule {}
