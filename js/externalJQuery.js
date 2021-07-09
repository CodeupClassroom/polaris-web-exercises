"use strict"
var h1;
var aDiv
$(document).ready(function (){

    h1 = $("h1")

    console.log(h1.html("Sam was here"))

    alert("hey I am ready for manipulation!")


    aDiv = $("#something")

    console.log(aDiv)

    var divs = $(".content")

    console.log(divs)

    divs.addClass("imgStuff")

    var stuff = $(".content, h1")

    console.log(stuff)

    var image = $("img")

    // image.css("width","50%")
    // image.css("border","solid 5px red")

    image.css({"width":"50%","border":"solid 5px red"})

    console.log("The images width is " + image.css("width"))

    // console.log(image.css())

    $("div > p,h1").css({"background-color":"cyan"})

})