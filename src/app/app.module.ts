import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ComponentsModule } from './Components/components.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
   AppComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ComponentsModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
