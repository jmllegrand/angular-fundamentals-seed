/**
 * Created by jmlegrand on 27/03/17.
 */

import {Component} from "@angular/core";
import {Passenger} from "./passenger";


@Component({
  selector: 'collection',
  template: `
<h3>Collection</h3>
<h4>Airline passengers</h4>
<ul>
  <li *ngFor="let passenger of passengers; let i = index">
      <span>{{i}}: </span> <span>{{passenger.fullName}} has checked in ?</span>
      <span>{{passenger.checkedIn}}</span>
  </li>
</ul>  

<h4>Airline passengers (using template)</h4>
<ul>
<template ngFor let-passenger let-i="index" [ngForOf]="passengers">
  <li>
      <span>{{i}}: </span> <span>{{passenger.fullName}} has checked in ?</span>
      <span>{{passenger.checkedIn}}</span>
  </li>
</template>

</ul>  

`
})

export class CollectionComponent {
  passengers: Passenger[] = [{
    id: 1,
    fullName: 'Stephen',
    checkedIn: true
  }, {
    id: 2,
    fullName: 'Nathalie',
    checkedIn: false
  }, {
    id: 3,
    fullName: 'Apolline',
    checkedIn: true
  }];
}