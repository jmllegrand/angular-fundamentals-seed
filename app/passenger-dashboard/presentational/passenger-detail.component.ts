/**
 * Created by jmlegrand on 15/01/17.
 */
import {Component, Input} from '@angular/core';
import {Passenger} from "../model/passenger.interface";


@Component({
  selector: 'passenger-detail',
  template: `
<div>
  <span class="status"
    [ngClass]="{
       'checked-in': detail.checkedIn,
       'checked-out': !detail.checkedIn}">
  </span>
  <span>{{detail.id}}</span> <span>:</span> <span>{{detail.fullName}}</span>
  <p>{{detail | json}}</p>
  <div class="date">
    Check in date:
    {{detail.checkedIn ? (detail.checkInDate | date: 'fullDate' | uppercase) : 'not checked in'}}
  </div>
  <div class="children">
    Children : {{detail.children?.length || 0}}
  </div>
</div>`,
  styleUrls: ['passenger-detail.component.scss']
})


export class PassengerDetailComponent {
  @Input()
  detail: Passenger;

  constructor() {
    console.log("PassengerDetailComponent - constructor()")
  }
}