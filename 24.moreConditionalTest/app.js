"use strict";
// question:24 => More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
// • Tests for equality and inequality with strings
// • Tests using the lower case function
// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
// • Tests using "and" and "or" operators
// • Test whether an item is in a array
// • Test whether an item is not in a array 
//                                x_______x_______x_____x
//test 1:equality and inequality test with strings :
//making variable 
console.log('\t\n test: equality and inequality with strings');
let pizza = "pizza"; //variable
// printing equality test with string  of variable food 
console.log('\nis pizza equals to pizza ?'); //question
console.log(pizza == "pizza"); //answer (true)
//printing inequality test with string  of variable food 
console.log('is pizza not equals to pizza ? '); //question
console.log(pizza != "pizza"); //answer (false)
// • Test 2: using the lower case function
let uppercase = "PIZZA"; //variable
console.log("\t\nTest: using the lower case function:");
console.log(' is PIZZA equals to pizza after converting in lower case ? '); //question
console.log("PIZZA".toLowerCase() == "pizza"); //answer (true)
// •test:3 Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
// variable 
let two = 2;
let five = 5;
// equality and inequality in mumericals 
console.log("\t\nequality and inequality in numericcals");
console.log("\nis 2 equals to two"); //  question
console.log(2 == 2); //answer (true)
console.log("\n is 2 not equals to 2"); //question
console.log(2 != 2); //answer (false)
//greater than and less than
console.log("\n is five greater than two"); //question
console.log(five > two); //answer (true)
console.log("\n is 2 less than 5"); //question
console.log(2 < 5); //answer (true)
//greater than or equal to 
console.log("\n is five greater or equals to two"); //question
console.log(5 >= 2); //answer (true)
//less than or equals to
console.log("\n is two less than five"); //question
console.log(2 <= 5); //answer (true)
// • Tests using "and" and "or" operators
//varaible
let twenty = 20;
let ten = 10;
// using AND && operator(and operator mai dono condition true honi
//chaiye toh he true print hoga agr dono mai se ek bh false hui to answer false he ayega )
console.log("\n is twenty not equal to ten or is twenty greater than ten"); //question
console.log(twenty != ten && 20 > 10); //answer (true)
//using OR|| operator (is mai dono mai se ek bh false  hogi toh bh answer true ayega )
console.log("\n is 20 less than 10 OR is 20 equal to 20"); //question 
console.log(20 < 10 || 20 == 20); //answer (true)
console.log("\n is 20 less than 10 OR is 20 not equal to 20"); //question
console.log(20 < 10 || 20 != 20); //answer (false)
// • Test whether an item is in a array
//variable
let vegetables = ["onion", "peas", "chilli"];
// includes array 
console.log("\n is onion include in my array");
console.log(vegetables.includes("onion"));
//not includes in my array
console.log("\n is onion not include in my array");
console.log(vegetables.includes("onion"));
