//Q 17. Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.

// • Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.

// • Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print
// a message to that person letting them know you’re sorry you can’t invite them to dinner.

// • Print a message to each of the two people still on your list, letting them know they’re still invited.

// • Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end
// of your program.


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
// printing/sending message to guest of shrinking guestlist 
console.log('\nunfornatelly, i can not invite all the guest instead of 2\n');

//code for poping guests from the guestlist 
while(guestlist.length> 2) {
    let removedguest= guestlist.pop(); 

    //console appolozing message to guest who are popped from the list
    console.log(`sorry ${removedguest}, i can not invite you on dinner.`);
 }

//  sending invitation to 2 guest who are still invited
console.log('2 guest invitation who are still invited');
guestlist.forEach(guest=>{
    console.log(` ${guest}  you're still invited on dinner?`)
});

//making list empty (we have 2 guest thats why we use 2time pop function)
guestlist.pop();
guestlist.pop()
console.log( "\nempty guestlist\n", guestlist);

    