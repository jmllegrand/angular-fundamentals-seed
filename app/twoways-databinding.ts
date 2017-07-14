import {Component} from "@angular/core";
/**
 * Created by jmlegrand on 26/03/17.
 */

@Component({
  selector: 'twoways-databinding',
  template: `

    <h3>4- Two ways databinding</h3>

    <!-- demonstrate 2 ways databinding: technically a one way databinding which listen to a change via an event -->
<div>
  <span>Using [ngModel] property binding combined with (ngModelChange) event </span>
  <input
    type="text"
    [ngModel]="name"
    (ngModelChange)="handleChange($event)">
  <button (click)="handleClick('name')">Reset value</button>
  <span> value (updated): {{name}}</span>
</div>

<!-- demonstrate 2 ways databinding : compact version-->
<div>
  <span>Using [ngModel] property binding combined with (ngModel) event </span>
  <input
    type="text"
    [(ngModel)]="firstName">
  <button (click)="handleClick('firstName')">Reset value</button>
  <span> value (updated): {{firstName}}</span>

</div>
`
})


export class TwowaysDatabindingComponent {

  name: string = 'LEGRAND';
  firstName : string = 'JM';

  constructor() {
    this.name = 'LEGRAND';
    this.firstName = 'JM';
  }


  // The  input event is fired synchronously when the value is changed.
  handleChange(value: string) {
    console.log("data received fired", value);
    this.name = value;
  }

  handleClick(context: string) {
    console.log("click event fired");
    (context === "name") ? this.name = 'LEGRAND' : this.firstName = "JM";
  }

}