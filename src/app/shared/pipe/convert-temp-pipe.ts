import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convertTemp',
})
export class ConvertTempPipe implements PipeTransform {

  transform(value: number, source: 'celsius' | 'fahrenheit', dest : 'celsius' | 'fahrenheit' ): number {
    if (source == dest) {
      return value;
    };
    if(source === 'fahrenheit' && dest === 'celsius')
    {
      return (value - 32) * (5/9);
    }
    if (source === 'celsius' && dest === 'fahrenheit'){
      return (value * 9/5) + 32;
    }
    else {
      return value;
    }
  }
}
