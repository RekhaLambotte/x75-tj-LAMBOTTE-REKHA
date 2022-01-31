import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DashboardHomeComponent} from "./component/dashboard-home/dashboard-home.component";
import {DashboardMyDetailComponent} from "./component/dashboard-my-detail/dashboard-my-detail.component";
import {DashboardRouterComponent} from "./component/dashboard-router/dashboard-router.component";
import {CantQuitFormComponent} from "./component/cant-quit-form/cant-quit-form.component";
import {CanQuitMyFormGuard} from "../guard/can-quit-my-form.guard";

const routes: Routes = [
  {
    path: '', component: DashboardRouterComponent,
    children: [
      {path: '', redirectTo: 'home', pathMatch: 'full'},
      {path: 'home', component: DashboardHomeComponent},
      {path: 'mydetail', component: DashboardMyDetailComponent},
      {path: 'can-quit', canDeactivate:[CanQuitMyFormGuard], component: CantQuitFormComponent}
  ]},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
