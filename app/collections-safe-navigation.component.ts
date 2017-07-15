import {Component} from "@angular/core";
import {Passenger} from "./passenger";
import {passengers} from "./passengers.const";

/**
 * Created by jmlegrand on 15/07/17.
 */


@Component({
  selector: 'collections-safe-navigation',
  styleUrls: ['app.component.scss'],
  template: `
    <h3>4- Collections using the safe navigation operator</h3>
    <h4>Airline passengers</h4>
    <ul>
      <li *ngFor="let passenger of passengers; let i= index;">
          <span
            class="status"
            [class.checked-in]="passenger.checkedIn">
          </span>
        <span>{{i}}: {{passenger.fullName}} has checked in ? {{passenger.checkedIn}}</span>
        <!--p>{{passenger | json }}</p-->
        <div class="date">
          <span> Checkin date: 
            {{passenger.checkedIn ? (passenger.checkInDate | date: 'yMMMMd' | uppercase ) : 'No checkin date'}}
          </span>
        </div>
        <div class="children">
          Children: {{passenger.children?.length || 0}}
        </div>
      </li>
    </ul>
  `
})


export class CollectionsSafeNavigationComponent {
  passengers: Passenger[];

  constructor() {
    this.passengers = passengers;
  }
}