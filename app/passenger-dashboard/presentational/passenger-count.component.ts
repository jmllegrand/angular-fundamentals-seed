/**
 * Created by jmlegrand on 15/01/17.
 */

import {Component, Input} from '@angular/core';
import {Passenger} from "../model/passenger.interface";

@Component({
  selector: 'passenger-count',
  template: `
  <div>
    <h3>Airline passengers! </h3>
    <span>Total checked in: </span> <span>{{checkedInCount()}}</span> / <span>{{items.length}}</span>
  </div>
  `
})

export class PassengerCountComponent {
  @Input()
  items: Passenger[];

  constructor() {
    console.log("PassengerCountComponent - constructor()")
  }

  checkedInCount() : number {
    if (!this.items) return;
    return (this.items.filter(function(passenger: Passenger) {
      return passenger.checkedIn
    })).length;
  }

}