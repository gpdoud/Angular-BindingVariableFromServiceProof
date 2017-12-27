import { Component, OnInit, OnDestroy } from '@angular/core';
import { AppService } from './app.service';
import { Subscription } from 'rxjs/Subscription';
// import { Observable } from 'rxjs/Observable';
import { IntervalObservable } from "rxjs/observable/IntervalObservable";
// import * as rx from 'rxjs';

@Component({
  selector: 'app-root',
  template: `
  	<router-outlet></router-outlet>
  `,
  styles: []
})
export class AppComponent implements OnInit, OnDestroy {

	loggerSubscription: Subscription;

	nbr: number;
  
  constructor(private svc: AppService) {
  	console.log("In app constructor");
  }

  ngOnInit() {
  	// this.loggerSubscription = IntervalObservable
  	// 	.create(3000)
  	// 	.subscribe(n => this.nbr = n);
  }
  ngOnDestroy() {
  	// this.loggerSubscription.unsubscribe();
  }
}
