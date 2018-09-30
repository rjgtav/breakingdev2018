import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TimePipe} from "./time.pipe";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
  ],
  exports: [TimePipe],
  declarations: [TimePipe]
})
export class SharedModule { }
