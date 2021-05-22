import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { Validators } from './validators'

@NgModule({
    declarations: [Validators],
    imports: [CommonModule],
    exports: [Validators],
})
export class ValidatorsModule {}
