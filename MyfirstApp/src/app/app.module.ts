import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactPageComponent } from './component/contact-page/contact-page.component';
import {MyIdentityComponent} from "./info/component/my-identity/my-identity.component";
import {MyDescriptionComponent} from "./info/component/my-description/my-description.component";
import {InfoPageComponent} from "./info/component/info-page/info-page.component";

@NgModule({
  declarations: [
    AppComponent,
    MyIdentityComponent,
    MyDescriptionComponent,
    InfoPageComponent,
    ContactPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
