/**
 * Created by jmlegrand on 27/03/17.
 */

// use the optional property notation on the interface
export interface Passenger {
  id: number,
  fullName: string,
  checkedIn: boolean,
  checkInDate: number | null,
  children: Array<Child> | null
}

export interface Child {
  name: string,
  age: number
}