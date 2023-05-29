function getComputerChoice(){
    let choice = Math.floor(Math.random() * 3) + 1;
    return compChoice(choice);
}

function compChoice(num){
    let choice;

    num = 1 ? "rock" 
    : num = 2 ? "scissor" 
    : "paper";

    return choice;
}

function singleRound(playerSelection, computerSelection){

}

console.log(getComputerChoice());