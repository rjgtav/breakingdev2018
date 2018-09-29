import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {ZebraTodoListComponent} from "./zebra-todo/zebra-todo-list/zebra-todo-list.component";
import {ZebraTodoAddComponent} from "./zebra-todo/zebra-todo-add/zebra-todo-add.component";

const routes: Routes = [
  { path: '', component: ZebraTodoListComponent },
  { path: 'new', component: ZebraTodoAddComponent },
  { path: 'edit/:id', component: ZebraTodoAddComponent },
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ],
})
export class AppRoutingModule { }
