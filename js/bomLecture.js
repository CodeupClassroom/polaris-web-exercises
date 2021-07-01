
var intervalProccess = setTimeout(codeToBeExecuted,5000)


function codeToBeExecuted(){



var person = {
    name: "Nic",
    age: 24,
    getInfo: function (){
        return "This is " + this.name + " and he is " + this.age + " years old."
    }
}

person.height = "60inches";

person.name = "Ry"

// console.log("Mark".length)

console.log(person.getInfo())


console.log(person.height)


    document.write("<h1>It has been 5 seconds</h1>");

}

function killTheRepeat(){
    clearInterval(intervalProccess);
}


setTimeout(function (){
    document.write("<h1>It has been 6 seconds</h1>")
},6000)


setTimeout(function (){
    document.write("<h1>It has been 7 seconds</h1>")
},7000)


// alert("Hello there boi")