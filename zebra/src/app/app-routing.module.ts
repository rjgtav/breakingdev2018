import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {ZebraTodoListComponent} from "./zebra-todo/zebra-todo-list/zebra-todo-list.component";
import {ZebraTodoAddComponent} from "./zebra-todo/zebra-todo-add/zebra-todo-add.component";
import {ZebraTodoSettingsComponent} from "./zebra-todo/zebra-todo-settings/zebra-todo-settings.component";

const routes: Routes = [
  { path: '', component: ZebraTodoListComponent },
  { path: 'edit/:id', component: ZebraTodoAddComponent },
  { path: 'new', component: ZebraTodoAddComponent },
  { path: 'settings', component: ZebraTodoSettingsComponent },
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ],
})
export class AppRoutingModule { }
