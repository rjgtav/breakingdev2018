import {Component, OnDestroy, OnInit} from '@angular/core';
import {faChevronLeft, faCog, faSave, faTrashAlt} from "@fortawesome/free-solid-svg-icons";
import {Router} from "@angular/router";
import {ZebraService} from "../../shared/zebra.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-zebra-todo-settings',
  templateUrl: './zebra-todo-settings.component.html',
  styleUrls: ['./zebra-todo-settings.component.css']
})
export class ZebraTodoSettingsComponent implements OnInit, OnDestroy {

  faChevronLeft = faChevronLeft;
  faCog = faCog;
  faSave = faSave;
  faTrashAlt = faTrashAlt;

  calendars: string[];
  calendar: string;

  subscriptionCalendars: Subscription;

  constructor(private router: Router, private zebraService: ZebraService) { }

  onBackClick() {
    this.router.navigate(['/']);
  }

  onDeleteClick(calendar: string) {
    if (calendar)
      this.zebraService.calendarDelete(calendar).subscribe(value => this.zebraService.loadCalendars());
  }
  onSaveClick() {
    if (this.calendar)
      this.zebraService.calendarAdd(this.calendar).subscribe(value => this.zebraService.loadCalendars());
  }

  ngOnInit(): void {
    this.subscriptionCalendars && this.subscriptionCalendars.unsubscribe();
    this.subscriptionCalendars = this.zebraService.loadCalendars().subscribe(value => this.calendars = value);
  }

  ngOnDestroy(): void {
    this.subscriptionCalendars && this.subscriptionCalendars.unsubscribe();
  }

}
