import {Child, Passenger} from "./passenger";
/**
 * Created by jmlegrand on 14/07/17.
 */


export const passengers: Passenger[] = [
  {
    id: 1,
    fullName: 'Stephen',
    checkedIn: true,
    checkInDate: 1490742000000,
    children: [{
      name: 'Mike',
      age: 2
    }]

  }, {
    id: 2,
    fullName: 'Nathalie',
    checkedIn: false,
    checkInDate: null,
    children: null
  }, {
    id: 3,
    fullName: 'Apolline',
    checkedIn: true,
    checkInDate: 1499606000000,
    children: null

  }, {
    id: 4,
    fullName: 'Marjorie',
    checkedIn: true,
    checkInDate: 1399606000000,
    children: [{
      name: 'Apolline',
      age: 1
    }]
  }
];