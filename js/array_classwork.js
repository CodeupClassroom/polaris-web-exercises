'use strict';

alert("Here is array classwork");

let test = [];

/*
array is a memory that stores more than one thing
*/
        test = [100, 100, 90, 95, 90, 100];

        var beagles = [];
        beagles = ["Summer", "Dulce", "Obi"];

        var stuff = [1, 2, 3, "a", 'b', "c", undefined, null, beagles];

        console.log("Dump the whole array");
        console.log(stuff);

        console.log("output the 4th element");
        console.log(stuff[3]);

        console.log("Length of the array");
        console.log(stuff.length);

        console.log("output the entire array with a for loop");
        for (let number = 1; number < stuff.length; number++ ) {
            console.log(stuff[number]);
        }

        var example = [10];
        console.log(example);

        [];

var shapes = ['square', 'rectangle', 'circle', 'triangle'];

// loop through the array and log the values
shapes.forEach(function(shape) {
    console.log('Here is a lovely shape: ' + shape + '.');
});

for (let number = 0; number < shapes.length; number++) {
    console.log('Here is a lovely shape: ' + shapes[number] + '.');
}

