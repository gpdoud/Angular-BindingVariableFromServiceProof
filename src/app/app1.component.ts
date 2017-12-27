import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-app1',
  template: `
    <p>
      app1 works!
    </p>
    <a routerLink='/app2'>App2</a>
  `,
  styles: []
})
export class App1Component implements OnInit {

  constructor() {
    console.log("In app1 constructor");
  }

  ngOnInit() {
  }

}
