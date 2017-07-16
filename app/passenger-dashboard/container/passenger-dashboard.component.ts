/**
 * Created by jmlegrand on 15/01/17.
 */

import {Component, OnInit} from '@angular/core';
import {Passenger} from "../model/passenger.interface";
import {passengers} from './passengers.data';

@Component({
  selector: 'passenger-dashboard',
  styleUrls: ['passenger-dashboard.component.scss'],
  template: `<div>
  <passenger-count
    [items]="passengers">
  </passenger-count>

    <div *ngFor="let passenger of passengers">
      {{passenger.fullName}}
    </div>

    <!-- you can view the component as an api: 
        - you can pass info into it via input 
        - you can mutate the data 
        - you can notify changes to the parent via output
    once done, you can sent the data back to the component chain -->

    <!-- when the local component fires the remove event, we are going to have a function callback-->
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

  handleRemove(object: Passenger) {
    console.log("remove event fired", object);
    this.passengers = this.passengers.filter((passenger: Passenger) => passenger.id !== object.id);
  }

  handleEdit(object: Passenger) {
    console.log("edit event fired", object);
    console.log("this.passengers BEFORE ", this.passengers);

    this.passengers = this.passengers.map((passenger: Passenger) => {
      if (passenger.id === object.id) {
        // return object;
        passenger = Object.assign({}, passenger, object);
      }
      return passenger;
    });

    console.log("this.passengers AFTER ", this.passengers);
  }

}
