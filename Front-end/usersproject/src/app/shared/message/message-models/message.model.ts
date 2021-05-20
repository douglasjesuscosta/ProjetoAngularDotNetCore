import { MessageEnum } from './message.enum'

/**
 * Classe de representação de 'Mensagem'.
 *
 * @author Douglas
 */
export class Message {
    /**
     * Construtor da classe.
     *
     * @param type
     * @param error
     * @param message
     * @param status
     */
    constructor(
        public type?: MessageEnum,
        public title?: string,
        public description?: string,
        public status?: number,
        public onOkPress?: any,
        public onYesPress?: any,
        public onNoPress?: any
    ) {}
}
