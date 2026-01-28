// !-------------- Hangman Game ------------------

function startGame() {

   // List of possible words and their hints
   var words = [
      { word: "javascript", hint: "A programming language used for web pages." },
      { word: "monkey", hint: "A playful animal that loves bananas." },
      { word: "amazing", hint: "Something incredible." },
      { word: "pancake", hint: "A breakfast food cooked on a griddle." },
      { word: "inception", hint: "Movie: dream within a dream." },
      { word: "rolex", hint: "Watch: luxury name brand." },
      { word: "ghostbusters", hint: "Movie: Who you going to call" },
      { word: "superman", hint: "Movie: On my world it means hope ." },
      { word: "terminator", hint: "Movie: Come with me, if you want to live." },
      { word: "pennywise", hint: "we all float down here." }
   ];

   // Select a random word from the list
   var randomIndex = Math.floor(Math.random() * words.length);
   var word = words[randomIndex].word;
   var hint = words[randomIndex].hint;

   // Show hint to the player
   alert("HINT: " + hint);

   // Create an array to store the player's correct guesses
   var answerArray = [];
   for (var i = 0; i < word.length; i++) {
      answerArray[i] = "_"; // Fill with underscores initially
   }

   // Track remaining letters to guess and number of attempts
   var remainingLetters = word.length;
   var maxGuesses = 10;
   var guessesUsed = 0;

   // Main game loop
   while (remainingLetters > 0 && guessesUsed < maxGuesses) {

      // Display current progress and remaining guesses
      alert(answerArray.join(" ") + "\nGuesses left: " + (maxGuesses - guessesUsed));

      // Ask player for a letter
      var guess = prompt("Guess a letter, or click Cancel to stop playing.");
      if (guess === null) break; // Stop if player cancels

      // Convert to lowercase for consistent comparison
      guess = guess.toLowerCase();

      // Validate the guess
      if (guess.length !== 1 || !guess.match(/[a-z]/)) {
         alert("Please enter a single letter");
         continue; // Ask again if invalid
      }

      // Check if the letter was already guessed
      if (answerArray.includes(guess)) {
         alert("You already guessed that letter!");
         continue;
      }

      var correctGuess = false;

      // Check each letter in the word
      for (var j = 0; j < word.length; j++) {
         if (word[j] === guess && answerArray[j] === "_") {
            answerArray[j] = guess; // Reveal the correct letter
            remainingLetters--;     // Reduce letters remaining
            correctGuess = true;
         }
      }

      // Count each attempt (even if wrong)
      guessesUsed++;
   }

   // Show final result
   alert(answerArray.join(" "));
   if (remainingLetters === 0) {
      alert("Good job! The answer was \"" + word + "\".");
   } else {
      alert("Game over! The correct word was \"" + word + "\".");
   }
}

// Start the game
startGame();
