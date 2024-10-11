const userGuess = document.getElementById("userGuess");
const myLabel = document.getElementById("myLabel");
const myButton = document.getElementById("myButton");
const textGuess = document.getElementById("textGuess");
const userAttempt = document.getElementById("userAttempt");
const finalAttempt = document.getElementById("finalAttempt");
const playAgain = document.getElementById("playAgain");

const min = 1;
const max = 100;

let guess;
let rdmNumber = Math.floor(Math.random() * max) + min;
let attempt = 0;

myLabel.textContent = `Guess a number between ${min} - ${max}`;
console.log(rdmNumber);

playAgain.style.display = "none";

myButton.onclick = function()
{
    guess = userGuess.value.trim();
    
    if(guess === "")
    {
        textGuess.textContent = "Please enter a valid number";
        console.log(rdmNumber);
    }

    guess = Number(guess);

    if (isNaN(guess)) {
        textGuess.textContent = "Please enter a valid number";
        return;
    }

    if (guess === rdmNumber) {
        textGuess.textContent = `You guessed correctly! The number was: ${rdmNumber}`;
        finalAttempt.textContent = `Your final attempt count is: ${attempt}`;
        
        userGuess.disabled = true;
        myButton.disabled = true;
        playAgain.style.display = "block";  
    } else if (guess < rdmNumber) {
        textGuess.textContent = "Your guess is too low";
        attempt++;
    } else {
        textGuess.textContent = "Your guess is too high";
        attempt++;
    }
    userAttempt.textContent = `Attempt: ${attempt}`;
};

playAgain.onclick = function ()
{
    rdmNumber = Math.floor(Math.random() * max) + min;
    attempt = 0;

    userGuess.value = "";
    textGuess.textContent = "";
    userAttempt.textContent = "";
    finalAttempt.textContent = "";
    myLabel.textContent = `Guess a number between ${min} - ${max}`;

    userGuess.disabled = false;
    myButton.disabled = false;

    playAgain.style.display = "none";
};
    
