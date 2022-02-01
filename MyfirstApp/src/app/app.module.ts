import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactPageComponent } from './component/contact-page/contact-page.component';
import { WelcomePageComponent } from './component/welcome-page/welcome-page.component';
import {DashboardModule} from "./dashboard/dashboard.module";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PersonDetailComponent } from './component/person-detail/person-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactPageComponent,
    WelcomePageComponent,
    PersonDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DashboardModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
