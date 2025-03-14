let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
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
    humanChoice = prompt("rock, paper, scissors?");
    // Lowercase all the word
    humanChoice = humanChoice.toLowerCase();

    return humanChoice;
}