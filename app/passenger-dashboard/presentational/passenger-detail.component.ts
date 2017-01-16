/**
 * Created by jmlegrand on 15/01/17.
 */
import {Component, Input, Output, EventEmitter} from '@angular/core';
import {Passenger} from "../model/passenger.interface";


@Component({
  selector: 'passenger-detail',
  template: `
<div>
  <span class="status"
    [ngClass]="{
       'checked-in': detail.checkedIn,
       'checked-out': !detail.checkedIn}">
  </span>
  <div>Passenger # {{detail.id}}</div> 
  <div *ngIf="editingMode">
    <input 
      type="text" 
      [value]="detail.fullName"
      (input)="onNameChange(name.value)"
      #name>
  </div>
  <div *ngIf="!editingMode">
      <span>{{detail.fullName}}</span>
  </div>
  
  <div class="date">
    Check in date:
    {{detail.checkedIn ? (detail.checkInDate | date: 'fullDate' | uppercase) : 'not checked in'}}
  </div>
  <div class="children">
    Children : {{detail.children?.length || 0}}
  </div>
  <button (click)="onButtonClick()">{{editingMode ? 'Done' : 'Edit'}}</button>
  <button (click)="onRemove(detail.id)">Remove</button>

</div>
`,
  styleUrls: ['passenger-detail.component.scss']
})


export class PassengerDetailComponent {
  @Input()
  detail: Passenger;

  @Output()
  remove: EventEmitter<any> = new EventEmitter();

  @Output()
  edit: EventEmitter<any> = new EventEmitter();


  editingMode: boolean = false;

  constructor() {
    console.log("PassengerDetailComponent - constructor()")
  }

  onNameChange(name: string) {
    console.log("name passed", name);
    this.detail.fullName = name;
  }

  onButtonClick() {
    if(this.editingMode) {
      this.edit.emit(this.detail);
    }
    this.editingMode = !this.editingMode;
  }

  onRemove(){
    this.remove.emit(this.detail);
  }
}