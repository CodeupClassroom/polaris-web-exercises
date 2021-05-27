"use strict";

//... rest of javascript code

// console.log("Hello World!");
 console.log("Hello from external JavaScript");

alert("Welcome to my website");

var color;
color = prompt("What is your favorite color");
var message;
message = "Great, " + color + " is my favorite color too!"
alert(message);

// Answer for Exercise 3 #1 from the previous homework
// https://java.codeup.com/javascript-i/introduction/working-with-data-types-operators-and-variables/

/*
You have rented some movies for your kids: The little mermaid (for 3 days),
Brother Bear (for 5 days, they love it), and Hercules (1 day, you don't know
yet if they're going to like it). If price for a movie per day is $3,
how much will you have to pay?
 */

alert("The price for the movies is: " + (3+5+1)* 3);

alert("I am getting paid: " + ((400 * 10) + (380 * 6) + (350 * 4)));

// the following line will show the OK/CANCEL confirm dialog
// var confirmed = confirm('Are you sure you want to do XYZ?');
// console.log(confirmed); // will be either true or false

//var userInput = prompt('Please type something:');
//console.log('The user entered: ' + userInput);
//console.log(typeof(userInput));

var full = confirm("Is the class full?");
var conflict = confirm("Is there a conflict");
alert("You can enroll in class:" + (!full && !conflict));

var premium = confirm("Are you a premium member");
var quantity = Number(prompt("How many items did you buy"));
var expired = confirm("Is the coupon expired");
alert("You can get the discount" + ((!expired) && (premium || (quantity > 2))));


var username = 'codeup';
var password = 'notastrongpassword';


var password_is_five_characters = password.length >= 5;
var password_doesnt_contain_username = !password.includes(username);
var username_less_than_20_chars = username.length <= 20;
var contains_no_whitespace = password === password.trim() && username === username.trim();

console.log(password_is_five_characters);
console.log(password_doesnt_contain_username);
console.log(username_less_than_20_chars);
console.log(contains_no_whitespace);
