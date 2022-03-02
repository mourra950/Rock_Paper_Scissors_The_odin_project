function computerPlay() {

    let a = Math.floor(Math.random() * 3)
    if (a == 0) {
        a = "rock";
    }
    else if (a == 1) {
        a = "paper";
    }
    else {
        a = "scissors";
    }
    return a;
}

function game(playermove, computermove) {
    playermove = "rock"
    computermove = computerPlay()
    console.log(playermove)
    console.log(computermove)
    if (playermove == computermove) {
        return "tie";
    }
    else if (playermove == "rock") {
        if (computermove == "paper") {
            return "lose"
        }
        else {
            return "win"
        }
    }
    else if (playermove == "paper") {
        if (computermove == "scissors") {
            return "lose"
        }
        else {
            return "win"
        }
    }
    else if (playermove == "scissors") {
        if (computermove == "rock") {
            return "lose"
        }
        else {
            return "win"
        }
    }
}