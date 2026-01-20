// Start a loop with i set to 0; run the loop while i is less than or equal to 10;
// increase i by 2 after each iteration
for (var i = 0; i <= 10; i += 2) {

   // Print the current value of i to the console
   console.log(i);
}

// Start a loop with i set to 1; continue looping while i is less than or equal to 10;
// increase i by 2 each time to get only odd numbers
for (var i = 1; i <= 10; i += 2) {

   // Print the current value of i to the console
   console.log(i);
}



// Start a loop with i set to 100
// Keep looping as long as i is greater than or equal to 0
// After each loop, subtract 10 from i
for (var i = 100; i >= 0; i -= 10) {

   // Print the current value of i to the console
   console.log(i);
}

// Start a loop with i set to 0; continue looping while i is less than 5;
// increment i by 1 before the next iteration
for (var i = 0; i < 5; ++i) {

   // Print the current value of i to the console
   console.log(i);
}


// Initialize i with the value 1
// The loop condition checks if i is less than 5
// After each iteration, i is decremented (--i)
for (var i = 1; i < 5; --i) {

   // Print the current value of i to the console
   // This will cause an infinite loop because i keeps decreasing
   // and will always remain less than 5
   console.log(i);
}


