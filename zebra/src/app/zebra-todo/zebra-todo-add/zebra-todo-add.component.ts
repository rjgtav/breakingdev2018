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
import {ActivatedRoute, UrlSegment} from "@angular/router";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-zebra-todo-add',
  templateUrl: './zebra-todo-add.component.html',
  styleUrls: ['./zebra-todo-add.component.css']
})
export class ZebraTodoAddComponent implements OnInit, OnDestroy {

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

  @Input() task: ZebraTask;

  isNew: boolean;

  subscriptionUrl: Subscription;


  constructor(private route: ActivatedRoute) {}

  onUrlChange(url: UrlSegment[]) {
    let path = url[0].path;

    if (path == 'new') {
      this.isNew = true;
      this.task = new ZebraTask();
    } else {
      this.isNew = false;
      // TODO: get from service
    }
  }

  ngOnInit() {
    this.subscriptionUrl && this.subscriptionUrl.unsubscribe();
    this.subscriptionUrl = this.route.url.subscribe(value => this.onUrlChange(value));
  }

  ngOnDestroy(): void {
    this.subscriptionUrl && this.subscriptionUrl.unsubscribe();
  }

}
