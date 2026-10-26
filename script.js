const guessInput = document.getElementById("guessInput");
const guessBtn = document.getElementById("guessBtn");
const feedback = document.getElementById("feedback");
const resetBtn = document.getElementById("resetBtn");
const guessCount = document.getElementById("guessCount");

let guesses = 0; 

let secretNumber = Math.floor(Math.random() * 20) + 1;

guessBtn.addEventListener("click", function(){
    let guessNumber = Number(guessInput.value);
    guesses = guesses + 1;
    guessCount.textContent = "guesses: " + guesses;
    if(guessNumber === secretNumber){
        feedback.textContent = "MATCH!!";
    } else if (guessNumber > secretNumber){
        feedback.textContent = "Too high";
    } else if (guessNumber < secretNumber){
        feedback.textContent = "Too low";
    }
});

resetBtn.addEventListener("click", function(){
    secretNumber = Math.floor(Math.random() * 20) + 1;
    feedback.textContent = "";
    guessInput.value = "";
    guesses = 0;
    guessCount.textContent = "guesses: " + guesses;
});