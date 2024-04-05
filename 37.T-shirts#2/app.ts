
// Q37Large Shirts: Modify the make_shirt() function so that shirts are large
// by default with a message that reads I love TypeScript. Make a large shirt and a
// medium shirt with the default message, and a shirt of any size with a different
// message.




// making a function 
function make_shirt(size: string = "large", message: string = "I love TypeScript") {
    console.log(`Making a ${size} t-shirt with the message "${message}" printed on it.`);
}
// calling a function 
make_shirt(); // Default large and message
make_shirt("medium"); // Default message, medium size
make_shirt("small", "code with bhagwati"); // Custom message, small size
