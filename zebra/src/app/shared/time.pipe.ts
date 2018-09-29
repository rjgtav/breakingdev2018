import { Pipe, PipeTransform } from '@angular/core';

const TIME_MINUTE: number = 1;
const TIME_HOUR: number = TIME_MINUTE * 60;
const TIME_DAY: number = TIME_HOUR * 24;

@Pipe({
  name: 'time'
})
export class TimePipe implements PipeTransform {

  transform(value: any, args?: any): string {
    value = +value;

    let hours = Math.floor(value % TIME_DAY / TIME_HOUR);
    let minutes = Math.floor(value % TIME_HOUR);

    return (hours < 10 ? '0' : '') + hours + ':' + (minutes < 10 ? '0' : '') + minutes;
  }

}
