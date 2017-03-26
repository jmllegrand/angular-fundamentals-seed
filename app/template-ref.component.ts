/**
 * Created by jmlegrand on 26/03/17.
 */

import {Component} from "@angular/core";
@Component({
  selector: 'template-ref',
  template: `
<h3>Remplate ref</h3>
<div>
  <input type="text" #city>
  <button (click)="handleClickCity(city.value)">Get value</button>
</div>

  `
})

export class TemplateRefComponent {
  constructor() {
  }

  handleClickCity(value: string) {
    console.log("the value passed by is ", value);
  }
}