// ==========================
// DECLARE VARIABLES
// ==========================

// Main story text area where results are displayed
var story = document.getElementById("story");

// Footer of the site (not used yet, but stored for later use)
var siteFooter = document.getElementById("siteFooter");

// Element that displays the current question
var question = document.getElementById("question");

// Container that holds the answer input area
var answer = document.getElementById("answer");

// Text input where the user types their answer
var yourAnswer = document.getElementById("yourAnswer");

// Submit button the user clicks to send an answer
var submit = document.getElementById("submit");

// Array that stores all user answers
var answers = [];


// ==========================
// EVENT LISTENERS
// ==========================

// Listen for clicks on the submit button
// When clicked, run the getAnswer() function
submit.addEventListener("click", getAnswer);


// ==========================
// START THE GAME
// ==========================

// Ask the first question (question 0)
askQuestion(0);


// ==========================
// FUNCTIONS
// ==========================

/*
askQuestion()
Displays a question based on the question number passed in.
*/
function askQuestion(questionNumber) {

    // Make sure the answer input area is visible
    answer.style.display = "block";

    // Reset the answers array length to match the current question
    // This prevents extra answers from lingering
    answers.length = questionNumber;

    // Decide which question to show
    switch (questionNumber) {
        case 0:
            question.innerHTML = "Are you ready to play?";
            break;
        case 1:
            question.innerHTML = "Go to Mars, or stay home?";
            break;
        case 2:
            question.innerHTML = "Risk it, or go home.";
            break;
        default:
            break;
    }
}


/*
getAnswer()
Gets the user's input, formats it, stores it,
and moves the story forward.
*/
function getAnswer() {

    // Convert user input to uppercase for easy comparison
    cleanInput = yourAnswer.value.toUpperCase();

    // Store the cleaned answer in the answers array
    answers.push(cleanInput);

    // Clear the input field for the next answer
    yourAnswer.value = "";

    // Continue the story based on the current answer number
    continueStory(answers.length - 1);
}


/*
continueStory()
Displays story text or error messages
based on the user's answers.
*/
function continueStory(answerNumber) {

    switch (answerNumber) {

        // FIRST QUESTION LOGIC
        case 0:
            if (answers[0] === "YES") {
                story.innerHTML = document.getElementById("answer01").innerHTML;
                askQuestion(1);
            } else if (answers[0] === "NO") {
                story.innerHTML = document.getElementById("answer02").innerHTML;
                askQuestion(0);
            } else {
                story.innerHTML = document.getElementById("err0").innerHTML;
                askQuestion(0);
            }
            break;

        // SECOND QUESTION LOGIC
        case 1:
            if (answers[1] === "GO TO MARS") {
                story.innerHTML = document.getElementById("answer11").innerHTML;
                askQuestion(2);
            } else if (answers[1] === "STAY HOME") {
                story.innerHTML = document.getElementById("answer12").innerHTML;
                theEnd();
            } else {
                story.innerHTML = document.getElementById("err1").innerHTML;
                askQuestion(1);
            }
            break;

        // THIRD QUESTION LOGIC
        case 2:
            if (answers[2] === "RISK IT") {
                story.innerHTML = document.getElementById("answer21").innerHTML;
                theEnd();
            } else if (answers[2] === "GO HOME") {
                story.innerHTML = document.getElementById("answer22").innerHTML;
                theEnd();
            } else {
                story.innerHTML = document.getElementById("err2").innerHTML;
                askQuestion(2);
            }
            break;

        // FALLBACK (SHOULD NOT USUALLY RUN)
        default:
            story.innerHTML = "The story is over!";
            break;
    }
}


/*
theEnd()
Ends the story and hides the answer input.
*/
function theEnd() {

    // Add "The End" to the story
    story.innerHTML += "<p>The End.</p>";

    // Remove the question text
    question.innerHTML = "";

    // Hide the answer input area
    answer.style.display = "none";
}
