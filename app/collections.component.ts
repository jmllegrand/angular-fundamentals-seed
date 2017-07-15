import {Component} from "@angular/core";
import {passengers} from "./passengers.const";
import {Passenger} from "./passenger";

/**
 * Created by jmlegrand on 14/07/17.
 */


@Component({
  selector: 'collections',
  styleUrls: ['app.component.scss'],
  template: `
    <h3>1- Collections</h3>
    <h4>Airline passengers (using *ngFor)</h4>
    <ul>
      <li *ngFor="let passenger of passengers; let i= index;">
        {{i}}: {{passenger.fullName}} has checked in ?
        {{passenger.checkedIn}}
      </li>
    </ul>
    <h4>Airline passengers (using template)</h4>
    <ul>
      <template ngFor let-passenger let-i="index" [ngForOf]="passengers">
        <li>
          {{i}}: {{passenger.fullName}} has checked in ?
          {{passenger.checkedIn}}
        </li>
      </template>
    </ul>
  `
})

export class CollectionsComponent {
  passengers: Passenger[];


  constructor() {
    this.passengers = passengers;
  }
}