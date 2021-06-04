'use strict;'

//alert("I'm in my dowhile js");

// a random number that represents the number of cones I can sell today
let totalCanSell = Math.ceil(Math.random() * (100 - 50) + 50);
console.log("The number of cones I can sell" +  totalCanSell);


// total cones sold today
let totalSold = 0;

do {
    let conesBought = Math.ceil(Math.random() * (5 - 1) + 1);

    if ((totalSold + conesBought) > totalCanSell) {
        console.log("I'm sorry, I can't sell " + conesBought);
        continue;
    }
    console.log("My customer bought" + conesBought);
    totalSold = totalSold + conesBought;
    console.log("I've sold this many " + totalSold);

} while (totalSold < totalCanSell);
