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
    <span>Total checked in: </span> <span>{{checkedInCount()}} / {{items.length}}</span>
  </div>
  `
})

export class PassengerCountComponent {
  @Input() items: Array<Passenger>;

  checkInCounter: number;

  constructor() {
    console.log("PassengerCountComponent - constructor()");
  }

  checkedInCount(): number {
    console.log("PassengerCountComponent - checkedInCount()");
    // if there are no items, move on ...
    if (!this.items) return;
    return (this.items.filter((passenger: Passenger) => passenger.checkedIn)).length;
  }

}