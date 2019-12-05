import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'ordinal' })
export class OrdinalPipe implements PipeTransform {
    transform(value: number): string {
        if (value > 10 && value < 20) {
            return value + 'th';
        }
        if (/1$/.test(value.toString())) {
            return value + 'st';
        }
        if (/2$/.test(value.toString())) {
            return value + 'nd';
        }
        if (/3$/.test(value.toString())) {
            return value + 'rd';
        }
        return value + 'th';
    }
}
