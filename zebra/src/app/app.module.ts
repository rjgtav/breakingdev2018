import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import {ZebraTodoModule} from "./zebra-todo/zebra-todo.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ZebraTodoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
