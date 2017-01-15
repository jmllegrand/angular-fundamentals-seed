/**
 * Created by jmlegrand on 15/01/17.
 */

// feature module
// all of the logic should lived into a dedicated module

import {NgModule} from '@angular/core';
import {PassengerDashboardComponent} from "./container/passenger-dashboard.component";
import {CommonModule} from "@angular/common";

@NgModule({
  // all the components relative to the module
  declarations: [
    PassengerDashboardComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PassengerDashboardComponent
  ]

})

export class PassengerDashboardModule {}
