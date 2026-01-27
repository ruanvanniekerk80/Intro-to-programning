// --------- Video streaming subscription example -----
// Print a title so we know what example is running
console.log("-- Video streaming subscription example--");

// Boolean flag to check if the user is a member
let isMember = true;

// Boolean flag to check if the user has registered an email
let registerEmail = false;

// User's age
let age = 14;

// Check all conditions for premium access:
// - user must be a member
// - user must have a registered email
// - user must be at least 13 years old
if (isMember === true && registerEmail === true && age >= 13) {
   console.log("Access to premium content");

   // If the user is under 13 but has a registered email,
   // they can still access free content
} else if (age < 13 && registerEmail === true) {
   console.log("Access to free content ");

   // If none of the conditions above are met,
   // access is denied
} else {
   console.log("Access denied");
}


// ----------------- Ternary ----------------------
// Print spacing and a title for the ternary example
console.log('\n', '\n', "---- Ternary ----");

// Store the user's score
let score = 70;

// Use a ternary operator to decide pass or fail
// If score is less than 50 → "failed"
// Otherwise → "Congratulations, you have passed!!"
let result = (score < 50) ? "failed" : "Congratulations, you have passed!!";

// Display the final result and the score percentage
console.log("Final Score:", result, '\n', "Your score is", score + "%");
