function getComputerChoice(){
    let choice = Math.floor(Math.random() * 3) + 1;
    return compChoice(choice);
}

function compChoice(num){
    let choice;

    switch (num){
        case 1:
            choice = "rock";
            break;
        case 2:
            choice = 'scissor';
            break;
        case 3: 
            choice = "paper";
            break;
    }
    return choice;
}

function singleRound(playerSelection, computerSelection){
    
}