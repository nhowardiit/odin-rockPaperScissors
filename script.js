function getComputerChoice() {
    const rand = Math.random();
    if (rand < 1 / 3) return "rock";
    else if (rand < 2 / 3) return "paper";
    else return "scissors";
}

function playRound(humanChoice, compChoice) {
    const historyItem = document.createElement("li");
    historyItem.textContent = "";
    if (humanChoice === compChoice) {
        historyItem.textContent = `Tie. Both players picked ${humanChoice}`;
        moveHistory.prepend(historyItem);
    } else if (humanChoice === "rock") {
        if (compChoice == "paper") {
            historyItem.textContent = `Lose. ${compChoice} beats ${humanChoice}`;
            moveHistory.prepend(historyItem);
            return false;
        } else {
            historyItem.textContent = `Win. ${humanChoice} beats ${compChoice}`;
            moveHistory.prepend(historyItem);
            return true;
        }
    } else if (humanChoice === "paper") {
        if (compChoice == "scissors") {
            historyItem.textContent = `Lose. ${compChoice} beats ${humanChoice}`;
            moveHistory.prepend(historyItem);
            return false;
        } else {
            historyItem.textContent = `Win. ${humanChoice} beats ${compChoice}`;
            moveHistory.prepend(historyItem);
            return true;
        }
    } else if (humanChoice === "scissors") {
        if (compChoice == "rock") {
            historyItem.textContent = `Lose. ${compChoice} beats ${humanChoice}`;
            moveHistory.prepend(historyItem);
            return false;
        } else {
            historyItem.textContent = `Win. ${humanChoice} beats ${compChoice}`;
            moveHistory.prepend(historyItem);
            return true;
        }
    }
}

function scoreRound(humanChoice) {
    const humanWins = playRound(humanChoice, getComputerChoice());

    if (humanWins) {
        humanScoreValue++;
    } else {
        compScoreValue++;
    }
    humanScoreDisplay.textContent = humanScoreValue;
    compScoreDisplay.textContent = compScoreValue;
}

let humanScoreValue = 0;
let compScoreValue = 0;

const rockButton = document.querySelector(".rock");
const paperButton = document.querySelector(".paper");
const scissorsButton = document.querySelector(".scissors");

const moveHistory = document.querySelector("ul");

const humanScoreDisplay = document.querySelector(".humanScore");
const compScoreDisplay = document.querySelector(".compScore");

rockButton.addEventListener("click", () => {
    scoreRound("rock");
});
paperButton.addEventListener("click", () => {
    scoreRound("paper");
});
scissorsButton.addEventListener("click", () => {
    scoreRound("scissors");
});
