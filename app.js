let playerSelection = prompt("Do you choose rock, paper, or scissors?").toLowerCase();
let computerSelection = "";
computerPlay();

// Randomly Generate Computers Selection
function computerPlay() {
    const weapons = ['rock', 'paper', 'scissors']
    let randomNumber = Math.random();
    if (randomNumber <= .33) {
        computerSelection = weapons[0];
    } else if (randomNumber >= .34 && randomNumber <= .66) {
        computerSelection = weapons[1];
    } else if (randomNumber >= .67) {
        computerSelection = weapons[2];
    }
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection == 'rock' && computerSelection === 'paper') {
        return `You lost! The computer chose ${computerSelection}. Better luck next time!`;
    } else if (playerSelection == 'rock' && computerSelection == 'scissors') {
        return `You won! The computer chose ${computerSelection}.`
    } else if (playerSelection == 'rock' && computerSelection == 'rock') {
        return `You tied! The computer chose ${computerSelection}. Better luck next time!`;
    } else if (playerSelection == 'paper' && computerSelection == 'scissors') {
        return `You lost! The computer chose ${computerSelection}. Better luck next time!`;
    } else if (playerSelection == 'paper' && computerSelection == 'rock') {
        return `You won! The computer chose ${computerSelection}.`
    } else if (playerSelection == 'paper' && computerSelection == 'paper') {
        return `You tied! The computer chose ${computerSelection}. Better luck next time!`;
    } else if (playerSelection == 'scissors' && computerSelection == 'paper') {
        return `You won! The computer chose ${computerSelection}.`
    } else if (playerSelection == 'scissors' && computerSelection == 'rock') {
        return `You lost! The computer chose ${computerSelection}. Better luck next time!`;
    } else if (playerSelection == 'scissors' && computerSelection == 'scissors') {
        return `You tied! The computer chose ${computerSelection}. Better luck next time!`;
    }
} 



console.log(playRound(playerSelection, computerSelection));



