import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyIdentityComponent } from './my-identity/my-identity.component';
import { MyDescriptionComponent } from './my-description/my-description.component';
import { InfoPageComponent } from './info-page/info-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component';

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
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
