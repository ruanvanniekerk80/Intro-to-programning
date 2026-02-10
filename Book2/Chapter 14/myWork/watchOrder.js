// When the "placeOrder" button is clicked, run the placeOrder function
document.getElementById("placeOrder").addEventListener("click", placeOrder);

function placeOrder() {

   // Get values entered/selected by the user from the form
   var numWatches = document.getElementById("numWatch").value;
   var typeWatch = document.getElementById("typeWatch").value;
   var deliveryCity = document.getElementById("deliveryCity").value;
   var Voucher = document.getElementById("Voucher").value;

   // Calculate the price of the watches
   var orderPrice = calculatePrice(numWatches, typeWatch);
 
   // Calculate the delivery price
   var deliveryPrice = calculateDelivery(orderPrice, deliveryCity, Voucher);

   // Start building the output message
   var theOutput = "<p>Thank you for your order.</p>";

   // Check if delivery is free
   if (deliveryPrice === 0) {
      theOutput += "<p>You get free delivery!</p>";
   } else {
      theOutput += "<p>Your delivery cost is: R" + deliveryPrice + "</p>";
   }

   // Display the total cost (order price + delivery)
   theOutput += "<p>Your total is: R" + (orderPrice + deliveryPrice) + "</p>";

   // Show the result on the webpage
   document.getElementById("displayTotal").innerHTML = theOutput;
}

function calculatePrice(numWatch, typeWatch) {

   // Base price: number of watches × 300000
   var orderPrice = Number(numWatch) * 300000;

   return orderPrice;
}

function calculateDelivery(orderPrice, deliveryCity, Voucher) {

   // Default delivery price
   var deliveryPrice = 500;

   // Free delivery if:
   // - City is Johannesburg AND order price is more than 10
   // OR
   // - Voucher value is "yes"
   if (((deliveryCity === "Johannesburg") && (orderPrice > 300000)) || (Voucher === "yes")) {
      deliveryPrice = 0;
   } else {
      // Otherwise, delivery costs 500
      deliveryPrice = 500;
   }

   // Return the delivery price
   return orderPrice;
}
