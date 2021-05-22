import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { CpfCnpjPipe } from './cpfcnpj.pipe'

@NgModule({
    declarations: [CpfCnpjPipe],
    imports: [CommonModule],
    exports: [CpfCnpjPipe],
})
export class FormatDataModule {}
