import {Component} from "@angular/core";
/**
 * Created by jmlegrand on 25/03/17.
 */

@Component({
  selector: 'property-binding',
  template: `
  
  <h3>Property binding</h3>
  
  <span>{{title}}</span> is equivalent to <span [innerHTML]="title"></span> <br>
  
  <img [src]="logo"> is equivalent to <img src="{{logo}}"> <br>
  
  <input type="text" [value]="name">
  <span>{{name}}</span> <br>
  
  <!-- Instead of binding to the value property, we use ngModel -->
  <input type="text" [ngModel]="firstName">
  <span>{{firstName}}</span>
`
})


export class PropertyBindingComponent {

  // property binding: how we can pass data from a component class into a template by binding it to an element
  // we use the [square_bracket_notation] 
  // property binding ties with 'one way' data flow

  title: string;
  logo: string = 'img/apple.png';
  name: string = 'LEGRAND';
  firstName: string = 'JM';

  constructor() {
    this.title = 'This is property binding sample';
  }
}