import {Component} from "@angular/core";
/**
 * Created by jmlegrand on 25/03/17.
 */

@Component({
  selector: 'property-binding',
  template: `

    <h3>2- Property binding</h3>
  <span>{{title}}</span> is equivalent to <span [innerHTML]="title"></span> <br>
  <img [src]="logo"> is equivalent to <img src="{{logo}}"> <br>
    <div>
      <span>Using [value] as a property binding: </span>
      <input type="text" [value]="name">
      <span>value (NOT updated): {{name}}</span> <br>
    </div>
    <div>
      <span>Using [ngModel] as a (one way) property binding: </span>
      <input type="text" [ngModel]="firstName">
      <span>value (NOT updated): {{firstName}}</span>
    </div>
`
})


export class PropertyBindingComponent {

  // Property Binding ties with 'one way' data flow.
  // The data comes down from the class, binds to the template, looks at the property (ie innerHTML) and set the property content
  title: string;
  logo: string;
  name: string;
  firstName: string;

  constructor() {
    this.title = 'This is property binding sample';
    this.logo = 'img/apple.png';
    this.name = 'LEGRAND';
    this.firstName = 'JM';
  }
}