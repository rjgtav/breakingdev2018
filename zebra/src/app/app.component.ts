import { Component } from '@angular/core';
import {NotificationService} from "./shared/notification.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private notificationService: NotificationService) {}

}
