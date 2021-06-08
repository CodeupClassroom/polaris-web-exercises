
// THis is one way to create an object in JavaScript
// var car = new Object()

// Here is another way to create a object
var car = {};


car = {
    model: "Civic",
    numberOfCylinders: 4,
    numberOfDoors: 4,
    numberOfSeats: 5,
    transmission: "automatic",
    year: 2012,
    make: "Honda"
}

var person = {
    name: "Bob",
    heightInInches: 68,
    age: 45,
}

var child = {
    name: "Matilda",
    age: 2
}

person.daughter = child;

car["owner"] = person;

console.log(car)

// var arry = [1,2,3,4,5]

// var infoFunction = function (name){
//     if (name !== undefined){
//         return "Hi, my name is " + name + " and I own a " + car.year + ", " + car.make + " " + car.model
//     }
//     return this.year + ", " + this.make + " " + this.model
// }



car.info = infoFunction

carTwo = {
    make: "Ford",
    model: "Fusion",
    numberOfCylinders: 4,
    numberOfDoors: 4,
    numberOfSeats: 4,
    transmission: "automatic",
    year: 2016,
    owner: {
        getName: function ()
        {
            return this.name;
            },
        name: "Sally", heightInInches: 68, age: 45, son: { name: "Rango", age: 16}},
    info: infoFunction
}


function infoFunction(arg){

    if (arg === true){
        return "Hi, my name is " + this.owner.name + " and I own a " + this.year + ", " + this.make + " " + this.model
    }

    return this.year + ", " + this.make + " " + this.model
}