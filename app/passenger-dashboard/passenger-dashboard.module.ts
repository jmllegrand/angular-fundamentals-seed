/**
 * Created by jmlegrand on 15/01/17.
 */

// feature module
// all of the logic should lived into a dedicated module

import {NgModule} from '@angular/core';
import {PassengerDashboardComponent} from "./container/passenger-dashboard.component";
import {CommonModule} from "@angular/common";
import {PassengerCountComponent} from "./presentational/passenger-count.component";
import {PassengerDetailComponent} from "./presentational/passenger-detail.component";

@NgModule({
  // all the components relative to the module
  declarations: [
    PassengerDashboardComponent,
    PassengerCountComponent,
    PassengerDetailComponent
  ],
  imports: [
    CommonModule
  ],
  // only PassengerDashboardComponent is declared (as the component is referenced in the root module)
  // the presentational dumb component are child components of PassengerDashboardComponent
  // --> no need to declare them
  exports: [
    PassengerDashboardComponent
  ]

})

export class PassengerDashboardModule {}
