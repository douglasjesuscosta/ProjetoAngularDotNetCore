import { Injectable, EventEmitter } from '@angular/core'

/**
 * Class responsável pelo controle do componente de 'Loader'.
 *
 * @author Squadra Tecnologia
 */
@Injectable()
export class ProgressBarManangerService {
    public onStart: EventEmitter<void>

    public onStop: EventEmitter<void>

    /**
     * Construtor da classe.
     */
    constructor() {
        this.onStart = new EventEmitter<void>()
        this.onStop = new EventEmitter<void>()
    }
}