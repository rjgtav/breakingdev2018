import {Component, OnDestroy, OnInit} from '@angular/core';
import {faCalendarAlt, faCheck, faCheckCircle, faClock, faPlus} from "@fortawesome/free-solid-svg-icons";
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

  static readonly SESSION_TAB = 'zebra.list.tab';

  faCalendarAlt = faCalendarAlt;
  faCheck = faCheck;
  faCheckCircle = faCheckCircle;
  faCircle = faCircle;
  faPlus = faPlus;
  faClock = faClock;
  ZebraTodoListTab = ZebraTodoListTab;

  daysByTab: { [key: string]: Date[] } = {};
  tab: ZebraTodoListTab;
  tasksByTab: {[key: string]: { [key: number]: ZebraTask[]}} = {};
  today: Date = new Date();

  subscriptionTasks: Subscription;

  constructor(private zebraService: ZebraService) { }

  get IsTutorial(): boolean {
    return Object.keys(this.daysByTab).length == 0 || (1 == 1
      && this.daysByTab[this.ZebraTodoListTab.COMPLETED].length == 0
      && this.daysByTab[this.ZebraTodoListTab.TODAY].length == 0
      && this.daysByTab[this.ZebraTodoListTab.SCHEDULED].length == 0
    );
  }

  onTabClick(tab: ZebraTodoListTab) {
    this.tab = tab;
    sessionStorage.setItem(ZebraTodoListComponent.SESSION_TAB, this.tab);
  }

  onTasksChange(tasks: ZebraTask[]) {
    this.daysByTab = {};
    this.daysByTab[ZebraTodoListTab.COMPLETED] = [];
    this.daysByTab[ZebraTodoListTab.TODAY] = [];
    this.daysByTab[ZebraTodoListTab.SCHEDULED] = [];

    this.tasksByTab = tasks
      .reduce((accumulator, value) => {
        let tab: ZebraTodoListTab;

        if (value.Complete)           tab = ZebraTodoListTab.COMPLETED;
        else if (value.IsToday)       tab = ZebraTodoListTab.TODAY;
        else if (value.IsScheduled)   tab = ZebraTodoListTab.SCHEDULED;

        let day = new Date(value.Scheduled.toDateString());
        let tasksByDay = accumulator[tab] = accumulator[tab] || {};
        (tasksByDay[day.toDateString()] = tasksByDay[day.toDateString()] || []).push(value);

        let days = this.daysByTab[tab] = this.daysByTab[tab] || [];
        if (days.indexOf(day) < 0)
          days.push(day);

        return accumulator;
    }, {});

    console.log(this.tasksByTab)
  }

  ngOnInit(): void {
    this.tab = sessionStorage.getItem(ZebraTodoListComponent.SESSION_TAB) as ZebraTodoListTab.TODAY || ZebraTodoListTab.TODAY;

    this.subscriptionTasks && this.subscriptionTasks.unsubscribe();
    this.subscriptionTasks = this.zebraService.loadTasks(true).subscribe(value => this.onTasksChange(value));
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
