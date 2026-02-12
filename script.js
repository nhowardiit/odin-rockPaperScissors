function getComputerChoice() {
    const rand = Math.random();
    if (rand < 1 / 3) return "rock";
    else if (rand < 2 / 3) return "paper";
    else return "scissors";
}

function getHumanChoice() {
    return prompt("Rock, Paper, or Scissors").toLowerCase();
}

function humanLose(humanChoice, compChoice) {
    console.log(`You lose. ${compChoice} beats ${humanChoice}`);
}

function humanWin(humanChoice, compChoice) {
    console.log(`You Win. ${humanChoice} beats ${compChoice}`);
}
function playRound(humanChoice, compChoice) {
    if (humanChoice === compChoice) {
        console.log(`Tie. Both players picked ${humanChoice}`);
    } else if (humanChoice === "rock") {
        if (compChoice == "paper") {
            humanLose(humanChoice, compChoice);
            return 0;
        } else {
            humanWin(humanChoice, compChoice);
            return 1;
        }
    } else if (humanChoice === "paper") {
        if (compChoice == "scissors") {
            humanLose(humanChoice, compChoice);
            return 0;
        } else {
            humanWin(humanChoice, compChoice);
            return 1;
        }
    } else if (humanChoice === "scissors") {
        if (compChoice == "rock") {
            humanLose(humanChoice, compChoice);
            return 0;
        } else {
            humanWin(humanChoice, compChoice);
            return 1;
        }
    } else {
        console.log("Please Enter Valid Choice");
    }
}

function playGame() {
    let humanScore = 0;
    let compScore = 0;

    while (humanScore < 3 && compScore < 3) {
        const compChoice = getComputerChoice();
        const humanChoice = getHumanChoice();

        const roundResult = playRound(humanChoice, compChoice);

        if (roundResult == 1) {
            humanScore++;
        } else if (roundResult === 0) {
            compScore++;
        }
        console.log(`Human: ${humanScore} Computer: ${compScore}`);
    }
    if (humanScore > compScore) {
        console.log("You Win!");
    } else {
        console.log("You Lose");
    }
}

playGame();
