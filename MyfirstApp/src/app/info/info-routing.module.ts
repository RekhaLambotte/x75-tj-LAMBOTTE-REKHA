import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {InfoPageComponent} from "./component/info-page/info-page.component";
import {MyDescriptionComponent} from "./component/my-description/my-description.component";
import {MyIdentityComponent} from "./component/my-identity/my-identity.component";

const routes: Routes = [
  {path: '', component: InfoPageComponent,
  children:[
    {path: '', redirectTo:'home', pathMatch: 'full' },
    {path: 'my description', component: MyDescriptionComponent },
    {path: 'my identity', component: MyIdentityComponent },
  ]},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InfoRoutingModule { }
