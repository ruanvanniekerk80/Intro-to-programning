// Change background color of website
document.body.style.background = "black";

// Change the text color of the page to white
document.body.style.color = "white";

// Create a new <h1> element
let newDiv = document.createElement("h1");

// Assign an ID to the <h1>
newDiv.id = "heading";

// Add the <h1> to the document body
document.body.appendChild(newDiv);

// Set the content of the heading
document.getElementById('heading').innerHTML = ("!----Arrays---!");


// Create an array of colors
let colors = ["purple", "yellow", "orange"];

// Display the original colors array
document.write("(1.) Colors Array: ", colors + "<br><br>");

// Change the first element of the array
colors[0] = "blue";

// Display the updated array
document.write("(2. )After changing the value: " + colors + "<br><br>");

// Display the values of the colors array inside an element with id "colorKnow"
document.getElementById("colorKnow").innerHTML = colors.values();


// Create another array of colors
let otherColors = ["black", "green", "red"];

// Display the second array
document.write("(3a.) Other Colors Array: " + otherColors + "<br><br>");

// Combine both arrays into one
let myColors = colors.concat(otherColors);

// Display the combined array
document.write("(3b.)Combining arrays: " + myColors + "<br><br>");

// Find the index of "blue" in the combined array
let cc = myColors.indexOf("blue");

// Display the index
document.write("(4.) Index of element in Array: " + cc + "<br><br>");

// Join elements of otherColors using "+"
let joinColors = otherColors.join("+");

// Display the joined string
document.write("(5.)Join elements in a Array: " + joinColors + "<br><br>");

// Find the last index of "red" in the combined array
let indexColorRed = myColors.lastIndexOf("red");

// Display the last index
document.write("(6.)Last Index: " + indexColorRed + "<br><br>");

// Remove the last element from the colors array
let removeColor = colors.pop();

// Display the removed color
document.write("(7.)Remove the last color: " + removeColor + "<br><br>");

// Display the array after pop
document.write("after pop: " + colors + "<br><br>");

// Add "brown" to the end of the colors array
colors.push("brown");

// Display the array after push
document.write("(8.) After pushing 'Brown': " + colors + "<br><br>");

// Reverse the order of the colors array
colors.reverse();

// Display the reversed array
document.write("(9.) After reversing: " + colors + "<br><br>");

// Remove the first element of the colors array
var shiftedcolor = colors.shift();

// Display the removed element
document.write("(10.) Removed at the beginning: " + shiftedcolor + "<br>");

// Display the array after shift
document.write("After shift: " + colors + "<br><br>");

// Add "pink" to the beginning of the myColors array
myColors.unshift("pink");

// Display the array after unshift
document.write("(11.) After adding to the beginning: " + myColors + "<br><br>");

// Create a new array by slicing elements from index 0 to 3
var myColors1 = myColors.slice(0, 3);

// Display the sliced array
document.write("(12.) After slice (0 to 3): " + myColors1 + "<br><br>");

// Sort the myColors array alphabetically
var myColor2 = myColors.sort();

// Display the sorted array
document.write("(13.) After sort: " + myColor2 + "<br><br>");

// Insert "pink" at index 1 without removing any elements
myColors1.splice(1, 0, "pink");

// Display the array after splice
document.write("(14.) After splice (insert 'pink' at index 1): " + myColors1 + "<br>");
