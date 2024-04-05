
// Q41. Magicians: Make a array of magician’s names. Pass the array to a function
// called show_magicians(), which prints the name of each magician in the array.

// creating an array
let magicians : string[] = ['harry potter','jinny','fairy'];

// passing a function to the name of show-magician
// then put a parameter to the name of magician 
function show_magicians(magician:string[]) {
// using for-each function 
     magician.forEach(element =>{
        console.log(element);
     })
}
//calling a function
show_magicians(magicians)