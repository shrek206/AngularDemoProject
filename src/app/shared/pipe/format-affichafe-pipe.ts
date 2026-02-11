import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatAffichafe',
})
export class FormatAffichafePipe implements PipeTransform {

  transform(value: number): string {
    let MinAffich = Math.floor(value / 60)
    value = value % 60

    let format = "";

    format += (MinAffich < 10 ? `0${MinAffich}` : MinAffich) + ":";
    format += (value < 10 ? `0${value}` : value);

    return format
  }

}
