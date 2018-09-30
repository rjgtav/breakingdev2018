import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {
  faCalendarPlus,
  faCalendarTimes,
  faCheckCircle, faChevronLeft, faExchangeAlt, faPencilAlt,
  faPlus,
  faStopwatch,
  faTrashAlt
} from "@fortawesome/free-solid-svg-icons";
import {ZebraTask} from "../../shared/zebra-task.model";
import {faCalendarAlt, faCircle, faClock, faSave} from "@fortawesome/free-regular-svg-icons";
import {ActivatedRoute, Router, UrlSegment} from "@angular/router";
import {Subscription} from "rxjs";
import {ZebraService} from "../../shared/zebra.service";
import {ZebraTodoListComponent} from "../zebra-todo-list/zebra-todo-list.component";
import {TimeService} from "../../shared/time.service";

@Component({
  selector: 'app-zebra-todo-add',
  templateUrl: './zebra-todo-add.component.html',
  styleUrls: ['./zebra-todo-add.component.css']
})
export class ZebraTodoAddComponent implements OnInit, OnDestroy {

  readonly DURATION_MIN = new Date(1970, 0, 1, 0, 0);
  readonly DURATION_MAX = new Date(1970, 0, 1, 5, 30);

  faCalendarAlt = faCalendarAlt;
  faCalendarTimes = faCalendarTimes;
  faCalendarPlus = faCalendarPlus;
  faChevronLeft = faChevronLeft;
  faExchangeAlt = faExchangeAlt;
  faCheckCircle = faCheckCircle;
  faCircle = faCircle;
  faClock = faClock;
  faPencilAlt = faPencilAlt;
  faPlus = faPlus;
  faSave = faSave;
  faStopwatch = faStopwatch;
  faTrashAlt = faTrashAlt;

  @Input() task: ZebraTask = new ZebraTask();

  isNew: boolean;

  subscriptionTask: Subscription;
  subscriptionUrl: Subscription;

  constructor(private route: ActivatedRoute, private router: Router, private zebraService: ZebraService) {}

  onBackClick() {
    this.router.navigate(['/']);
  }

  onCompleteClick() {
    this.zebraService.taskComplete(this.task).subscribe(value => this.onBackClick());
  }

  onDeleteClick() {
    this.zebraService.taskDelete(this.task.$ID).subscribe(value => this.onBackClick());
  }

  onPostponeClick() {
    this.zebraService.taskPostpone(this.task.$ID).subscribe(value => this.onBackClick());
  }

  onReplaceClick() {
    this.zebraService.taskReplace(this.task.$ID).subscribe(value => this.onBackClick());
  }

  onSaveClick() {
    if (!this.task.IsValid)
      return;

    if (this.isNew) {
      this.zebraService.taskAdd(this.task).subscribe(value => this.onBackClick());
      sessionStorage.removeItem(ZebraTodoListComponent.SESSION_TAB);
    } else {
      this.zebraService.taskEdit(this.task).subscribe(value => this.onBackClick());
    }
  }

  onTodayClick() {
    this.task.Scheduled = TimeService.Now();
    this.onSaveClick();
  }

  onTaskChange(task: ZebraTask) {
    if (task == null) return;
    this.task = task;
  }
  onUrlChange(url: UrlSegment[]) {
    let path = url[0].path;

    if (path == 'new') {
      this.isNew = true;
      this.task = new ZebraTask();
    } else {
      this.isNew = false;

      this.subscriptionTask && this.subscriptionTask.unsubscribe();
      this.subscriptionTask = this.zebraService.taskGet(parseInt(url[1].path)).subscribe(value => this.onTaskChange(value));
    }
  }

  ngOnInit() {
    this.subscriptionUrl && this.subscriptionUrl.unsubscribe();
    this.subscriptionUrl = this.route.url.subscribe(value => this.onUrlChange(value));
  }

  ngOnDestroy(): void {
    this.subscriptionTask && this.subscriptionTask.unsubscribe();
    this.subscriptionUrl && this.subscriptionUrl.unsubscribe();
  }

}
