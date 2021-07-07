# Objects and Arrays Practice

This is practice to help you with Objects and arrays. There are no test associated with these exercises, so you will need to test them manually.

1. Create a function called `removeDuplicates` that accepts an array of strings and returns the array with all duplicate elements filtered out.
### Examples
```js
removeDuplicates(["bob","squid","samantha","bob"]);
// Should return the following
["bob","squid","samantha"]

removeDuplicates(["tilda","tilda"]);
// Should return the following
["tilda"]

removeDuplicates(["2016-02-13","1994-12-21","2016-02-13","2016-02-13","2005-11-29"]);
// Should return the following
["1994-12-21","2016-02-13","2005-11-29"]
```

2. Create a function called `max` that accepts an array of numbers and returns the largest number from that array.
### Examples
```js
max([4,34,193,2,345,46,0]);
// Should return the following
345

max([-34,83,21,38,-2039,3.2]);
// Should return the following
83

max([54.5,2,34,-93]);
// Should return the following
54.5
```

3. Create a function called `mostOccuringNumber` that accepts an array of numbers and returns the number that occurs the most within that array.
### Examples
```js
mostOccuringNumber([8,93,28,8,27,-62,32,8,-62]);
// Should return the following
8

mostOccuringNumber([8,93,-62.0,28,27,-62,32,8,-62]);
// Should return the following
-62

mostOccuringNumber([73.5,8,0,-3,3.50,8.25,3.50]);
// Should return the following
3.5
```

4. Create a function called `whoIsPassing` that accepts an array of objects, where each object is a student's name and class average (from 0 to 100). Your function will return an array of objects where each object is a student's name and whether he/she is passing. Note that a class average of 60 and higher is passing.
### Examples
```js
var students = [
    {
        name: "Phill Rundy",
        classAverage: 53
    },
    {
        name: "Samuel Moore",
        classAverage: 71
    },
    {
        name: "Mark Tendly",
        classAverage: 84
    },
    {
        name: "Dough Mosh",
        classAverage: 87
    },
    {
        name: "Bran Thomb",
        classAverage: 93
    },
    {
        name: "Mario Yushi",
        classAverage: 82
    },
    {
        name: "Nathan Skywalker",
        classAverage: 52
    }
]

whoIsPassing(students);
// Should return the following
[
    {
        name: "Phill Rundy",
        passing: false
    },
    {
        name: "Samuel Moore",
        passing: true
    },
    {
        name: "Mark Tendly",
        passing: true
    },
    {
        name: "Dough Mosh",
        passing: true
    },
    {
        name: "Bran Thomb",
        passing: true
    },
    {
        name: "Mario Yushi",
        passing: true
    },
    {
        name: "Nathan Skywalker",
        passing: false
    }
]
```

5. Create a function called `dateStringToObject` that accepts a date in the following string format "YYYY-MM-DD" and returns an object that contains month, day, and year properties.
### Examples
```js
dateStringToObject("2016-2-13");
// Should return the following
{month: 2, day: 13, year: 2016}

dateStringToObject("2005-11-29");
// Should return the following
{month: 11, day: 29, year: 2005}

dateStringToObject("1994-12-21");
// Should return the following
{month: 12, day: 21, year: 1994}
```

6. Create a function called `reverseString` that that accepts a string and returns a string with the characters in reverse order.
### Examples
```js
reverseString("squid");
// Should return the following
"diuqs"

reverseString("tilda");
// Should return the following
"adlit"

reverseString("2016-02-13");
// Should return the following
"31-21-6102"
```

7. Create a function called `numberInfo` that accepts a number and returns an object with the properties isPositive, isEven, isZero. The properties should either be true or false based on if the parameter meets the criteria.
### Examples
```js
numberInfo(-1);
// Should return the following
{
    isPositive: false,
    isEven: false,    
    isZero: false
}

numberInfo(6);
// Should return the following
{
    isPositive: true, 
    isEven: true,
    isZero: false
}

numberInfo(0);
// Should return the following
{
    isPositive: false,
    isEven: true,
    isZero: true
}
```