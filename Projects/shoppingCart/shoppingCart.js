// Array storing all products available in the shop
// Each object contains the product name, price, quantity selected, and image path
const products = [
   { name: "Coke", price: 7.5, quantity: 0, imgSrc: "images/coke.png" },
   { name: "Kit Kat", price: 9.5, quantity: 0, imgSrc: "images/kitKat.png" },
   { name: "Bar One", price: 8.5, quantity: 0, imgSrc: "images/barOne.png" },
   { name: "Fanta", price: 7.5, quantity: 0, imgSrc: "images/fanta.png" },
   { name: "Lunch Bar", price: 10, quantity: 0, imgSrc: "images/LunchBar.png" }
];

// Function that displays the products inside the table
function renderMenu() {

   // Get the table body where products will be inserted
   const menu = document.getElementById("menu");

   // Clear existing rows to prevent duplicates when re-rendering
   menu.innerHTML = "";

   // Loop through each product in the array
   products.forEach((product, index) => {

      // Calculate the total price for the current item
      const itemTotal = (product.price * product.quantity).toFixed(2);

      // Add a table row for the product
      menu.innerHTML += `
        <tr>
          <td><img src="${product.imgSrc}" width="50"></td> <!-- Product image -->
          <td>${product.name}</td>                          <!-- Product name -->
          <td>${product.price.toFixed(2)}</td>              <!-- Price -->
          <td>
            <!-- Buttons to decrease/increase quantity -->
            <button onclick="removeSelection(${index})">−</button>
            ${product.quantity}
            <button onclick="addSelection(${index})">+</button>
          </td>
          <td>${itemTotal}</td>                             <!-- Item total -->
        </tr>
      `;
   });
}

// Increase the quantity of a selected product
function addSelection(index) {
   products[index].quantity++;   // Increase quantity
   renderMenu();                 // Refresh display
}

// Decrease the quantity of a selected product
function removeSelection(index) {

   // Prevent quantity from going below zero
   if (products[index].quantity > 0) {
      products[index].quantity--;
      renderMenu();              // Refresh display
   }
}

// Calculate and display the grand total when checkout is clicked
function finalResult() {

   // Use reduce() to sum all item totals
   const total = products.reduce(
      (sum, p) => sum + p.price * p.quantity, 0
   );

   // Display the final total in the HTML
   document.getElementById("total").textContent = total.toFixed(2);
}

// Run the function when the page loads to display products
renderMenu();
