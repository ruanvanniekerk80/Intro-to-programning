// Print a heading to the console
console.log("--Count letter number 6--");

// Function that checks the length of a name
function checkName(name) {

   // Check if the name has more than 6 characters
   if (name.length > 6) {

      // Return a message and the 6th character of the name
      // (index 5 because JavaScript uses zero-based indexing)
      return "\n" +
         "This name is longer than 6 characters; here is the sixth letter: " +
         name[5];
   }
}

// Call the function with a sample name and log the result
console.log(checkName("Ruan Van Niekerk"));
