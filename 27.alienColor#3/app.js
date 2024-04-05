"use strict";
// 27. Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
// • If the alien is green, print a message that the player earned 5 points.
// • If the alien is yellow, print a message that the player earned 10 points.
// • If the alien is red, print a message that the player earned 15 points.
// • Write three versions of this program, making sure each message is printed for the appropriate color alien.
// version1
let AlienColor1 = "green";
if (AlienColor1 === "green") {
    console.log("{version1} you shot down green alien you earn 5 points");
}
else if (AlienColor1 === "yellow") {
    console.log("{version1} you shot down yellow alien you earn 10 points");
}
else if (AlienColor1 === "red") {
    console.log("{version1} you shot down red alien you earn 15 points");
}
// version2
let AlienColor2 = "yellow";
if (AlienColor2 === "green") {
    console.log("{version2} you shot down green alien you earn 5 points");
}
else if (AlienColor2 === "yellow") {
    console.log("{version2} you shot down yellow alien you earn 10 points");
}
else if (AlienColor2 === "red") {
    console.log("{version2} you shot down red alien you earn 15 points");
}
// version3
let AlienColor3 = "red";
if (AlienColor3 === "green") {
    console.log("{version3} you shot down green alien you earn 5 points");
}
else if (AlienColor3 === "yellow") {
    console.log("{version3} you shot down yellow alien you earn 10 points");
}
else if (AlienColor3 === "red") {
    console.log("{version3} you shot down red alien you earn 15 points");
}
