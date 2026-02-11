// Starting amount of money the user has
var money = 280;

// Counter to keep track of how many tickets were bought
var tickets = 0;

// Display the starting money on the page
document.getElementById("money").innerHTML = money;

// When the "placeOrder" button is clicked, run the buyTicket function
document.getElementById("placeOrder").addEventListener("click", buyTicket);

// Main function that handles buying tickets
function buyTicket() {

   // Reset money, tickets, and receipt display before starting
   resetForm();

   // Day counter
   var day = 0;

   // Keep buying tickets while there is still money
   while (money > 0) {
      day++;

      // Get the ticket price for the day
      var priceToday = getBusTicketPrice();

      // Get number of tickets the user wants from input field
      var numberOfTickets = document.getElementById("numTickets").value;

      // Calculate total cost for today
      var totalPrice = priceToday * numberOfTickets;

      // Check if user has enough money
      if (money >= totalPrice) {

         // Subtract the cost from money
         money = money - totalPrice;

         // Increase ticket count
         tickets++;

         // Display purchase details
         document.getElementById("receipt").innerHTML +=
            "<p>On day " + day + ", Bus Ticket are: R" + priceToday +
            ". You have R" + money.toFixed(2) + " left.</p>";

      } else {

         // Display message if user can't afford tickets
         document.getElementById("receipt").innerHTML +=
            "<p>Today, Tickets are: R" + priceToday +
            ". You don't have enough money. Maybe ask a co-worker to give you a lift.</p>";

         // Stop the loop by setting money to 0
         money = 0;
      }
   }

   // Display total tickets bought at the end
   document.getElementById("receipt").innerHTML +=
      "<p>You bought " + tickets + " Tickets this week.</p>";
}

// Generates a random bus ticket price
function getBusTicketPrice() {

   // Random price between 19 and 21 (rounded to 2 decimals)
   var ticketPrice = (Math.random() * (2 - 0) + 19).toFixed(2);
   return ticketPrice;
}

// Resets values and clears the receipt
function resetForm() {
   money = 280;           // Reset money
   tickets = 0;           // Reset ticket count
   document.getElementById("receipt").innerHTML = ""; // Clear receipt
}
