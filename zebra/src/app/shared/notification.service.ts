import { Injectable } from '@angular/core';
import {ZebraService} from "./zebra.service";
import {Subscription} from "rxjs";
import {ZebraTask} from "./zebra-task.model";
import {TimeService} from "./time.service";

const MINUTES = 15;

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  interval: number;
  subscription: Subscription;

  task: ZebraTask;
  tasks: ZebraTask[];
  taskNotified: number;

  constructor(private zebraService: ZebraService) {
      Notification.requestPermission(permission => {
        if (permission === 'granted') {
          this.interval = setInterval(() => this.run(), 250);
          this.subscription = this.zebraService.loadTasks().subscribe(value => this.onTasksChanged(value))
        }
      });
  }

  onTasksChanged(tasks: ZebraTask[]) {
    this.tasks = tasks;
    this.task = tasks
      .filter(value => value.Scheduled >= TimeService.Now())
      .sort((a, b) => a.Scheduled.getTime() - b.Scheduled.getTime())
      [0];
  }

  run() {
    if (this.task)
      if (this.task.Scheduled.getTime() - TimeService.Now().getTime() <= MINUTES * 60 * 1000)
        if (this.taskNotified != this.task.$ID) {

          this.taskNotified = this.task.$ID;
          new Notification(this.task.Name);

          this.onTasksChanged(this.tasks);
        }
  }






}
