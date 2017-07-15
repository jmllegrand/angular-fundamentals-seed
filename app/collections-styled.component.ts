import {Passenger} from "./passenger";
import {Component} from "@angular/core";
import {passengers} from "./passengers.const";
/**
 * Created by jmlegrand on 14/07/17.
 */

@Component({
  selector: 'collections-styled',
  styleUrls: ['app.component.scss'],
  template: `
    <h3>2- Collections with styles</h3>
    <h4>Airline passengers (using class property bindings)</h4>
    <!-- basic technique -->
    <ul>
      <li *ngFor="let passenger of passengers; let i= index;">
          <span
            class="status"
            [class.checked-in]="passenger.checkedIn">
          </span>
        {{i}}: {{passenger.fullName}} has checked in ?
        {{passenger.checkedIn}}
      </li>
    </ul>


    <h4>Airline passengers (using ngclass property binding)</h4>
    <!-- technique useful to set up multiple class on a given element -->
    <ul>
      <li *ngFor="let passenger of passengers; let i= index;">
          <span
            class="status"
            [ngClass]="{
              'checked-in': passenger.checkedIn,
              'checked-out': !passenger.checkedIn
            }">
          </span>
        {{i}}: {{passenger.fullName}} has checked in ?
        {{passenger.checkedIn}}
      </li>
    </ul>

    <h4>Airline passengers (using style property binding)</h4>

    <!-- technique that requires no class definition -->
    <ul>
      <li *ngFor="let passenger of passengers; let i= index;">
          <span
            class="status"
            [style.backgroundColor]="(passenger.checkedIn ? '#2ecc71' : '#c0392b')">
          </span>
        {{i}}: {{passenger.fullName}} has checked in ?
        {{passenger.checkedIn}}
      </li>
    </ul>


    <h4>Airline passengers (using ngStyle property binding)</h4>
    <!-- technique that requires (again) no class definition -->

    <ul>
      <li *ngFor="let passenger of passengers; let i= index;">
          <span
            class="status"
            [ngStyle]="{'backgroundColor': (passenger.checkedIn ? '#2ecc71' : '#c0392b')}">
          </span>
        {{i}}: {{passenger.fullName}} has checked in ?
        {{passenger.checkedIn}}
      </li>
    </ul>
  `
})

export class CollectionsStyledComponent {
  passengers: Passenger[];

  constructor() {
    this.passengers = passengers;
  }

}