/**
 * Created by jmlegrand on 26/03/17.
 */

import {Component} from "@angular/core";
@Component({
  selector: 'template-ref',
  template: `
    <h3>5- Template ref</h3>
<div>
  <input type="text" #city>
  <button (click)="handleClick(city.value)">Get value</button>
</div>

  `
})

export class TemplateRefComponent {
  constructor() {
  }

  // pass a value from an input using template ref
  // template ref variable: a ref to a particular DOM node accessible anywhere in the template
  handleClick(value: string) {
    console.log("the value passed by is ", value);
  }
}