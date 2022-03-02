function computerPlay() {
    
    let a=  Math.floor(Math.random() * 3)
    if (a == 0){
        a = "rock";
    }
    else if (a == 1){
        a = "paper";
    }
    else{
        a = "scissors";
    }
    return a;
}
