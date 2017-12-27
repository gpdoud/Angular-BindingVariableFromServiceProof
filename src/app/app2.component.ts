import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-app2',
  template: `
    <p>
      app2 works!
    </p>
    <a routerLink='/app1'>App1</a>
  `,
  styles: []
})
export class App2Component implements OnInit {

  constructor() {
    console.log("In app2 constructor");

  }

  ngOnInit() {
  }

}
