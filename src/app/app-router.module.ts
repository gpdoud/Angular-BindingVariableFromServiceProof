import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { App1Component } from './app1.component';
import { App2Component } from './app2.component';

const routes = [
	{ path: 'app1', component: App1Component },
	{ path: 'app2', component: App2Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]})
export class AppRouterModule {

}