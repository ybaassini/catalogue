import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'weight',
  pure: false
})

export class WeightPipe implements PipeTransform {
    transform(value: any): any{
        return value + ' kg';
    }
}
