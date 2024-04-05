//Q 3. Name Cases: Store a person’s name in a variable, 
//and then print that person’s name in lowercase, uppercase, and titlecase.
//Variable
var personName = "bhagwati jayparkash";
//lower case
console.log(personName.toLowerCase());
//upper case
console.log(personName.toUpperCase());
//title cases
console.log(personName.replace(/\b\w/g, function (char) { return char.toUpperCase(); }));
