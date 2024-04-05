
// Q43. Unchanged Magicians: Start with your work from Exercise 40. Call the
// function make_great() with a copy of the array of magicians’ names. Because the
// original array will be unchanged, return the new array and store it in a separate array.
// Call show_magicians() with each array to show that you have one array of the original
// names and one array with the Great added to each magician’s name.

//creating a array
let magicians : string[] = ['harry potter','jinny','fairy'];

// crrating this function to copy array 
function copyArray(array:string[]){
    return[...array]
}


// creating a function to modified the array  
function make_great(magicianArray: string[]) {
    // using for-loop function
    for (let i = 0; i < magicianArray.length; i++) {
        magicianArray[i] =  "the Great " + magicianArray[i] ;
    }
}
// passing a function to the name of show-magician
// then put a parameter to the name of magician 
// old function 
function show_magicians(magician:string[]) {
// using for-each function 
     magician.forEach(element =>{
        console.log(element);
     })
}
//calling a function
 const copymagicianarray = copyArray(magicians) //jo bh chiz return hokr ayegi humare is copyArray mai wo const k undr save hojyegi.

make_great(copymagicianarray); // Modifies the original array

console.log('\n\nthis is my original array');
show_magicians(magicians); // Shows modified names

console.log('\n\nthis is my modified copy of the array');
show_magicians(copymagicianarray); // Shows modified names
