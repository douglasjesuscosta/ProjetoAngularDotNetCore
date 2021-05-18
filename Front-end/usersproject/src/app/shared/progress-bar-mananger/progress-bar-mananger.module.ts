import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ProgressBarManangerService } from './progress-bar-mananger.servce'
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
import { ProgressBarManangerInterceptor } from './progress-bar-mananger.interceptor'

@NgModule({
    declarations: [],
    providers: [
        ProgressBarManangerService,
        {
            provide: HTTP_INTERCEPTORS,
            useClass: ProgressBarManangerInterceptor,
            multi: true,
        },
    ],
    imports: [CommonModule, HttpClientModule],
})
export class ProgressBarManangerModule {}
