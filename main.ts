import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';

import {AppModule} from './app/app.module';


// import {uppercase} from "./formatter";


/*
var myName: string = "jean-michel legrand";
console.log(uppercase(myName));
*/

platformBrowserDynamic().bootstrapModule(AppModule);

function ShoppingList() {
  this.groceries = [];
}

// add a public method
ShoppingList.prototype.addItem = function (item) {
  // immutable way
  this.groceries = this.groceries.concat(item);
};

ShoppingList.prototype.removeItem = function (item) {
  this.groceries = this.groceries.filter(function (grocery) {
    return item !== grocery;
  });
};

// create an instance
var myList = new ShoppingList();
myList.addItem("banana");
myList.addItem("apple");
myList.addItem("pear");

console.log("when adding stuff", myList.groceries);

myList.removeItem("pear");
console.log("when removing an item", myList.groceries);


/*
 class ShoppingListTS {
 public groceriess: string[];

 constructor() {
 this.groceriess = [];
 }

 addItem(item) {
 this.groceriess = [...this.groceriess, item];
 }

 removeItem(item) {
 this.groceriess.filter((grocery) => item !== grocery)
 }
 }

 const myShoppingListTS = new ShoppingListTS();
 myShoppingListTS.addItem("Fraise");
 myShoppingListTS.addItem("Framboise");
 console.log("when adding stuff", myShoppingListTS);

 myShoppingListTS.removeItem("Framboise");
 console.log("when removing stuff", myShoppingListTS);

 */

