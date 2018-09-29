import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {ZebraTask} from "./zebra-task.model";

@Injectable({
  providedIn: 'root'
})
export class ZebraService {

  getTasks(): Observable<ZebraTask[]> {
    // TODO: implement for real with http service
    return Observable.create((observable) => {
      let result: ZebraTask[] = [];

      for (let i = 0; i < 30; i ++) {
        let task = new ZebraTask();
            task.$ID = i;
            task.Complete = i % 2 == 0;
            task.Duration = new Date(1970, 0, 0, 0, i * 30, 0);
            task.Scheduled = i % 3 == 0 ? new Date() : new Date(new Date().getTime() + i*24*60*60*1000);
            task.Name = "Buy milk #" + i;
            task.Notes = "Notes x" + i;

        result.push(task);
      }

      observable.next(result);
      observable.complete();
    });
  }

}
