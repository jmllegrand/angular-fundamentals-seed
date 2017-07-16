/**
 * Created by jmlegrand on 15/01/17.
 */
import {Component, Input, Output, EventEmitter, OnChanges, OnInit, SimpleChanges} from "@angular/core";
import {Passenger} from "../model/passenger.interface";


@Component({
  selector: 'passenger-detail',
  styleUrls: ['passenger-detail.component.scss'],
  template: `
    <div>
  <span
    class="status"
    [class.checked-in]="detail.checkedIn">
  </span>
      <div>Passenger # {{detail.id}}</div>
      <!-- in editing mode, display the input -->
      <div *ngIf="editingMode">
        <input
          type="text"
          [value]="detail.fullName"
          (input)="onNameChange(name.value)"
          #name>
      </div>
      <!-- in NOT editing mode, display the label -->
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
      <button (click)="toggleEdit()">{{editingMode ? 'Done' : 'Edit'}}</button>
      <button (click)="onRemove(detail.id)" [ngClass]="{'disabled': editingMode}">Remove</button>

    </div>
  `
})


export class PassengerDetailComponent implements OnInit, OnChanges {

  @Input() detail: Passenger;
  @Output() remove: EventEmitter<any> = new EventEmitter();
  @Output() edit: EventEmitter<any> = new EventEmitter();


  editingMode: boolean = false;

  constructor() {
    console.log("PassengerDetailComponent - constructor()");
  }

  // ngOnChanges get called before ngOnInit
  ngOnChanges(changes) {
    console.log("PassengerDetailComponent - ngOnChanges()");
    console.log("changes detected", changes);
    if (changes.detail) {
      this.detail = Object.assign({}, changes.detail.currentValue);
    }
  }

  ngOnInit() {
    console.log("PassengerDetailComponent - ngOnInit()");
    console.log("detail", this.detail);
  }


  // we are changing the local state of detail.fullname => the local state is now persisted
  onNameChange(name: string) {
    console.log("name passed", name);
    this.detail.fullName = name;
  }

  toggleEdit() {
    if (this.editingMode) {
      this.edit.emit(this.detail);
    }
    this.editingMode = !this.editingMode;
  }

  // this.detail is the local state that has (potentially) changed
  onRemove() {
    this.remove.emit(this.detail);
  }
}