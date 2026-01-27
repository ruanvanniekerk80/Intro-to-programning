// --------- #1: Awesome Animals ---------
console.log("#1: Awesome Animals");

// Create an array of animal names
var animals = ["Cat", "Fish", "Lemur", "Komodo Dragon"];

// Loop through each animal in the array
for (var i = 0; i < animals.length; i++) {

   // Add the word "Awesome" before each animal name
   // and update the array element
   console.log(animals[i] = "Awesome " + animals[i]);
}


// ------  #2: Random String Generator ---------
console.log('\n', "#2: Random String Generator");

// String containing all lowercase letters
var alphabet = "abcdefghijklmnopqrstuvwxyz";

// This will store our final random string
var randomString = "";

// Keep adding random letters until the string is 6 characters long
while (randomString.length < 6) {

   // Generate a random index based on the alphabet length
   var randomIndex = Math.floor(Math.random() * alphabet.length);

   // Add the randomly selected letter to randomString
   randomString += alphabet[randomIndex];
}

// Output the generated random string
console.log("Random String: ", randomString);


// ----------- #3: h4ck3r sp34k -------------
console.log('\n', "#3: h4ck3r sp34k ");

// Original input string
var input = "javascript is awesome";

// This will store the translated hacker-speak string
var output = "";

// Loop through each character in the input string
for (var i = 0; i < input.length; i++) {

   // Replace certain letters with numbers
   if (input[i] === "a") {
      output += "4";
   } else if (input[i] === "e") {
      output += "3";
   } else if (input[i] === "i") {
      output += "1";
   } else if (input[i] === "o") {
      output += "0";
   } else {
      // If it's not a letter we replace, keep it the same
      output += input[i];
   }
}

// Output the final hacker-speak string
console.log(output);
