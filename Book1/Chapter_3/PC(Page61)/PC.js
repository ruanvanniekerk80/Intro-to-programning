// Print a title message to the console
console.log("!---Ruan's Insult generator---!");

// Arrays holding words that will be randomly chosen
let bodyParts = ["tose", "finger nails", "nose hair", "face", "legs", "armpits", "brain"];
let adjectives = ["stinky", "boring", "ridiculous", "quirky"];
let animals = ["fish's", "cat's", "bird's", "baboon's", "worm's"];
let animalBodyParts = ["tail", "paw", "fur", "wiskers"];

// Pick a random body part from the bodyParts array
let randomBodyParts = bodyParts[Math.floor(Math.random() * bodyParts.length)];

// Pick a random adjective
let randomAjectives = adjectives[Math.floor(Math.random() * adjectives.length)];

// Pick a random animal
let randomAnimals = animals[Math.floor(Math.random() * animals.length)];

// Pick a random animal body part
let randomAnimalBodyParts = animalBodyParts[Math.floor(Math.random() * animalBodyParts.length)];

// Build the insult sentence by joining words together into a single string
let randomInsult = [
   "Your",
   randomBodyParts,
   "is",
   "like",
   "that",
   "of",
   "a",
   randomAjectives,
   randomAnimals,
   randomAnimalBodyParts + "!!!"
].join(" ");

// Output the final insult to the console
console.log('\n', "Result:", randomInsult);






// Prints a blank line, then a title message to the console
// '\n' creates a new line before the text
console.log('\n', "!--Joining numbers to string--!");

// Creates an array with numbers and strings, then joins them into one string
// The join(",") method puts a comma between each array element
let joinNumber = [3, "is bigger than", 2, "is bigger than", 1].join(",");

// Prints a label and the final joined string to the console
console.log("join numbers:", joinNumber);


