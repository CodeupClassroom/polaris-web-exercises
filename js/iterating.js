(function(){
    "use strict";

    /**
     * TODO:
     * Create an array of 4 people's names and store it in a variable called
     * 'names'.
     */

    let names = ["John", "Paul", "Ringo", "George"];

    /**
     * TODO:
     * Create a log statement that will log the number of elements in the names
     * array.
     */

    console.log(names.length);

    console.log("");

    /**
     * TODO:
     * Create log statements that will print each of the names individually by
     * accessing each element's index.
     */

    console.log(names[0]);
    console.log(names[1]);
    console.log(names[2]);
    console.log(names[3]);

    console.log("");
    /**
     * TODO:
     * Write some code that uses a for loop to log every item in the names
     * array.
     */

    // loop through the array and log the values
    for (let index = 0; index < names.length; index++) {
        console.log(names[index]);
    }

    console.log("");

    /**
     * TODO:
     * Refactor your above code to use a `forEach` loop
     */
    // loop through the array and log the values
    names.forEach(function(name) {
        console.log(name);
    });

    console.log("");

    /**
     * TODO:
     * Create the following three functions, each will accept an array and
     * return an an element from it
     * - first: returns the first item in the array
     * - second: returns the second item in the array
     * - last: returns the last item in the array
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     * Example:
     *  > first([1, 2, 3, 4, 5]) // returns 1
     *  > second([1, 2, 3, 4, 5]) // returns 2
     *  > last([1, 2, 3, 4, 5]) // return 5
     */

     function first(array) {
         return array[0];
    }

    function second(array) {
         return array[1];
    }

    function last(array) {
         return array[array.length -1 ];
    }

    console.log(first([1, 2, 3 ,4 ,5]));
    console.log(second([1, 2, 3 ,4 ,5]));
    console.log(last([1, 2, 3 ,4 ,5]));
})();
