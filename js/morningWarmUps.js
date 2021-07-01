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