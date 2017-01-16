/**
 * Created by jmlegrand on 15/01/17.
 */

import {Component, OnInit} from '@angular/core';
import {Passenger} from "../model/passenger.interface";
import {passengers} from './passengers.data';

@Component({
  selector: 'passenger-dashboard',
  styleUrls: ['passenger-dashboard.component.scss'],
  template: `
<div>
  <passenger-count
    [items]="passengers">
  </passenger-count>
  <passenger-detail
    *ngFor="let passenger of passengers"
    [detail]="passenger"
    (edit)="handleEdit($event)"
    (remove)="handleRemove($event)">
  </passenger-detail>
</div>

`
})


export class PassengerDashboardComponent implements OnInit {

  passengers: Passenger[];


  constructor() {
    console.log("PassengerDashboardComponent - constructor()")
  }

  // lifecycle hook, a function calls by angular itself when sth happen
  // ngOnInit is used when the component is initialized
  // use case: data fetching (and no relying on the constructor function for this)

  ngOnInit(): void {
    console.log("PassengerDashboardComponent - ngOnInit()");
    this.passengers = passengers;
  }

  handleRemove(event: any) {
    console.log("remove event fired", event);
  }

  handleEdit(event:any) {
    console.log("edit event fired", event);
  }

}
