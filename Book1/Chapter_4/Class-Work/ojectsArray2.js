// Creating an object for person1 with basic properties
const person1 = {
   firstName: "Daniel",
   lastName: "Summers",
   age: 23,
}

// Creating an object for person2 (no age yet)
const person2 = {
   firstName: "John",
   lastName: "Doe",
}

// Creating an object for person3
const person3 = {
   firstName: "Joe",
   lastName: "Soap",
}

// Adding a new property (age) to person2 after the object was created
person2.age = 15;
console.log("Added age:", person2.age);

// Adding a new property (city) to person1
person1.city = "Johannesburg"
console.log("add City:", person1.city);

// Adding a new property using bracket notation
person3["ocupation"] = "Student";
console.log("Added ocupation to person3:", person3["ocupation"]);

// Getting all values from the person1 object and storing them in an array
const people = Object.values(person1);
console.log("Accessing  ", people);



// Creating watch objects with properties and an array inside each object
var watch1 = {
   brand: "Rolex,",
   model: "Submeriner",
   luckyNumbers: [1, 5, 7, 2],
};

var watch2 = {
   brand: "Omega",
   model: "SeaMaster",
   luckyNumbers: [1, 7, 2, 9],
};

var watch3 = {
   brand: "Casio",
   model: "duro",
   luckyNumbers: [3, 9, 4, 2],
};

// Storing all watch objects inside an array
var Allwatches = [watch1, watch2, watch3];

// Logging the first watch object
console.log(Allwatches[0]);

// Accessing the brand of the third watch
console.log(Allwatches[2].brand);

// Accessing the second lucky number of the first watch
console.log(Allwatches[0].luckyNumbers[1]);


// !------------- "An array with objects" --------------!

// Creating an array that contains multiple laptop objects
var laptops = [{
   brand: "Dell",
   model: "5410",
   year: 2021,
},
{
   brand: "Apple",
   model: "Macbook Pro",
   year: 2023,
},
{
   brand: "Lenovo",
   model: "IdeaPad",
   year: 2024,
}];

// Logging the entire laptops array
console.log(laptops)

// Accessing the brand of the second laptop
console.log(laptops[1].brand);
