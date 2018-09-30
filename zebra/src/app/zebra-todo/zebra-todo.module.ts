import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ZebraTodoListComponent} from "./zebra-todo-list/zebra-todo-list.component";
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import {SharedModule} from "../shared/shared.module";
import { ZebraTodoAddComponent } from './zebra-todo-add/zebra-todo-add.component';
import {FormsModule} from "@angular/forms";
import {OwlDateTimeModule, OwlNativeDateTimeModule} from "ng-pick-datetime";
import {NoopAnimationsModule} from "@angular/platform-browser/animations";
import {RouterModule} from "@angular/router";
import {BrowserModule} from "@angular/platform-browser";

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    FontAwesomeModule,
    FormsModule,
    NoopAnimationsModule,
    OwlDateTimeModule,
    OwlNativeDateTimeModule,
    RouterModule,
    SharedModule,
  ],
  exports: [
    ZebraTodoListComponent,
  ],
  declarations: [
    ZebraTodoListComponent,
    ZebraTodoAddComponent,
  ]
})
export class ZebraTodoModule { }
