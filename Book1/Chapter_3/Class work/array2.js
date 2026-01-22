// Create an array of watch brands
var watches = ["Rolex", "Omega", "Casio", "Seiko"];

// Log the first watch brand in the array (index 0)
console.log("Brand of watches:", watches[0]);

// Add a new item at index 4 in the watches array
watches[4] = "Fossil";

// Log the newly added item
console.log("Add item:", watches[4]);

// Create an array with mixed data types
// Includes an array, booleans, a variable, a number, and a string
var mixedDataType = [[1, 2, 3, 4, 5, 6], true, false, EventCounts, 20, "Ruan"];

// Access the first array inside mixedDataType, then get the value at index 3
console.log("Data type value:", mixedDataType[0][3]);

// Log the total number of elements in mixedDataType
console.log("Length of array:", mixedDataType.length);

// Log the entire watches array
console.log(watches);

// Add a new item to the end of the watches array
// push() returns the new length of the array
console.log(watches.push("G-Shock"));

// Log the item at index 5 (the newly pushed value)
console.log(watches[5]);


// ---------------Code from Array 1 --------------------


// Create an array called 'fruits' with three initial elements
var fruits = ["cherries", "Apples", "Bananas"];

// Add new elements ('date' and 'mango') to the end of the array
fruits.push('date', 'mango');

// Display the array after appending new elements
console.log("After-appending:", fruits);

// Replace the element at index 1 ("Apples") with "Strawberies"
fruits[1] = "Strawberies";

// Display the array after replacing an element
console.log("After Replacing:", fruits);

console.log("Removed item:", fruits.pop());
console.log(fruits);

var fruitsWatches = fruits.concat(watches);
console.log("Concat:", fruitsWatches);


// //9.  Finding Index:
console.log("Index-Of the value:", fruits.indexOf('apple'));

// //10. Turning into a String:
// // Convert the array into a single string with elements separated by a comma.
var mixedString = mixedDataType.join(', ');
console.log("Coverted String:", fruits);

// //11.  Building with push: Add new items to the end of the array.
var numbers = [];
numbers.push(6, 7, 8, 9,);
console.log("Numbers Array:", numbers);

// //12.  Adding to the beginning of the array:
numbers.unshift(1, 2, 3, 4, 5);
console.log("Added:", numbers);




