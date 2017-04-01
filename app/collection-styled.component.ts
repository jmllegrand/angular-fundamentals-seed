import {Component} from "@angular/core";
import {Passenger} from "./passenger";
/**
 * Created by jmlegrand on 27/03/17.
 */
@Component({
  selector: 'collection-styled',
  styleUrls: ['app.component.scss'],
  template: `
<h3>Collection with styles</h3>
<h4>Airline passengers (using class property bindings)</h4>
<ul>
  <li *ngFor="let passenger of passengers; let i = index">
      <span class="status" [class.checked-in]="passenger.checkedIn"></span>
      <span>{{i}}: </span> <span>{{passenger.fullName}} has checked in ?</span>
      <span>{{passenger.checkedIn}}</span>
  </li>
</ul>  


<h4>Airline passengers (using ngclass property binding)</h4>
<ul>
  <li *ngFor="let passenger of passengers; let i = index">
      <span class="status" 
      [ngClass]="{
        'checked-in': passenger.checkedIn,
        'checked-out': !passenger.checkedIn}">  
      </span>
      <span>{{i}}: </span> <span>{{passenger.fullName}} has checked in ?</span>
      <span>{{passenger.checkedIn}}</span>
  </li>
</ul>  

<h4>Airline passengers (using style property binding)</h4>
<ul>
  <li *ngFor="let passenger of passengers; let i = index">
      <span class="status" 
        [style.backgroundColor]="(passenger.checkedIn ? '#2ecc71' : '#c0392b')">  
      </span>
      <span>{{i}}: </span> <span>{{passenger.fullName}} has checked in ?</span>
      <span>{{passenger.checkedIn}}</span>
  </li>
</ul>  


<h4>Airline passengers (using ngStyle property binding)</h4>
<ul>
  <li *ngFor="let passenger of passengers; let i = index">
      <span class="status" 
        [ngStyle]="{'backgroundColor': (passenger.checkedIn ? '#2ecc71' : '#c0392b')}">  
      </span>
      <span>{{i}}: </span> <span>{{passenger.fullName}} has checked in ?</span>
      <span>{{passenger.checkedIn}}</span>
  </li>
</ul>  

`
})

export class CollectionStyledComponent {
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