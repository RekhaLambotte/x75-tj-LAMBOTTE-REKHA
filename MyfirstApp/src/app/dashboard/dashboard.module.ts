import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardRouterComponent } from './component/dashboard-router/dashboard-router.component';
import { DashboardHomeComponent } from './component/dashboard-home/dashboard-home.component';
import { DashboardMyDetailComponent } from './component/dashboard-my-detail/dashboard-my-detail.component';


@NgModule({
  declarations: [
    DashboardRouterComponent,
    DashboardHomeComponent,
    DashboardMyDetailComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
