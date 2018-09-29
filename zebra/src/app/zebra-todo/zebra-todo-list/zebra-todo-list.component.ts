import {Component, OnDestroy, OnInit} from '@angular/core';
import {faCalendarAlt, faCheck, faCheckCircle, faClock} from "@fortawesome/free-solid-svg-icons";
import {ZebraService} from "../../shared/zebra.service";
import {Subscription} from "rxjs";
import {ZebraTask} from "../../shared/zebra-task.model";
import {faCircle} from "@fortawesome/free-regular-svg-icons";

@Component({
  selector: 'zebra-todo-list',
  templateUrl: './zebra-todo-list.component.html',
  styleUrls: ['./zebra-todo-list.component.css']
})
export class ZebraTodoListComponent implements OnInit, OnDestroy {

  faCalendarAlt = faCalendarAlt;
  faCheck = faCheck;
  faCheckCircle = faCheckCircle;
  faCircle = faCircle;
  faClock = faClock;
  ZebraTodoListTab = ZebraTodoListTab;

  tab: ZebraTodoListTab = ZebraTodoListTab.TODAY;
  tasksByTab: {[key: string]: ZebraTask[]} = {};

  subscriptionTasks: Subscription;

  constructor(private zebraService: ZebraService) { }

  onTabClick(tab: ZebraTodoListTab) {
    this.tab = tab;
  }

  onTasksChange(tasks: ZebraTask[]) {
    this.tasksByTab = tasks.reduce((accumulator, value) => {
      let tab: ZebraTodoListTab;

      if (value.Complete)           tab = ZebraTodoListTab.COMPLETED;
      else if (value.IsToday)       tab = ZebraTodoListTab.TODAY;
      else if (value.IsScheduled)   tab = ZebraTodoListTab.SCHEDULED;

      (accumulator[tab] = accumulator[tab] || []).push(value);
      return accumulator;
    }, {});

    console.log(this.tasksByTab)
  }

  ngOnInit(): void {
    this.subscriptionTasks && this.subscriptionTasks.unsubscribe();
    this.subscriptionTasks = this.zebraService.getTasks().subscribe(value => this.onTasksChange(value));
  }

  ngOnDestroy(): void {
    this.subscriptionTasks && this.subscriptionTasks.unsubscribe();
  }

}

enum ZebraTodoListTab {
  COMPLETED = 'Completed',
  SCHEDULED = 'Scheduled',
  TODAY = 'Today',
}
