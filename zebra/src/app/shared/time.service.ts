import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TimeService {

  private static delta: number = 0; // in minutes
  private static interval: number;

  constructor() { }

  static Now(): Date {
    let result = new Date();
        result.setMinutes(result.getMinutes() + this.delta * 60);

    return result;
  }

  static Travel(enable: boolean, direction: number) {
    clearInterval(TimeService.interval);

    if (enable)
      TimeService.interval = setInterval(() => TimeService.delta += direction, 500);
  }

}
