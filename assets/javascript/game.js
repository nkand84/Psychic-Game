var wins, losses, guesses, computerGuess;

// Creating variables to hold the number of wins, and losses. 
// function init to initialize the variables 
function init() {
    wins = 0;
    losses = 0;
    guesses = 9;
    // empty array to hold user inputs
    userInputArray = [];
    // Randomly generates from a-z i.e. ascii values from 97 to 122 
    computerGuess = String.fromCharCode(Math.floor(Math.random() * (122 - 97)) + 97);
    console.log(computerGuess);
}
init();
//function reset
function reset() {
    guesses = 9;
    userInputArray = [];
    // Randomly generates from a-z i.e. ascii values from 97 to 122 
    computerGuess = String.fromCharCode(Math.floor(Math.random() * (122 - 97)) + 97);
    console.log(computerGuess); 
}
// This function is run whenever the user presses a key.
document.onkeyup = function (event) {

    // Determines which key was pressed.
    var userGuess = event.key;
    userInputArray.push(userGuess);
    // converting user inputs to lowercase
    userGuess = userGuess.toLowerCase();

    // if user choice equals computer choice then increment wins variable with an alert msg
    if (userGuess === computerGuess) {
        wins++;
        alert("Wow, You are a Psychic!!");
        reset();
    }
    //if user chose different
    else if (userGuess != computerGuess) {
        //decrement guesses
        guesses--;
        // if guesses = 0, reset the game variables
        if (guesses === 0) {
            alert("Sorry, you are not a psychic!");
            losses++;
            // alert("Game Over");
            reset();
        }
    }


    // Creating a variable to hold HTML. HTML now keeps track of the user and computer guesses, and wins/losses.
    var html =
        "<p>You chose: " + userGuess + "</p>" +
        // "<p>The computer chose: " + computerGuess + "</p>" +
        "<p>wins: " + wins + "</p>" +
        "<p>losses: " + losses + "</p>" +
        "<p>Guesses: " + guesses + "</p>" +
        "<p>Guesses Left: " + userInputArray + "</p>";
    // Set the inner HTML contents of the #game div to our html string
    document.getElementById("game").innerHTML = html;

};