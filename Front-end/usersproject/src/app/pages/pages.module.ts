import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { TranslateModule } from '@ngx-translate/core'

import { HomepageComponent } from './homepage/homepage.component'
import { PagesRoutingModule } from './pages.routing.module'

@NgModule({
    declarations: [HomepageComponent],
    imports: [CommonModule, PagesRoutingModule, TranslateModule],
})
export class PagesModule {}
