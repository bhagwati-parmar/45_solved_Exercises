"use strict";
// Q39. City Names: Write a function called city_country() that takes in the name
// of a city and its country. The function should return a string formatted like this:
// "Lahore, Pakistan"
// Call your function with at least three city-country pairs, and print the value
// that’s returned.
// creating a function 
function city_country(city, country) {
    return `${city}, ${country}`;
}
// calling a function
console.log(city_country("quetta", "Pakistan"));
console.log(city_country("delhi", "india"));
console.log(city_country("Paris", "France"));
