'use strict';

//alert("Here is break and continue");

/*
var oddNumber;

while (true) {
    oddNumber = parseInt(prompt("Enter an odd number between 1 and 50"));
    if (oddNumber % 2 != 0) {
        break;
    }
}

console.log("Number to skip is" + number);

for (let index = 0; index < 50; index++) {
    if (index == oddNumber) {
        console.log("Yikes! Skipping number: " + index);
        continue
    }
    if (index %2 ==0) {
        continue;
    }
    console.log("Here is an odd number: " + index);
}
*/

// in the loop

let odd_Number = 0;

// checking for valid input
while (true) {
    odd_Number = prompt("Enter a odd number between 1 and 50");
    if ((odd_Number > 1) && (odd_Number <= 50)) {
        if (odd_Number % 2 == 1) {
            break;
        }
    }
}

console.log("Number to skip is: " + odd_Number);

// outputing the required text
for (let number = 1; number <50; number = number + 2) {
    if (odd_Number == number) {
        console.log("Yikes! Skipping number: " + odd_Number);
        continue;
    }
    console.log("Here is an odd number: " + number);
}
