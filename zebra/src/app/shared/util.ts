import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class UtilService {

  public static DateToUTC(date: Date, timeOnly?: boolean) {
    return date
      ? timeOnly
        ? new Date(Date.UTC(1970, 0, 1, date.getHours(), date.getMinutes()))
        : new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), date.getMinutes()))
      : null;
  }

}
