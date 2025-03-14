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

function playGame() {
    // Variables to store player and computer score.
    let humanScore = 0;
    let computerScore = 0;

    // Determines who wins the round, or a tie, based on the player choice and computer choice. Output the score in the end.
    function playRound(humanChoice, computerChoice) {
        console.log(`Computer chose: ${computerChoice}`);
        
        if (humanChoice === computerChoice) {
            console.log("It's a tie!");
        } else if (
            (humanChoice === "rock" && computerChoice === "scissors") ||
            (humanChoice === "paper" && computerChoice === "rock") ||
            (humanChoice === "scissors" && computerChoice === "paper")
        ) {
            console.log(`You win! ${humanChoice} beats ${computerChoice}`);
            humanScore++;
        } else {
            console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
            computerScore++;
        }

        console.log(`Score -> You: ${humanScore}, Computer: ${computerScore}`);
    }

    // Play a round of 5.
    for (let i = 0; i < 5; i++) {
        console.log(`Round ${i + 1}`);
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();

        playRound(humanSelection, computerSelection);
    }

    // Announcement of the end of the game and result.
    console.log("It's the end of the game! And the result is...")
    if (humanScore > computerScore) {
        console.log(`You win the game! Final score -> You: ${humanScore}, Computer: ${computerScore}`);
    } else if (humanScore < computerScore) {
        console.log(`You lose the game! Final score -> You: ${humanScore}, Computer: ${computerScore}`);
    } else {
        console.log(`It's a tie! Final score -> You: ${humanScore}, Computer: ${computerScore}`);
    }
}

playGame();
