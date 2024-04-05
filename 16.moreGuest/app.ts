//Q16. More Guests: You just found a bigger dinner table, so now more space is
// available. Think of three more guests to invite to dinner.

// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a
// bigger dinner table.

// • Add one new guest to the beginning of your array.

// • Add one new guest to the middle of your array.
// • Use append() to add one new guest to the end of your list.
// • Print a new set of invitation messages, one for each person in your list.


// old guest list 
console.log('old list');

let guestlist:string[] = ["mahek","khushi","riya","purwashi"];
guestlist.forEach(guest=>{
    console.log(`namaste, ${guest} would u like to join us in dinner?`)
});

// one guest is unable to attend us on dinner

let unableToAttend : string = 'khushi';
console.log(`\t\n${unableToAttend} can not able to attend dinner\n\t `);

console.log('\t\nnew list of guest\n\t');

// replace new guest to khushi

guestlist.splice(1,1, "amna")

guestlist.forEach(guest=>{
    console.log(`namaste, ${guest} would u like to join us in dinner?`)
});

// printing message to guests to know them that we have more table for dinner

let guestlist1:string[] = ["mahek","amna","riya","purwashi"];
console.log("\t\nhey ! great news to you guys , we found more tables for dinner\n\t ");

// adding more guests 

guestlist.unshift("bisma");
guestlist.splice( guestlist.length/2,0, "khadija");
guestlist.push("dua");

guestlist.forEach(guest=>{
    console.log(`namaste, ${guest} would u like to join us in dinner?`)
});




