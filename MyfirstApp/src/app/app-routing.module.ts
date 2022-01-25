import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {InfoPageComponent} from "./info/component/info-page/info-page.component";
import {ContactPageComponent} from "./component/contact-page/contact-page.component";

const routes: Routes = [
  {
    path: '',
    component: InfoPageComponent
  },
  {
    path: 'info',
    component: InfoPageComponent
  },
  {
    path: 'contact',
    component: ContactPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
