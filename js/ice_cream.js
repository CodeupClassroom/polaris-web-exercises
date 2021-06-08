





// This is how you get a random number between 50 and 100
var allCones = Math.floor(Math.random() * 50) + 50;
document.write("I have " + allCones + " cones to sell<br>");

let total_cones = 0;

do {
    // This expression will generate a random number between 1 and 5
    let cones_bought = Math.floor(Math.random() * 5) + 1;
    if ((allCones - total_cones) < cones_bought)
        continue;
    document.write("They bought: " + cones_bought + "<br>");
    total_cones = total_cones + cones_bought;
    document.write("I have sold: " + total_cones);
    }
    while (allCones > total_cones);