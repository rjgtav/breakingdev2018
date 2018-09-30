import {Injectable} from "@angular/core";
import {BehaviorSubject, Observable} from "rxjs";
import {ZebraTask} from "./zebra-task.model";
import {HttpClient} from "@angular/common/http";
import {flatMap, map} from "rxjs/operators";
import {UtilService} from "./util";
import {TimeService} from "./time.service";

const BASE_URL = 'http://127.0.0.1:8080/';
const STORAGE_LOCAL_ID = 'zebra.account.id';

@Injectable({
  providedIn: 'root'
})
export class ZebraService {

  tasks: BehaviorSubject<ZebraTask[]> = new BehaviorSubject([]);

  constructor(private http: HttpClient) {}

  loadTasks(force?: boolean): Observable<ZebraTask[]> {
    if (force || this.tasks.getValue().length == 0)
      this.requestParameters()
        .subscribe(params => this.http
          .post(BASE_URL + 'get/', params)
          .subscribe(value => {
            let tasks: object[] = value[0].concat(value[1]);
            this.tasks.next(tasks.map(task => ZebraTask.fromJSON(task)));
          }));

    return this.tasks.asObservable();
  }

  private accountLogin(): Observable<string> {
    return Observable.create((observable) => {
      let user = localStorage.getItem(STORAGE_LOCAL_ID);

      if (user) {
        observable.next(user);
        observable.complete();
      } else {
        this.http.get(BASE_URL + 'signup/').subscribe(value => {
          user = value['id'];
          observable.next(user);
          observable.complete();

          localStorage.setItem(STORAGE_LOCAL_ID, user);
        });
      }
    });
  }

  taskAdd(task: ZebraTask): Observable<object> {
    return this.requestParameters(ZebraTask.toJSON(task))
      .pipe(flatMap(params => this.http
        .post(BASE_URL + 'add/', params)));
  }

  taskComplete(task: ZebraTask): Observable<object> {
    let params: object = { task_id: task.$ID };
    let complete = !task.Complete;

    if (complete) {
      let now = TimeService.Now();
      let timeTaken: number = now.getTime() - task.Scheduled.getTime();
          timeTaken = timeTaken < 0 ? task.Duration.getTime() : timeTaken;
          timeTaken = Math.min(timeTaken, task.Duration.getTime() * 4);

      params['time_taken'] = UtilService.DateToUTC(new Date(timeTaken));

      return this.requestParameters(params)
        .pipe(flatMap(params => this.http
          .post(BASE_URL + 'complete/', this.requestParameters(params))));
    } else {
      return this.requestParameters(params)
        .pipe(flatMap(params => this.http.post(BASE_URL + 'uncomplete/', params)));
    }
  }

  taskDelete(id: number): Observable<object> {
    return this.requestParameters({ task_id: id })
      .pipe(flatMap(params => this.http.post(BASE_URL + 'delete/', params)));
  }

  taskEdit(task: ZebraTask): Observable<object> {
    return this.requestParameters(ZebraTask.toJSON(task))
      .pipe(flatMap(params => this.http
        .post(BASE_URL + 'edit/', params)));
  }

  taskGet(id: number): Observable<ZebraTask> {
    return this.loadTasks().pipe(map(tasks => tasks.find(value => value.$ID == id)));
  }

  taskPostpone(id: number): Observable<object> {
    return this.requestParameters({ task_id: id })
      .pipe(flatMap(params => this.http
        .post(BASE_URL + 'postpone/', params)));
  }

  taskReplace(id: number): Observable<object> {
    return this.requestParameters({ task_id: id })
      .pipe(flatMap(params => this
        .http.post(BASE_URL + 'switch/', params)));
  }

  private requestParameters(params?: object): Observable<object> {
    return this.accountLogin().pipe(map(user => {
      params = params || {};
      params['user'] = user;
      params['time'] = UtilService.DateToUTC(TimeService.Now());
      return params;
    }));
  }

}
