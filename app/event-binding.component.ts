import {Component} from "@angular/core";
/**
 * Created by jmlegrand on 25/03/17.
 */

@Component({
  selector: 'event-binding',
  template: `<h1>Event binding</h1>
<input
  type="text"
  [value]="name"
  (blur)="blurFn($event)"
  (input)="inputFn($event)">
<button (click)="handleClick()">Reset value</button>
<span> value: {{name}} is now being updated </span>
`
})



// event binding
// to listen to blur event, we use the (name_of_the_event) notation
export class EventBindingComponent {

  name: string = 'LEGRAND';

  constructor() {
  }

  // The blur event is fired when an element has lost focus.
  blurFn(event: any) {
    console.log("event fired", event);
    this.name = event.target.value;
  }

  // The  input event is fired synchronously when the value is changed.
  // as the user types, the interpolated value will get updated
  // impression of a 2 way databindings
  inputFn(event: any) {
    console.log("event fired", event);
    this.name = event.target.value;
  }

  handleClick() {
    console.log("click event fired");
    this.name = 'LEGRAND';
  }

}