import {Component} from "@angular/core";
/**
 * Created by jmlegrand on 26/03/17.
 */


@Component({
  selector: 'conditional',
  template: `<h3>Conditionnal (oneway databinding)</h3>
<input
  type="text"
  [value]="wineName"
  (input)="handleChange($event.target.value)">

<span *ngIf="wineName.length > 4"> Searching for ...  {{wineName}}</span>

<!-- web components has a template element -->
<template [ngIf]="wineName.length > 4">
  <span> Searching for ...  {{wineName}}</span>
</template>

<div>
</div>
`
})


export class ConditionalComponent {

  wineName: string = '';

  constructor() {
  }
  handleChange(value: string) {
    console.log("event fired", event);
    this.wineName = value;
  }
}