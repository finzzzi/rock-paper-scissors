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



function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice) {
        if (humanChoice === computerChoice) {
            console.log(`Computer chose: ${computerChoice}`);
            console.log("It's a tie!");
            console.log(`Score -> You: ${humanScore}, Computer: ${computerScore}`);
        } else if (
            (humanChoice === "rock" && computerChoice === "scissors") ||
            (humanChoice === "paper" && computerChoice === "rock") ||
            (humanChoice === "scissors" && computerChoice === "paper")
        ) {
            console.log(`Computer chose: ${computerChoice}`);
            console.log(`You win! ${humanChoice} beats ${computerChoice}`);
            humanScore++;
            console.log(`Score -> You: ${humanScore}, Computer: ${computerScore}`);
        } else {
            console.log(`Computer chose: ${computerChoice}`);
            console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
            computerScore++;
            console.log(`Score -> You: ${humanScore}, Computer: ${computerScore}`);
        }
    }

    for (let i = 0; i < 5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();

        playRound(humanSelection, computerSelection);
    }

    if (humanScore > computerScore) {
        console.log(`You win the game! Final score -> You: ${humanScore}, Computer: ${computerScore}`);
    } else if (humanScore < computerScore) {
        console.log(`You lose the game! Final score -> You: ${humanScore}, Computer: ${computerScore}`);
    } else {
        console.log(`It's a tie! Final score -> You: ${humanScore}, Computer: ${computerScore}`);
    }
}

playGame();
