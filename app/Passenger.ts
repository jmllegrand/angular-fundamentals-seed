/**
 * Created by jmlegrand on 14/01/17.
 */


interface Child {
  name: string,
  age: number
}

export interface Passenger {
  id: number,
  fullName: string,
  checkedIn: boolean,
  checkInDate?: Date,
  children: Child[]
}
