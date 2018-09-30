import {Injectable} from "@angular/core";
import {BehaviorSubject, observable, Observable} from "rxjs";
import {ZebraTask} from "./zebra-task.model";
import {HttpClient} from "@angular/common/http";
import {map} from "rxjs/operators";
import {UtilService} from "./util";

const BASE_URL = 'http://127.0.0.1:8080/';

@Injectable({
  providedIn: 'root'
})
export class ZebraService {

  tasks: BehaviorSubject<ZebraTask[]> = new BehaviorSubject([]);
  user: number = 1; // TODO: request ID from the server

  constructor(private http: HttpClient) {}

  loadTasks(force?: boolean): Observable<ZebraTask[]> {
    if (force || this.tasks.getValue().length == 0)
      this.http
        .post(BASE_URL + 'get/', { user: this.user })
        .subscribe(value => {
          let tasks: object[] = value[0].concat(value[1]);
          this.tasks.next(tasks.map(task => ZebraTask.fromJSON(task)));
        });

    return this.tasks.asObservable();
  }

  taskAdd(task: ZebraTask): Observable<object> {
    let params: object = ZebraTask.toJSON(task);
        params['user'] = this.user;

    return this.http.post(BASE_URL + 'add/', params);
  }

  taskComplete(task: ZebraTask): Observable<object> {
    let params: object = {
      task_id: task.$ID,
      user: this.user,
    };

    let complete = !task.Complete;

    if (complete) {
      let now = new Date();
      let timeTaken: number = now.getTime() - task.Scheduled.getTime();
          timeTaken = timeTaken < 0 ? task.Duration.getTime() : timeTaken;
          timeTaken = Math.min(timeTaken, task.Duration.getTime() * 4);

      params['time_taken'] = UtilService.DateToUTC(new Date(timeTaken));

      return this.http.post(BASE_URL + 'complete/', params);
    } else {
      return this.http.post(BASE_URL + 'uncomplete/', params);
    }
  }

  taskDelete(id: number): Observable<object> {
    return this.http.post(BASE_URL + 'delete/', {
      user: this.user,
      task_id: id
    });
  }

  taskEdit(task: ZebraTask): Observable<object> {
    let params: object = ZebraTask.toJSON(task);
    params['user'] = this.user;

    return this.http.post(BASE_URL + 'edit/', params);
  }

  taskGet(id: number): Observable<ZebraTask> {
    return this.loadTasks().pipe(map(tasks => tasks.find(value => value.$ID == id)));
  }

  taskPostpone(id: number): Observable<object> {
    return this.http.post(BASE_URL + 'postpone/', {
      user: this.user,
      task_id: id
    });
  }

  taskReplace(id: number): Observable<object> {
    return this.http.post(BASE_URL + 'switch/', {
      user: this.user,
      task_id: id
    });
  }

}
