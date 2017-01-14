import {Component} from '@angular/core';

// Component is a decorator

/**
 * Component decorator allows you to mark a class as an Angular component and provide additional
 * metadata that determines how the component should be processed, instantiated and used at
 * runtime.
 */

// Component is just a function
// Component()
// We prefix it with the @ as this is a decorator to tell angular to register it as an Component
// usage of backtick (es6 features)
@Component({
  selector: 'app-root',
  styleUrls: ['app.component.scss'],
  template: `
    <div class="app">
     {{title + '!' }}
      <h1>{{title}}</h1>
      <h1 [innerHTML]="title"></h1>

     <div>
        {{numberOne + numberTwo}}
     </div>
     <div>
        {{isHappy ? ':)' : ':(' }}
     </div>
     <img [src]="logo"> is equivalent to <img src="{{logo}}">
     <div>
        <input type="text" [value]="name"> </div> <br/>      
        {{name}} is not being updated 
     </div>
  `
})

// use inline template
// interpolation : all properties expose in the class are available in the template

// property binding: how we can pass data from a component class into a template by binding it to an element
// we use the [square_bracket_notation] 
// property binding ties with 'one way' data flow

export class AppComponent {

  // declare the property
  title: string;
  numberOne: number = 1;
  numberTwo: number = 2;
  isHappy: boolean = true;
  logo: string = 'img/apple.png';
  name: string = 'JM';

  // we set value of the property 'title' in the constructor
  constructor() {
    this.title = "Ultimate angular";
  }
}
