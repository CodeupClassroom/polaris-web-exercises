'use strict';

alert("Here is while");

let value = 2;

while (value < 65537) {
    console.log(value);
    value = value * 2;

}

// Determine the total ice cream to be sold
let random = Math.ceil(Math.random() * (100 - 50) + 50);
console.log("Total to be sold: " + random);

// running total
let total = 0;

do {
    // How many cones were bought
    let bought = Math.ceil(Math.random() * (5 - 1) + 1);
    total = total + bought;
    console.log("Customer bought: " + bought);
    console.log("Total Sold: " + total);
} while (total < random);