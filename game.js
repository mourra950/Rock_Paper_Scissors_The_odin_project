function computerPlay() {

    let a = Math.floor(Math.random() * 3)
    if (a == 0) {
        a = "Rock";
    }
    else if (a == 1) {
        a = "Paper";
    }
    else {
        a = "Scissors";
    }
    return a;
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        return "tie";
    }
    else if (playerSelection == "Rock") {
        if (computerSelection == "Paper") {
            return "You Lose! Paper beats Rock"
        }
        else {
            return "You Win! Rock beats Scissors"
        }
    }
    else if (playerSelection == "Paper") {
        if (computerSelection == "Scissors") {
            return "You Lose! Scissors beats Paper "
        }
        else {
            return "You Win! Paper beats Rock"
        }
    }
    else if (playerSelection == "Scissors") {
        if (computerSelection == "Rock") {
            return "You Lose! Rock beats Scissors"
        }
        else {
            return "You Win! Scissors beats Paper"
        }
    }
}
function game() {
    for (let i = 0; i < 5; i++) {
        console.log(playRound(computerPlay(), computerPlay()))
    }

}