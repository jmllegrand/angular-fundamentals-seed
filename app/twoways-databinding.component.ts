import {Component} from "@angular/core";
/**
 * Created by jmlegrand on 26/03/17.
 */

@Component({
  selector: 'twoways-databinding',
  template: `

<h3>Two ways databinding</h3>

<!-- demonstrate 2 ways databinding -->
<div>
  <input
    type="text"
    [ngModel]="name"
    (ngModelChange)="handleChange($event)">
  <button (click)="handleClick()">Reset value</button>
  <span> value: {{name}} is now being updated </span>
</div>

<!-- demonstrate 2 ways databinding : compact version-->
<div>
  <input
    type="text"
    [(ngModel)]="firstName">
  <button (click)="handleClick()">Reset value</button>
  <span> value: {{firstName}} is now being updated </span>

</div>
`
})


export class TwowaysDatabindingComponent {

  name: string = 'LEGRAND';
  firstName : string = 'JM';

  constructor() {
  }

  // The  input event is fired synchronously when the value is changed.
  handleChange(value: string) {
    console.log("data received fired", value);
    this.name = value;
  }

  handleClick() {
    console.log("click event fired");
    this.name = 'LEGRAND';
  }

}