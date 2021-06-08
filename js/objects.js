(function() {
    "use strict";

    /**
     * TODO:
     * Create an object with firstName and lastName properties that are strings
     * with your first and last name. Store this object in a variable named
     * `person`.
     *
     * Example:
     *  > console.log(person.firstName) // "Rick"
     *  > console.log(person.lastName) // "Sanchez"
     */

    var person = {};
    /*
    person = {
        firstName : "Kathleen",
        lastName : "Weaver"
    } */
    person.firstName = "Kathleen";
    person.lastName = "Weaver";

    /*

    var person = new Object();
    person.firstName = "Kathleen";
    person.lastName = "Weaver";

     */



    console.log(person.firstName);
    console.log(person.lastName);



    /**
     * TODO:
     * Add a sayHello method to the person object that returns a greeting using
     * the firstName and lastName properties.
     * console.log the returned message to check your work
     *
     * Example
     * > console.log(person.sayHello()) // "Hello from Rick Sanchez!"
     */

    person.sayHello = function () {
        return "Hello from " + person.firstName + " " + person.lastName + "!";
    };

    console.log(person.sayHello());


    //Say hello

    person.sayHello = function () {
        let message = "Hello from " + person.firstName + " " + person.lastName + "!";
        console.log(message);
    }


    person.sayHello();


    /** TODO:
     * HEB has an offer for the shoppers that buy products amounting to
     * more than $200. If a shopper spends more than $200, they get a 12%
     * discount. Write a JS program, using conditionals, that logs to the
     * browser, how much Ryan, Cameron and George need to pay. We know that
     * Cameron bought $180, Ryan $250 and George $320. Your program will have to
     * display a line with the name of the person, the amount before the
     * discount, the discount, if any, and the amount after the discount.
     *
     * Uncomment the lines below to create an array of objects where each object
     * represents one shopper. Use a foreach loop to iterate through the array,
     * and console.log the relevant messages for each person
     */

    var shoppers = [
        {name: 'Cameron', amount: 180},
        {name: 'Ryan', amount: 250},
        {name: 'George', amount: 320}
    ];

   shoppers.forEach(function (shopper) {
       if (shopper <= 200) {
           console.log(shopper.name + " owes: $" + shopper.amount);
       }
       else {
           let discount = shopper.amount * .12;
           let total = shopper.amount - discount;
           console.log(shopper.name + " gets a discount of $ " + discount + " owes: $" + total);
       }
   });

    /*
    // for each
    shoppers.forEach(function (shopper) {
        let message = shopper.name + " spent: " + shopper.amount;
        if (shopper.amount > 200) {
            message = message + " gets a 12% discount and owes: $" + (shopper.amount - (shopper.amount * .12));
        } else {
            message = message + " and owes $" + shopper.amount;
        }
        console.log(message);
    })
    */

    /** TODO:
     * Create an array of objects that represent books and store it in a
     * variable named `books`. Each object should have a title and an author
     * property. The author property should be an object with properties
     * `firstName` and `lastName`. Be creative and add at least 5 books to the
     * array
     *
     * Example:
     * > console.log(books[0].title) // "The Salmon of Doubt"
     * > console.log(books[0].author.firstName) // "Douglas"
     * > console.log(books[0].author.lastName) // "Adams"
     */

    let books = [
        {   title: "The Salmon of Doubt", author: { firstName: "Douglas", lastName: "Adams" }},
        {
            title: "Kitty and the Midnight Hour",
            author: {
                firstName: "Carrie",
                lastName: "Vaughn"
            }
        },
        {
            author: {
                firstName: "Ann",
                lastName: "McCaffery",
            title: "Dragonriders of Pern",
            }
        },
        {
            title: "Kitty goes to Washington",
            author: {
                firstName: "Carrie",
                lastName: "Vaughn"
            }
        },
        {
            title: "How to Train Beagles",
            author: {
                firstName: "Kathleen",
                lastName: "Weaver"
            }
        }
    ];

    /*
    let books = [];
    books.push(createBook("The Salmon of Doubt", "Doug Adams"));
    books.push(createBook("Kitty and the Midnight Hours", "Carrie Vaughn"))
    books.push(createBook("Dragon Riders of Pern", "Ann McCaffery"));
    books.push(createBook("Kitty goes to Washington", "Carrie Vaughn"));
    books.push(createBook("How to Train Beagles", "Kathleen Weaver"));

     */

    console.log(books[0].title);
    console.log(books[0].author.firstName + " " + books[0].author.lastName);

    /**
     * TODO:
     * Loop through the books array and output the following information about
     * each book:
     * - the book number (use the index of the book in the array)
     * - the book title
     * - author's full name (first name + last name)
     *
     * Example Console Output:
     *
     *      Book # 1
     *      Title: The Salmon of Doubt
     *      Author: Douglas Adams
     *      ---
     *      Book # 2
     *      Title: Walkaway
     *      Author: Cory Doctorow
     *      ---
     *      Book # 3
     *      Title: A Brief History of Time
     *      Author: Stephen Hawking
     *      ---
     *      ...
     */

    /*
    //For each loop
    for (let index = 0; index < books.length; index++) {
        showBookInfo(books[index], index);
        // console.log("Book # " + index);
        // console.log("Title:" + books[index].title);
        // console.log("Author:" + books[index].firstName + " " + books[index].lastName);
        // console.log("---");
    }
    */
    /**
     * Bonus:
     * - Create a function named `createBook` that accepts a title and author
     *   name and returns a book object with the properties described
     *   previously. Refactor your code that creates the books array to instead
     *   use your function.
     * - Create a function named `showBookInfo` that accepts a book object and
     *   outputs the information described above. Refactor your loop to use your
     *   `showBookInfo` function.
     */

    /*
    //Createbook
        function createBook(title, author) {
        // handle the author -- split the string by the space
        let temp = author.split(" ");
        let firstName = temp[0];
        let lastName = temp[1];
        return {
            title: title,
            author: {
                firstName: firstName,
                lastName: lastName
            }
        };
    }
    /*

    var bookTest = createBook("Discord's Apple", "Carrie Vaughn");
    console.log(bookTest);
    books.push(bookTest);
    console.log(books);

    function showBookInfo(book, number) {
        console.log("Book # " + number);
        console.log("Title:" + book.title);
        console.log("Author:" + book.firstName + " " + books.lastName);
        console.log("---");
    }


*/
// end of iffy funciton

})();
