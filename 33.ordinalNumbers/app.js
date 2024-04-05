"use strict";
// Q33. Ordinal Numbers: Ordinal numbers indicate their position in a array, such as 1st or 2nd.
//  Most ordinal numbers end in th, except 1, 2, and 3.
// • Store the numbers 1 through 9 in a array.
// • Loop through the array
// • Use an if-else chain inside the loop to print the proper ordinal ending for each number. Your output should read "1st 2nd 3rd 4th 5th 6th
// 7th 8th 9th", and each result should be on a separate line.
let ordinalnumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let number of ordinalnumbers) {
    let ordinalendings;
    if (number === 1) {
        ordinalendings = "st";
    }
    else if (number === 2) {
        ordinalendings = "nd";
    }
    else if (number === 3) {
        ordinalendings = "rd";
    }
    else {
        ordinalendings = "th";
    }
    console.log(`${number}${ordinalendings}`);
}
// // REMINDER
// FOR-LOOP k undr hum jitna bh kaam krte hai wo sirf us loop k undr he chalega phr loop khtm 
// hojyega mean jitna kaam usey assign kia hoga wo apna kaam krega 
// for loop mai hum temperory varibale bh bnate hai jo us loop tk he chlta hai 
// // fkor loop bh for each function ki trh kaam krta hai
