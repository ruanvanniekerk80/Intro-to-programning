// Main function that runs the entire game
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

   // Randomly pick a word and hint
   var picked = pickWord(words);
   var word = picked.word;
   var hint = picked.hint;

   // Show the hint to the player
   alert("HINT: " + hint);

   // Create the array that tracks guessed letters (_ _ _)
   var answerArray = setupAnswerArray(word);

   // Number of letters still left to guess
   var remainingLetters = word.length;

   // Set maximum guesses allowed
   var maxGuesses = 10;
   var guessesUsed = 0;

   // Main game loop
   while (remainingLetters > 0 && guessesUsed < maxGuesses) {

      // Show current progress and guesses left
      showPlayerProgress(answerArray, maxGuesses - guessesUsed);

      // Ask the player for a guess
      var guess = getGuess();
      if (guess === null) break; // Player canceled the game

      // Validate input (must be one letter)
      if (guess.length !== 1) {
         alert("Please enter a single letter.");
         continue;
      }

      // Prevent guessing the same letter twice
      if (answerArray.includes(guess)) {
         alert("You already guessed that letter!");
         continue;
      }

      // Update the game state and count correct guesses
      var correctGuesses = updateGameState(guess, word, answerArray);
      remainingLetters -= correctGuesses;

      // Count every guess attempt
      guessesUsed++;
   }

   // Picks a random word from the list
   function pickWord(words) {
      var randomIndex = Math.floor(Math.random() * words.length);
      return words[randomIndex];
   }

   // Creates an array of underscores matching the word length
   function setupAnswerArray(word) {
      var answerArray = [];
      for (var i = 0; i < word.length; i++) {
         answerArray[i] = "_";
      }
      return answerArray;
   }

   // Displays the current guessed letters and remaining guesses
   function showPlayerProgress(answerArray, guessesLeft) {
      alert(answerArray.join(" ") + "\nGuesses left: " + guessesLeft);
   }

   // Prompts the player to guess a letter
   function getGuess() {
      var guess = prompt("Guess a letter, or click Cancel to stop playing.");
      if (guess !== null) {
         return guess.toLowerCase();
      }
      return null;
   }

   // Updates the answer array if the guess is correct
   function updateGameState(guess, word, answerArray) {
      var correctGuesses = 0;

      for (var i = 0; i < word.length; i++) {
         if (word[i] === guess && answerArray[i] === "_") {
            answerArray[i] = guess;
            correctGuesses++;
         }
      }

      return correctGuesses;
   }

   // Shows the final answer and win/lose message
   function showAnswerAndCongratulatePlayer(answerArray, word, remainingLetters) {
      alert(answerArray.join(" "));
      if (remainingLetters === 0) {
         alert("Good job! The answer was \"" + word + "\".");
      } else {
         alert("Game over! The correct word was \"" + word + "\".");
      }
   }

   // End-of-game message
   showAnswerAndCongratulatePlayer(answerArray, word, remainingLetters);
}

// Start the game
startGame();
