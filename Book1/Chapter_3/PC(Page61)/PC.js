console.log("!---Ruan's Insult generator---!");

let bodyParts = ["tose", "finger nails", "nose hair", "face", "legs", "armpits", "brain"];
let adjectives = ["stinky", "boring", "ridiculous", "quirky"];
let animals = ["fish's", "cat's", "bird's", "baboon's", "worm's"];
let animalBodyParts = ["tail", "paw", "fur", "wiskers"];

let randomBodyParts = bodyParts[Math.floor(Math.random() * bodyParts.length)];
let randomAjectives = adjectives[Math.floor(Math.random() * adjectives.length)];
let randomAnimals = animals[Math.floor(Math.random() * animals.length)];
let randomAnimalBodyParts = animalBodyParts[Math.floor(Math.random() * animalBodyParts.length)];

let randomInsult = ["Your", randomBodyParts, "is", "like", "a", randomAjectives, randomAnimals, randomAnimalBodyParts + "!!!"].join(" ");
console.log('\n', "Result:", randomInsult);