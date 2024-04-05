"use strict";
// Q32. Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has
//  a unique username.
// • Make a list of five or more usernames called current_users.
// • Make another list of five usernames called new_users. Make sure one or two of the new usernames
//  are also in the current_users list.
// • Loop through the new_users list to see if each new username has already been used. If it has, print
//  a message that the person will need to enter a new username. 
// If a username has not been used, print a message saying that the username is available.
// • Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.
//creating an array of current users 
let current_users = ['manisha', 'riya', 'Bisma', 'khushi', 'DUA'];
//creating an array of new users
let new_users = ['guriya', 'bharat', 'bisma', 'varun', 'dua'];
//loop through new users to check for usernames availability
new_users.forEach(newUser => {
    if (current_users.some(currentUser => currentUser.toLowerCase() === newUser.toLowerCase())) {
        console.log(`${newUser} needs to enter a new username.`);
    }
    else {
        console.log(`${newUser} is available.`);
    }
});
// REMINDER:
// {SOME function }one by one value save krke check/match krta hai aur some function humne true/false ki
//  answer krta hai aur foreach ki trh he km krta hai
