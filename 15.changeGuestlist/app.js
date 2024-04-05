"use strict";
//Q15. Changing Guest List: You just heard that one of your guests can’t make the
// dinner, so you need to send out a new set of invitations. You’ll have to think of
// someone else to invite.
// • Start with your program from Exercise 14. Add a print statement at the
// end of your program stating the name of the guest who can’t make it.
// • Modify your list, replacing the name of the guest who can’t make it with
// the name of the new person you are inviting.
// • Print a second set of invitation messages, one for each person who is still
// in your list.
// old guest list 
let guestlist = ["mahek", "khushi", "riya", "purwashi"];
guestlist.forEach(guest => {
    console.log(`namaste, ${guest} would u like to join us in dinner?`);
});
// one guest is unable to attend us on dinner
let unableToAttend = 'khushi';
console.log(`${unableToAttend} can not able to attend dinner `);
console.log('\t\nnew list of guest\n\t');
// replace new guest to khushi
guestlist.splice(1, 1, "amna");
guestlist.forEach(guest => {
    console.log(`namaste, ${guest} would u like to join us in dinner?`);
});
