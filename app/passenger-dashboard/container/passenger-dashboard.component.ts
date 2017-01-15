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
<passenger-count></passenger-count>
<passenger-detail></passenger-detail>
<h3>Airline passengers</h3>
<ul>
  <li *ngFor="let passenger of passengers">
       <span
         class="status"
         [ngClass]="{
            'checked-in': passenger.checkedIn,
            'checked-out': !passenger.checkedIn
         }"></span>
    <span>{{passenger.id}}</span> <span>:</span> <span>{{passenger.fullName}}</span>
    <p>{{passenger | json}}</p>
    <div class="date">
      Check in date:
      {{passenger.checkedIn ? (passenger.checkInDate | date: 'fullDate' | uppercase) : 'not checked in'}}
    </div>
    <div class="children">
      Children : {{passenger.children?.length || 0}}
    </div>
  </li>
</ul>
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

}
