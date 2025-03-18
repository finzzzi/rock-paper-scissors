// DOM Elements
const rockButton = document.querySelector("#rock");
const paperButton = document.querySelector("#paper");
const scissorsButton = document.querySelector("#scissors");
const roundResult = document.querySelector("#round-result");
const score = document.querySelector("#score");
const finalResult = document.querySelector("#final-result");

// Global variables to keep track of player and computer score.
let humanScore = 0;
let computerScore = 0;

// Function to get computer's choice
function getComputerChoice() {
    // Generate a random number between 0 and 2 to determine computer choice.
    let randomNumber = Math.floor(Math.random() * 3);
    
    if (randomNumber === 0) {
        return "rock";
    } else if (randomNumber === 1) {
        return "paper";
    } else {
        return "scissors";
    }
};

function getHumanChoice() {
    // Asks for player input.
    let humanChoice = prompt("rock, paper, scissors?");
    // Lowercase all the word
    humanChoice = humanChoice.toLowerCase();

    return humanChoice;
}

// Function to play a round
function playRound(humanChoice) {
    const computerChoice = getComputerChoice();
    roundResult.textContent = `Computer chose: ${computerChoice}`;
    
    if (humanChoice === computerChoice) {
        roundResult.textContent += " - It's a tie!";
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        roundResult.textContent += ` - You win! ${humanChoice} beats ${computerChoice}`;
        humanScore++;
    } else {
        roundResult.textContent += ` - You lose! ${computerChoice} beats ${humanChoice}`;
        computerScore++;
    }

    score.textContent = `Score -> You: ${humanScore}, Computer: ${computerScore}`;

    // Check if the game is over
    if (humanScore === 5 || computerScore === 5) {
        endGame();
    }
}

// Function to end the game and announce the result
function endGame() {
    finalResult.textContent = "It's the end of the game! And the result is...";
    console.log("It's the end of the game! And the result is...");
    if (humanScore > computerScore) {
        finalResult.textContent += `You win the game! Final score -> You: ${humanScore}, Computer: ${computerScore}`;
        console.log(`You win the game! Final score -> You: ${humanScore}, Computer: ${computerScore}`);
    } else if (humanScore < computerScore) {
        finalResult.textContent += `You lose the game! Final score -> You: ${humanScore}, Computer: ${computerScore}`;
        console.log(`You lose the game! Final score -> You: ${humanScore}, Computer: ${computerScore}`);
    } else {
        finalResult.textContent += `It's a tie! Final score -> You: ${humanScore}, Computer: ${computerScore}`;
        console.log(`It's a tie! Final score -> You: ${humanScore}, Computer: ${computerScore}`);
    }
}

// Event listeners for the buttons
rockButton.addEventListener("click", () => playRound("rock"));
paperButton.addEventListener("click", () => playRound("paper"));
scissorsButton.addEventListener("click", () => playRound("scissors"));
