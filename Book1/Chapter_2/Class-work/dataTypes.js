// Using the (!) NOT operator:
// The NOT operator reverses a boolean value (true → false, false → true)
var isWeekend = true;
var needToShowerToday = !isWeekend; // false because isWeekend is true
needToShowerToday;

// Joining strings together (string concatenation):
var greeting = "Hello";
var myName = "Nick";
greeting + myName; // "HelloNick"

// Finding the length of the string:
// .length returns the total number of characters in the string
"Helloworld".length; // 10

// Getting a single character from a string:
// Strings are zero-indexed, so index 1 is the second character
var myName = "Nick";
myName[1]; // "i"

// Numbers and operators:
// Follows order of operations (PEMDAS)
1234 + 57 * 3 - 31 / 4;

// Post Incrementing:
// Increases the value by 1
var highFives = 0;
++highFives; // highFives becomes 1

// Pre Decrementing:
// Decreases the value by 1
var highFives = 5;
--highFives; // highFives becomes 4

// Boolean AND Operator (&&):
// Returns true only if BOTH values are true
var isRaining = true;
var isNotRaining = false;
isRaining && isNotRaining; // false

// OR Operator (||):
// Returns true if AT LEAST ONE value is true
var hasApple = true;
var hasBanana = false;
hasApple || hasBanana; // true

// Numbers with Boolean comparison:
// Checks if height is less than the height restriction
var height = 65;
var heightRestriction = 60;
height < heightRestriction; // false

// Converting to Upper Case:
// Converts all letters in the string to uppercase
"Hello there, how are you doing?".toUpperCase();

// Converting to Lower Case:
// Converts all letters in the string to lowercase
"hELlo THERE, hOW ARE yOu doINg?".toLowerCase();

// Equal to (===):
// Strict equality checks value AND type
var mySecretNumber = 5;
var chicoGuess = 3;
mySecretNumber === chicoGuess; // false

// Double ==
// Loose equality checks value only and allows type conversion
var stringNumber = "5";
var actualNumber = 5;
stringNumber == actualNumber; // true

// Slice:
// Extracts part of a string without changing the original

// Example 1:
// Gets characters from index 0 up to (but not including) index 4
"This is a long string".slice(0, 4); // "This"

// Example 2:
// Extracts characters starting at index 7 up to index 12
"Hello, World!".slice(7, 12); // "World"
