// Grab the "Print" button from the page
let printButton = document.getElementById("printable");

// When the print button is clicked, run the printView function
printButton.addEventListener("click", printView);

// Grab the "Add" button from the page
let addButton = document.getElementById("addIt");

// When the add button is clicked, run the addTheThing function
addButton.addEventListener("click", addTheThing);

// Create an empty array to store the list items
let myList = [];

// Grab the area (ul or ol) where list items will be displayed
let myListArea = document.getElementById("wishList");


// This function runs when the Add button is clicked
function addTheThing() {

   // Get the input field where the user types their wish
   let theThing = document.getElementById("iWant");

   // Add the input value to the list
   addToTheList(theThing);

   // Clear the input field after adding
   resetInput(theThing);
}


// Adds the typed item to the array and the page
function addToTheList(thingToAdd) {

   // Store the input value in the array
   myList.push(thingToAdd.value);

   // Create a new list item element
   let newListItem = document.createElement("li");

   // Assign an id to the list item (note: IDs should usually be unique)
   newListItem.id = "list";

   // Set the text of the list item to the most recent array entry
   newListItem.innerHTML = myList[myList.length - 1];

   // Add the new list item to the list on the page
   myListArea.appendChild(newListItem);
}


// Clears the text inside the input field
function resetInput(inputToReset) {
   inputToReset.value = "";
}


// Prepares the page for printing
function printView() {

   // Grab the list page and form area
   let listPage = document.getElementById("listPage");
   let formArea = document.getElementById("formArea");

   // Hide the form so only the list prints
   formArea.style.display = "none";

   // Apply a CSS class for print styling
   listPage.className = "print";

   // Clear the displayed list
   myListArea.innerHTML = "";

   // Sort the list alphabetically
   myList.sort();

   // Rebuild the list using the sorted array
   for (let i = 0; i < myList.length; i++) {
      wishList.innerHTML += "<li>" + myList[i] + "</li>";
   }

   // Open the browser print dialog
   window.print();
}
