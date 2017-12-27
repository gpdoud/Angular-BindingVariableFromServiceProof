import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AppService implements OnInit {

  nbr: number = 0;

  getNbr(): number {
    return this.nbr++;
  }
  constructor() { 
  }

  ngOnInit() {  
  }

}
