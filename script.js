const guessInput = document.getElementById("guessInput");
const guessBtn = document.getElementById("guessBtn");
const feedback = document.getElementById("feedback");
const resetBtn = document.getElementById("resetBtn");

let secretNumber = Math.floor(Math.random() * 20) + 1;

guessBtn.addEventListener("click", function(){
    let guessNumber = Number(guessInput.value);
    if(guessNumber === secretNumber){
        feedback.textContent = "MATCH!!";
    } else if (guessNumber > secretNumber){
        feedback.textContent = "Too high";
    } else if (guessNumber < secretNumber){
        feedback.textContent = "Too low";
    }
});