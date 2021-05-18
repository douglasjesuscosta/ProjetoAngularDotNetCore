import { Observable } from 'rxjs'
import { finalize } from 'rxjs/operators'
import { Injectable } from '@angular/core'
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http'
import { ProgressBarManangerService } from './progress-bar-mananger.servce'

/**
 * Implementação responsável por interceptar as requisições HTTP.
 */
@Injectable()
export class ProgressBarManangerInterceptor implements HttpInterceptor {
    private requestCount: number

    /**
     * Construtor da classe.
     *
     * @param ProgressBarManangerService
     */
    constructor(private progressBarManangerService: ProgressBarManangerService) {
        this.requestCount = 0
    }

    /**
     * Método responsável por interceptar a requisição Http.
     *
     * @param request
     * @param next
     */
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if (++this.requestCount === 1) {
            this.progressBarManangerService.onStart.emit()
        }

        return next.handle(request).pipe(
            finalize(() => {
                if (--this.requestCount === 0) {
                    this.progressBarManangerService.onStop.emit()
                }
            })
        )
    }
}
