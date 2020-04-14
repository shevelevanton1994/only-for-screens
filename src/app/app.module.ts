import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OnlyForScreenModule } from 'projects/only-for-screen/src/public-api';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    OnlyForScreenModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
