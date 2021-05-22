import { Pipe, PipeTransform } from '@angular/core'

@Pipe({
    name: 'cellphone',
})
export class CellphonePipe implements PipeTransform {
    transform(value: string): string {
        if (!value || value == null) {
            return null
        } else if (value.length === 11) {
            return value.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/g, '$1.$2.$3-$4')
        } else {
            return value.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/g, '$1.$2.$3/$4-$5')
        }
    }
}
