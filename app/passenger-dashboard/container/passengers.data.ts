import {Passenger} from "../model/passenger.interface";

export const passengers: Passenger[] = [{
  id: 1,
  fullName: 'Stephen',
  checkedIn: true,
  checkInDate: new Date(2016, 11, 17),
  children: [{name: 'John', age: 4}, {name: 'Nina', age: 1}]
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
  checkInDate: new Date(2017, 0, 13),
  children: [{name: 'Chloe', age: 14}, {name: 'Nanon', age: 12}]
},

  {
    id: 4,
    fullName: 'Fabrice',
    checkedIn: true,
    checkInDate: new Date(2018, 0, 13),
    children: [{name: 'Nicolas', age: 5}, {name: 'Sybille', age: 12}]
  }
];