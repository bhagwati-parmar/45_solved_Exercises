"use strict";
// q31. No Users: Add an if test to Exercise 30 to make sure the list of users is not empty.
// • If the list is empty, print the message We need to find some users!
// • Remove all of the usernames from your array, and make sure the correct message is printed.
// // creating an array 
let usernames = ["admin", "khushi", "riya", "bisma", "ravia"];
//Q30
// usernames.forEach(username => {
//     if(username === "admin"){
//         console.log("hello admin would you like to see a status report?");
//     }
//    else {
//     console.log(`hello ${username}, thank you for logging in again`);
//    }
// });
// 31Q
//remove all array
usernames = [];
if (usernames.length === 0) {
    console.log("our array is empty and we need to find some users");
}
else {
    //user greetings
}
