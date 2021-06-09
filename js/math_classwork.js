/* alert("in math_classwork");
 */

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

console.log(getRandomInt(1,2));    // coin toss
console.log(getRandomInt(1,52));   // card
console.log(getRandomInt(1,6));    // dice


console.log(Math.round(23.5234));   //round

console.log(Math.floor(23.52340));  // integer smaller than the argument
console.log(Math.floor(23));


console.log(Math.ceil(23.52340));  // integer larger than the argument
console.log(Math.ceil(23));

console.log(Math.pow(3, 3));     // raise to a power

console.log(Math.sqrt(25));     // square root

console.log(Math.E);        // natural logarithms

console.log(Math.PI);           // pi   3.1415