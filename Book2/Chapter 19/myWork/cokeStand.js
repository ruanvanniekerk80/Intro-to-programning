// Array of days for the 5-day forecast
var days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];

// Possible weather conditions
var weather = [
   "Sunny",
   "Partly Sunny",
   "Partly Cloudy",
   "Cloudy",
   "Raining",
   "Snowing",
   "Thunderstorm",
   "Foggy"
];

// Maximum and minimum possible temperatures
var maxTemp = 110;
var minTemp = 32;

// Cost price of one can of Coke
var canCost = 5;

// Array to store the generated temperature for each day
var dailyTemp = [];

// When the button is clicked, run the openTheStand function
document.getElementById("OpenTheStand").addEventListener("click", openTheStand);

// Generate the weather forecast when the page loads
generateWeather();


// Generates random weather and temperature for each day
function generateWeather() {
   var weatherToday; // weather for the current day
   var tempToday;    // temperature for the current day

   // Loop through each day
   for (var i = 0; i < days.length; i++) {

      // Pick a random weather condition
      weatherToday = weather[Math.floor(Math.random() * weather.length)];

      // Pick a random temperature between minTemp and maxTemp
      tempToday = Math.floor(Math.random() * (maxTemp - minTemp) + minTemp);

      // Store the temperature for later use
      dailyTemp[i] = tempToday;

      // Display the forecast on the page
      document.getElementById("5DayWeather").innerHTML +=
         "<div id='" + days[i] + "' class='" + weatherToday + "'>" +
         "<b>Forecast for " + days[i] + ":</b><br><br>" +
         weatherToday + " and " + tempToday + " degrees.</div>";
   }
}


// Runs the lemonade stand simulation
function openTheStand() {
   var canSold = 0;   // cans sold per day
   var totalCans = 0; // total cans sold for the week
   var cansLeft = 0;  // cans remaining to sell

   // Clear previous results
   resetForm();

   // Get user input values
   var numCans = Number(document.getElementById("numCans").value);
   var cansPrice = Number(document.getElementById("cansPrice").value);

   // Loop through each day
   for (var i = 0; i < days.length; i++) {

      // Calculate how many cans can be sold based on temperature and price
      canSold = Math.floor(dailyTemp[i] / cansPrice);

      // Calculate how many cans are still available
      cansLeft = numCans - totalCans;

      // Prevent selling more cans than available
      if (canSold > cansLeft) {
         canSold = cansLeft;
      }

      // Add daily sales to weekly total
      totalCans = canSold + totalCans;

      // Display daily sales result
      document.getElementById("result").innerHTML +=
         "<p>" + days[i] + ", you sold " + canSold + " cans of Coke.</p>";
   }

   // Display weekly summary
   displayResults(numCans, cansPrice, totalCans);
}


// Displays revenue, expenses, and profit
function displayResults(weeklyInventory, cansPrice, weeklySales) {

   // Calculate totals
   var revenue = weeklySales * cansPrice;
   var expense = weeklyInventory * canCost;
   var leftOver = weeklyInventory - weeklySales;
   var profit = revenue - expense;

   // Display final results
   document.getElementById("result").innerHTML +=
      "<p>You sold a total of " + weeklySales + " cans of Coke this week.</p>";
   document.getElementById("result").innerHTML +=
      "<p>Total revenue: R" + revenue + ".</p>";
   document.getElementById("result").innerHTML +=
      "<p>You have " + leftOver + " Cokes can left.</p>";
   document.getElementById("result").innerHTML +=
      "<p>Each can costs you R" + canCost + ". Your profit was R" + profit + ".</p>";
}


// Clears previous output from the page
function resetForm() {
   document.getElementById("result").innerHTML = "";
}
