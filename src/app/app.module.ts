import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HzdModule } from './hzd/hzd.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HzdModule
    // CounterModule,
    // BeastModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
