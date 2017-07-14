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
  // use inline template
  template: `
    <div class="app">
      <!-- Using the curly brace notation -->
  <interpolation></interpolation>

      <!-- Property Binding is how to pass data a component class into a template by binding to particular element -->
      <!-- we use the [square_bracket_notation] around the property name we want to bind to -->
  <property-binding></property-binding>

      <!-- Event binding -->
      <!-- To listen to blur event, we use the (name_of_the_event) notation -->
      <event-binding></event-binding>

      <twoways-databinding></twoways-databinding>

      <template-ref></template-ref>
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
