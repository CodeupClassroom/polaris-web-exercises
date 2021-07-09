// // TODO: Create a function named countSpaces that accepts a string and returns the total number of spaces in the string.
//
//     function countSpaces(input){
//         return input.split(" ").length - 1
//     }
//
//     console.log(countSpaces(" Hello there bob "));
//
// // TODO: Add validation to function above, if the argument pass is not a string it should return false.
//
//     function countSpaces(input){
//
//         if (typeof input !== "string"){
//             return false
//         }
//
//         return input.split(" ").length - 1
//
//     }
//
// // July 6th 2021
//
// // TODO: Create a function named capitalizeAllNames that accepts an array of strings and returns the array with all of its elements capitalized.
// // Example:  capitalizeAllNames(["bob","Seth","TOFU","Toyota"]) ---- returns ----> ["BOB","SETH","TOFU","TOYOTA"]
//
// // TODO: Create a function named capitalizeFirstLetter that accepts an array of strings and returns the array with all of the first letters in
// //  each string being capitalized while having the rest of the string lowercase look at the example below for reference.
// // Example:  capitalizeFirstLetter(["bob","Seth","TOFU","Toyota"]) ---- returns ----> ["Bob","Seth","Tofu","Toyota"]
//
// function capitalizeFirstLetter(array){
//     var tester = [];
//
//     for(let i = 0; i < array.length; i++){
//         tester[i] = array[i].charAt(0) + array[i].substr(1);
//     }
//     return tester;
// }
// // July 7th 2021
// // TODO: Create a method on the object down below named getFullName that when called returns the users full name using the "this" key term.
// // Example: personOne.getFullName() ---- returns ----> "silvia floopertan"
//
var personOne = {
        firstName: "silvia",
        lastName: "floopertan",
        ageInYears: 34,
        heightInInches: 65
}
//
// // TODO: Create a method on the object down below named getNicelyFormattedFullName that when called returns the
// //  users full name with both first letters in the names being capitalized look at example down below for more reference.
// // Example: personOne.getNicelyFormattedFullName() ---- returns ----> "Dan Valdarez"
//
var personTwo = {
    firstName: "dan",
    lastName: "valdarez",
    ageInYears: 61,
    heightInInches: 73
}
//
// // TODO: Create a method on the object below that gives us the behavior that the example implies.
// // Example: personThree.intro() ---- returns ----> "Hello, My name is Arlene Martinez and I am 25 years old"
//
var personThree = {
    firstName: "arlene",
    lastName: "martinez",
    ageInYears: 25,
    heightInInches: 62
}
//

// July 8th 2021

// Part 1
// TODO: Create a function that takes an array of strings and returns an array of objects
//  where each object has 2 properties: originalString and countOfLetters
// Example: input: ["hello", "dave"]
//          returns: [
//                    { "originalString":"hello", lengthOfOriginalString:5 },
//                    { "originalString":"dave", lengthOfOriginalString:4 }
//                   ]

function arrayOfStringsToObjects(arrayStrings){

    var arrayObjects = []

    for (let i = 0; i < arrayStrings.length; i++) {
        // console.log(arrayStrings[i])
        arrayObjects.push({ originalString:arrayStrings[i], lengthOfOriginalString:arrayStrings[i].length })
    }

    return arrayObjects;

}

var arrayOfObjects = arrayOfStringsToObjects(["hello", "dave"])
console.log(arrayOfObjects)

// Part 2
// TODO: Create a function that takes the array of objects from PART 1
//  and returns a string of all of the originalStrings concatenated with spaces in between
// Example: input: [
//                    { "originalString":"hello", lengthOfOriginalString:5 },
//                    { "originalString":"dave", lengthOfOriginalString:4 }
//                  ]
//          returns: "hello dave"

function arrayOfObjectsToStrings(arrayObjectsParam){

    var results = []

    arrayObjectsParam.forEach(function (singleObject){

        results.push(singleObject.originalString)

    })

    return results.join(" ")


}

console.log(arrayOfObjectsToStrings(arrayOfObjects))


// TODO: Create a function named getTallUsers that accepts an array of objects. The objects in the array will be in the same format
//  as PersonOne, PersonTwo, and PersonThree. The functions job is to return an array of users that have heightInInches equal to or greater than 65.

var people = [personOne,personTwo,personThree];

function getTallUsers(arrayOfObjects){
    var tallUsers = [];

    for (let i = 0; i < arrayOfObjects.length; i++) {

        var currentUser = arrayOfObjects[i];

        var currentUsersHeight = currentUser.heightInInches;

        var userIsTallEnough = currentUsersHeight >= 65

        if (userIsTallEnough){
            tallUsers.push(currentUser)
        }

    }

    return tallUsers;
}

console.log(getTallUsers(people));

// Example: getTallUsers(people)
// ---- returns ----> [{firstName: "silvia", lastName: "floopertan", ageInYears: 34, heightInInches: 65},
//                     {firstName: "dan", lastName: "valdarez", ageInYears: 61, heightInInches: 73}]
