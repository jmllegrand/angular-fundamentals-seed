import {Component} from "@angular/core";
/**
 * Created by jmlegrand on 25/03/17.
 */

@Component({
  selector: 'event-binding',
  template: `<h3>3- Event binding</h3>
  <!--   Reminder: the blur event is fired when an element has lost focus -->
  <span>Using (blur) event </span>
  <input
    type="text"
    [value]="name"
    (blur)="handleBlur($event)">
  <span> value(updated): {{name}} </span>
  <br>

  <span>Using (input) event </span>
  <input
    type="text"
    [value]="firstname"
    (input)="handleInput($event)">
  <span> value(updated): {{firstname}} </span>

  <button (click)="handleClick()">Reset value</button>
  `
})




export class EventBindingComponent {

  name: string;
  firstname: string;

  constructor() {
    this.name = 'LEGRAND';
    this.firstname = 'Apolline';
  }

  handleBlur(event: any) {
    console.log("event fired", event);
    this.name = event.target.value;
  }

  // The input event is fired synchronously when the value is changed.
  // as the user types, the interpolated value will get updated
  // impression of a 2 ways databinding
  handleInput(event: any) {
    console.log("event fired", event);
    this.firstname = event.target.value;
  }

  handleClick() {
    console.log("click event fired");
    this.name = 'LEGRAND';
    this.firstname = 'Apolline'
  }

}