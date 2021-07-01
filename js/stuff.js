var name = "MARK"

var hasTheNameMark = ( name.toLowerCase() === "Mark".toLowerCase());

if(name.toLowerCase() === "Mark".toLowerCase()){
    // if condition of if statement is true, its code body will run
    alert("Hey I know somebody named Mark!!");
}else{
    alert("Hey your not Mark!!!")
}

var aNumber = 2;


if (aNumber % 2 === 0){

    // aNumber is Even

    if (aNumber % 3 === 0){

        // aNumber is Even && is also divisible by 3

    }else{

        // aNumber is Even but it is not divisible by 3

    }

    // aNumber is Even

}else{


    // aNumber is going to be odd
    // aNumber is not even

}


if ( ( aNumber % 2 === 0 || aNumber % 3 === 0 ) && aNumber > 24 ){

    //aNumber is greater than 24 and divisible by 2
    // ORRRR
    // aNumber is greater than 24 and divisible by 3

    console.log("it meets criteria")

}



// alert("Your name is mark is a " + hasTheNameMark + " statement.")