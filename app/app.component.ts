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
  // use inline template
  template: `
<div class="app">  
  <interpolation></interpolation>
  <property-binding></property-binding>
  <event-binding></event-binding>
  <twoways-databinding></twoways-databinding>
  <template-ref></template-ref>
  <conditional></conditional>
</div>

  `
})

export class AppComponent {

  // declare the property
  title: string;

  // we set value of the property 'title' in the constructor
  constructor() {
    this.title = "Ultimate angular";
  }

}
