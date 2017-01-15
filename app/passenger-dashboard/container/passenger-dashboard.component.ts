/**
 * Created by jmlegrand on 15/01/17.
 */

import {Component} from '@angular/core';
import {Passenger} from "../model/passenger.interface";
import {passengers} from './passengers.data';

@Component({
  selector:'passenger-dashboard',
  styleUrls: ['passenger-dashboard.component.scss'],
  template: `
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
`
})


export class PassengerDashboardComponent {
  passengers: Passenger[] = passengers;
}
