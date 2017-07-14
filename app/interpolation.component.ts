/**
 * Created by jmlegrand on 25/03/17.
 */

import {Component} from "@angular/core";
@Component({
  selector: 'interpolation',
  template: `
    <h3>1- Interpolation expression</h3>
    {{subtitle + '!' }}
    <div>
      {{numberOne + numberTwo}}
    </div>
    <div>
      <span>Happy face? </span> {{isHappy ? ':)' : ':(' }}
    </div>
`
})


export class InterpolationComponent {
  // interpolation : all properties expose in the class are available in the template
  subtitle: string;
  numberOne: number;
  numberTwo: number;
  isHappy: boolean = true;

  constructor() {
    this.subtitle = 'This is a test';
    this.numberOne = 1;
    this.numberTwo = 2;
  }
}