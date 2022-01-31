import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ContactPageComponent} from "./component/contact-page/contact-page.component";
import {WelcomePageComponent} from "./component/welcome-page/welcome-page.component";
import {SignedGuard} from "./guard/signed.guard";

const routes: Routes = [
  { path:'', redirectTo: 'home', pathMatch: 'full' },
  { path:'home', component: WelcomePageComponent },
  { path:'contact', component: ContactPageComponent },
  { path: 'info', canActivate:[SignedGuard], loadChildren: () => import('./info/info.module').then(m=>m.InfoModule)},
  { path: 'dashboard', canActivate:[SignedGuard], loadChildren: () => import('./dashboard/dashboard.module').then(m=>m.DashboardModule)},
  { path: '**', component: WelcomePageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
