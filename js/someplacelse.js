
// This is stuff I used to teach loops

/!* Set this up for testing, uncomment to test
alert("I have this working!");


var message = '';

// var howmany = prompt("How many?");

for (let index = 0; index <= 10; index++) {
    message = message + "index is: " +index + "\n";
}

alert(message);

alert(index);

/*

function showMultiplicationTable(x){
    for(let y = 1; y<= 10; y++) {
        console.log(x + " x " + y + " = " + (x*y))
    }
}

console.log(showMultiplicationTable(7))

*/
/*

for (let ev = 0; ev<=10; ev++) {
    let random = Math.ceil(Math.random() * (200 - 20) + 20);
    if (random % 2 !== 0) {
        console.log(random + " is odd");}
    else {
        console.log(random + " is even")
    }

}

/*

for (let ev = 0; ev<=10; ev++) {
    let random = Math.floor(Math.random() * (200 - 1) + 1);
    // do stuff with random numbers

}

*/


/*

var notDone = true;  // loop

while (notDone) {
    //do something
    notDone = confirm("Do you want to go again");
}

*/

var notDone = true;

do {
    /// do stuff
    alert("Doing stuff");
    notDone = confirm("Again?");
} while(notDone);

var badData = false;

function validateNumber() {
    do {
        var value = Prompt("Enter a number");
        badData = typeof (value) != "number";
        while (!badData) ;
    }
    return value;
}



