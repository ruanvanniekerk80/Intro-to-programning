// Declare variables to store the list items entered by the user
var item1;
var item2;
var item3;

// Attach a click event to the button with id "changeList"
// When clicked, it will run the newList function
document.getElementById("changeList").onclick = newList;

// Function that asks the user to enter three list items
function newList() {
   // Prompt the user for the first list item
   item1 = prompt("Enter list item");

   // Prompt the user for the second list item
   item2 = prompt("Enter list item");

   // Prompt the user for the third list item
   item3 = prompt("Enter list item");

   // Call the function to update the list on the webpage
   updateList();
}

// Function that updates the HTML list items with the user input
function updateList() {
   // Set the content of the first list element
   document.getElementById("first_item").innerHTML = item1;

   // Set the content of the second list element
   document.getElementById("second_item").innerHTML = item2;

   // Set the content of the third list element
   document.getElementById("third_item").innerHTML = item3;
}
