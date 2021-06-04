'use strict';

// alert("Here is break and continue");

var oddNumber;

while (true) {
    oddNumber = parseInt(prompt("Enter an odd number between 1 and 50"));
    if (oddNumber % 2 != 0) {
        break;
    }
}

for (let index = 0; index < 50; index++) {
    if (index == oddNumber) {
        continue
    }
    if (index %2 !=0) {
        console.log("Here is an odd number: " + index);
    }
}
