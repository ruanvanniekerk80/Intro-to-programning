// Generate a random number between 0 and 20
// Math.random() generates a number between 0 and 1
// Multiplying by 21 gives a range from 0–20
// Math.floor() removes decimals
let randRandom = Math.floor(Math.random() * 21);

// Log the random number to the console (useful for testing)
console.log("randomNumber: " + randRandom);

// Function called when the user clicks the button
function storedValue() {

   // Get the input element from the HTML
   let input = document.getElementById("numberInput");

   // Convert the input value to a number
   let userGuess = parseInt(input.value);

   // Clear the input field after the guess is submitted
   input.value = "";

   // Pass the user's guess to the game logic function
   startGame(userGuess);
}

// Main game logic function
function startGame(userGuess) {

   // Check if the user entered a valid number
   if (isNaN(userGuess)) {
      document.getElementById("result").innerHTML = "Enter a valid number";
   }

   // If the guess is higher than the random number
   else if (userGuess > randRandom) {
      document.getElementById("result").innerHTML = "Incorrect, number too high";
   }

   // If the guess is lower than the random number
   else if (userGuess < randRandom) {
      document.getElementById("result").innerHTML = "Incorrect, number too low";
   }

   // If the guess is correct
   else {
      document.getElementById("result").innerHTML =
         "Well done!!, you guessed the right number " + randRandom;

      // Disable the input field after correct guess
      document.getElementById("numberInput").disabled = true;

      // Disable the button to prevent further guesses
      document.getElementById("btn").disabled = true;
   }
}
