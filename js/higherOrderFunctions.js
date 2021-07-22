let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];



const filteredNumbers = numbers.filter(function (singleNumber){

    if (singleNumber % 3 === 0){
        return true
    }else{
        return false
    }

})


console.log(filteredNumbers);

const users = [
    {name:"walter",job:"intern"},
    {name:"sally",job:"workerB"},
    {name:"tim",job:"workerB"},
    {name:"butler",job:"intern"},
    {name:"sherm'an",job:"CEO"},
]


const higherManagmentUsers = users.filter(function (user){

    if (user.job === "CEO"){
        return true
    }else{
        return false
    }

})

// const interns = users.filter(function (user){
//     return user.job === "intern"
// })

const internFilterCallback = user => {
    return user.job === "intern"
}

const interns =  users.filter(internFilterCallback)



// const workers = users.filter(user => user.job === "workerB")


console.log("Here are all the higher managment users",higherManagmentUsers);
console.log("Here are all the interns",interns);
// console.log("Here are all the workers",workers);


const numberDoubles = numbers.map(function (number) {

    return number * 2;

});


const workersDetails = [
    {name:"walter",job:"workers",pay:12},
    {name:"sally",job:"workers",pay:13},
    {name:"tim",job:"workers",pay:15},
    {name:"butler",job:"workers",pay: 10},
    {name:"sherm'an",job:"workers", pay: 7.25},
]

// THis is how you could return a new array of objects with updated properties, without affecting the original.
const updatedWorkerDetails = workersDetails.map(function (worker) {
    return {...worker,pay: worker.pay * 1.05 }
})

console.log("old Details",workersDetails)
console.log("updated Details",updatedWorkerDetails)


let total = 0
for (let i = 0; i < numbers.length; i++) {
    total += numbers[i]
    console.log(total);
}


const sum = numbers.reduce((currentTotal, currentNumber) => {
    return currentTotal + currentNumber;
}, 0);


const randomNumbers = [58,82,102,100000000,4343,2];

const largestNumber = randomNumbers.reduce(function (currentHighestNumber,number){

    if (number > currentHighestNumber){
        return number
    }else {
        return currentHighestNumber
    }

},0)

console.log("LargestNumber Reduce",largestNumber);

console.log("Reduce",sum);

