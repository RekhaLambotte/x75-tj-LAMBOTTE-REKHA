import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {InfoPageComponent} from "./component/info-page/info-page.component";
import {MyIdentityComponent} from "./component/my-identity/my-identity.component";
import {MyDescriptionComponent} from "./component/my-description/my-description.component";

@NgModule({
  declarations: [InfoPageComponent, MyIdentityComponent, MyDescriptionComponent],
  imports: [
    CommonModule
  ]
})
export class InfoModule { }
