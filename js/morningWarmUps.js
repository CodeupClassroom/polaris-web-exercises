// TODO: Create a function named countSpaces that accepts a string and returns the total number of spaces in the string.

    function countSpaces(input){
        return input.split(" ").length - 1
    }

    console.log(countSpaces(" Hello there bob "));

// TODO: Add validation to function above, if the argument pass is not a string it should return false.

    function countSpaces(input){

        if (typeof input !== "string"){
            return false
        }

        return input.split(" ").length - 1

    }

// July 6th 2021

// TODO: Create a function named capitalizeAllNames that accepts an array of strings and returns the array with all of its elements capitalized.
// Example:  capitalizeAllNames(["bob","Seth","TOFU","Toyota"]) ---- returns ----> ["BOB","SETH","TOFU","TOYOTA"]

// TODO: Create a function named capitalizeFirstLetter that accepts an array of strings and returns the array with all of the first letters in
//  each string being capitalized while having the rest of the string lowercase look at the example below for reference.
// Example:  capitalizeFirstLetter(["bob","Seth","TOFU","Toyota"]) ---- returns ----> ["Bob","Seth","Tofu","Toyota"]