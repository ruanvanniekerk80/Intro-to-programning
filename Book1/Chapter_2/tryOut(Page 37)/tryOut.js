// Age of the person
var age = 23;

// Indicates whether the person is accompanied by a parent or guardian
var accompanied = true;

// Check if the person is 13 or older
if (age >= 13) {
   console.log("Allowed to enter theater");

   // If the person is under 13 but accompanied by a parent/guardian
} else if (age < 13 && accompanied == true) {
   console.log("Allowed under parent supervision");

   // If the person is under 13 and not accompanied
} else {
   console.log("Access is not permitted");
}
