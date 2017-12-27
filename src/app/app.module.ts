import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { AppRouterModule } from './app-router.module';


import { AppComponent } from './app.component';
import { AppService } from './app.service';
import { App1Component } from './app1.component';
import { App2Component } from './app2.component';

@NgModule({
  declarations: [
    AppComponent,
    App1Component,
    App2Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRouterModule
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
