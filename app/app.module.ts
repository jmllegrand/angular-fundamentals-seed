import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {FormsModule} from "@angular/forms";
import {CollectionsComponent} from "./collections.component";
import {CollectionsStyledComponent} from "./collections-styled.component";
import {CollectionsFilteredComponent} from "./collections-filtered.component";
import {CollectionsSafeNavigationComponent} from "./collections-safe-navigation.component";

// use the NgModule decorator to create the application root module called AppModule
// this module is referenced in the main.ts to bootstrap the application

@NgModule({
  // 'declarations' property is used to register the components defined in the application (AppComponent)
  declarations: [
    AppComponent,
    CollectionsComponent,
    CollectionsStyledComponent,
    CollectionsFilteredComponent,
    CollectionsSafeNavigationComponent
  ],
  // 'imports' to import the other modules
  // FormsModule required to use 2 ways databindings
  imports: [
    BrowserModule,
    FormsModule
  ],
  // 'bootstrap' property is specific to the root module definition
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {
}
