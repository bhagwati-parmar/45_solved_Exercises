"use strict";
//26. Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and
// write an if-else chain.
// • If the alien’s color is purple, print a statement that the player just earned 5 points for shooting the alien.
// • If the alien’s color isn’t purple, print a statement that the player just earned 10 points.
// • Write one version of this program that runs the if block and another that runs the else block.
//varaiable
let AlienColor = "purple";
// first version    (if runs)
if (AlienColor === "purple") {
    console.log("1st version: your alien color is purple , you just earn 5 points.");
}
else {
    console.log("player earn 10 points");
}
//second version (else runs)
if (AlienColor === "pink") {
    console.log(" your alien color is pink , you just earn 5 points.");
}
else {
    console.log(" 2nd version :player earn 10 points");
}
// reminder
//in else condition (we dont need to give condition like *if* mean agr if condition does not
//  true than typescript will run *else* condition)
