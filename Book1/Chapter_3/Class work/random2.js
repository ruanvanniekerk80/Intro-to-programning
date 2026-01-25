// Generate a random decimal number between 0 (inclusive) and 1 (exclusive)
let randomDesNum = Math.random();
console.log("Random Number :", randomDesNum);

// Generate a random whole number between 0 and 9
let randomNum = Math.floor(Math.random() * 10);
console.log("Random Number", randomNum);

// Array of car names
let cars = ["BMW", "Merc", "Ford", "Suzuki", "Nissan"];

// Pick a random car using a random index from 0 to 4
let randomCar = cars[Math.floor(Math.random() * 5)];
console.log("Random Car:", randomCar);

// Another array of car names
let car = ["BMW", "Merc", "Ford", "Suzuki", "Nissan"];

// Generate a random index based on the array length
let resultIndex = Math.floor(Math.random() * car.length);

// Log the randomly selected car using the random index
console.log("Random car Index:", car[resultIndex]);
