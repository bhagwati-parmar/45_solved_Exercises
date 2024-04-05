"use strict";
// Q35. Animals: Think of at least three different animals that have a common characteristic.
// Store the names of these animals in a list, and then use a for loop to
// print out the name of each animal.
// • Modify your program to print a statement about each animal, such as
// A dog would make a great pet.
// • Add a line at the end of your program stating what these animals have in
// common. You could print a sentence such as Any of these animals would
// make a great pet!
// creating a variable
let wildAnimals = ['tiger', 'lion', 'fox'];
//using for-loop
for (let animal of wildAnimals) {
    console.log(`A ${animal} is a wild animal.`);
}
// printing a message outside of loop
console.log('\n Any of these would not be a good pet.');
