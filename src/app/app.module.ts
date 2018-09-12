import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppGroceryComponent } from './app-grocery/app-grocery.component';
import { HeaderComponent } from './header/header.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { OnlineComponent } from './online/online.component';
import { OthersComponent } from './others/others.component';



@NgModule({
  declarations: [
    AppComponent,
    AppGroceryComponent,
    HeaderComponent,
    LandingPageComponent,
    OnlineComponent,
    OthersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
export class PizzaPartyAppModule { }
