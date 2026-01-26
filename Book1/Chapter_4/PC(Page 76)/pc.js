// !--- #1: Scorekeeper ----!
// Log a title to separate this section in the console
console.log("1. Scorekeeper:");

// Create an object to store player names and their scores
var playerScores = {
   Cliff: 0,
   Joe: 0,
   Daniel: 0,
   Nick: 0,
   John: 0,
};

// Display the starting scores for all players
console.log("Starting Score:", playerScores);

// Increase Cliff's score by 2 points
playerScores.Cliff += 2;

// Increase Joe's score by 6 points
playerScores.Joe += 6;

// Log the updated score for Cliff
console.log("Cliff Score:", playerScores.Cliff);

// Log the updated score for Joe
console.log("Joe Score:", playerScores.Joe);


// !--- #2: Digging into Objects and Arrays-------!
// Print spacing and a title for the next section
console.log('\n', '\n', "2. object and arrays:");

// Create an object with mixed data types and nested structures
var myCrazyObject = {
   "name": "A ridiculous object", // A string property
   "some array": [               // An array inside the object
      7,
      9,
      { purpose: "confusion", number: 123 }, // An object inside the array
      3.3
   ],
   "random animal": "Banana Shark", // Another string property
};

// Access:
// 1) "some array" from the object
// 2) index 2 of that array (the inner object)
// 3) the "number" property of that inner object
let result = myCrazyObject["some array"][2].number;

// Log the extracted value (123) to the console
console.log(result);
