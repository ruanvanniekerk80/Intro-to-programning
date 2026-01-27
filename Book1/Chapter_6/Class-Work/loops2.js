// ----- For Loops ----
// This line prints a label so we know the for loop is running
console.log("--- For loop ---");

// 'colors' starts at 0
// The loop runs as long as colors is less than 8
// After each loop, colors increases by 1
for (var colors = 0; colors < 8; colors++) {
   // Logs the current value of colors each time the loop runs
   console.log("color count", colors);
}

// ------- While Loop --------
// Prints a label for the while loop section
console.log('\n', "---- While Loop ---");

// Initialize colors variable
var colors = 0;

// The loop runs while colors is less than 8
while (colors < 8) {
   // Increase colors by 1 each time the loop runs
   colors++;

   // Logs the updated value of colors
   console.log("Color Count", colors);
}

// ------ For loop with Array ------
// Prints a label for the array loop section
console.log('\n', "-- For loop with array --");

// An array holding different color names
var colorArray = ["blue", "red", "Yellow", "purple", "green"];

// Loop through the array from index 0 to the last item
for (var i = 0; i < colorArray.length; i++) {
   // Logs each color in the array one by one
   console.log("Colors in the rainbow:", colorArray[i]);
}
