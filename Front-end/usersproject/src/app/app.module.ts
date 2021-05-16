import { NgModule } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { BrowserModule } from '@angular/platform-browser'
import { TranslateHttpLoader } from '@ngx-translate/http-loader'
import { TranslateLoader, TranslateModule } from '@ngx-translate/core'

import { AppComponent } from './app.component'
import { AppRoutingModule } from './app-routing.module'
import { LayoutModule } from './layout/layout.module'
import { UsuarioResolve } from './pages/users/user.resolve'

@NgModule({
    declarations: [AppComponent],
    imports: [
        LayoutModule,
        BrowserModule,
        AppRoutingModule,
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: HttpLoaderFactory,
                deps: [HttpClient],
            },
        }),
    ],
    providers: [UsuarioResolve, TranslateModule],
    bootstrap: [AppComponent],
})
export class AppModule {}

// required for AOT compilation
export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
    return new TranslateHttpLoader(http)
}
