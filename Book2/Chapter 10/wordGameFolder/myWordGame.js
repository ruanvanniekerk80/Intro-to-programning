// Get the button element from the HTML by its ID
let replaceButton = document.getElementById("replaceButton");

// Add a click event listener to the button
// When the button is clicked, the replaceIt function runs
replaceButton.addEventListener('click', replaceIt);

// This function builds and displays the story
function replaceIt() {

    // Get the div where the story will be displayed
    let storyDiv = document.getElementById("story");

    // Get user input values and wrap them in a span
    // The span allows styling with the "replacement" CSS class
    let adj1 = "<span class='replacement'>" + document.getElementById('adj1').value + '</span>';
    let verbING = "<span class='replacement'>" + document.getElementById('verbIng').value + '</span>';
    let nounPlural = "<span class='replacement'>" + document.getElementById('nounPlural').value + '</span>';
    let adj2 = "<span class='replacement'>" + document.getElementById('adj2').value + '</span>';
    let musicType = "<span class='replacement'>" + document.getElementById('musicType').value + '</span>';

    // Start building the story text
    let theStory = "<h1> My Story</h1> ";

    // Add sentences to the story using the user inputs
    theStory += 'One ' + adj1 + ' day, ';
    theStory += 'I was in my ' + verbING;
    theStory += ', reading a book about ' + nounPlural + '.<br></br>';
    theStory += 'when I heard ' + adj2 + " " + musicType + ' music playing in the background';

    // Insert the completed story into the HTML div
    storyDiv.innerHTML = theStory;
}
