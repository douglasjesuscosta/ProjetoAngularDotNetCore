import { NgModule } from '@angular/core'
import { NgxMaskModule } from 'ngx-mask'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'
import { ReactiveFormsModule } from '@angular/forms'
import { TranslateModule } from '@ngx-translate/core'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'
import { HttpClientModule } from '@angular/common/http'

import { UserRoutes } from './users.router'
import { UsuarioResolve } from './user.resolve'
import { UsuariosResolve } from './users.resolve'
import { UsuarioClientService } from './users-client.service'
import { UserFormComponent } from './user-form/user-form.component'
import { ListUsersComponent } from './list-users/list-users.component'
import { FormatDataModule } from 'src/app/shared/format-data/format-data.module'

@NgModule({
    declarations: [ListUsersComponent, UserFormComponent],
    imports: [
        NgbModule,
        CommonModule,
        TranslateModule,
        FormatDataModule,
        HttpClientModule,
        ReactiveFormsModule,
        NgxMaskModule.forRoot({}),
        RouterModule.forChild(UserRoutes),
    ],
    providers: [UsuarioResolve, UsuariosResolve, UsuarioClientService],
})
export class UsersModule {}
