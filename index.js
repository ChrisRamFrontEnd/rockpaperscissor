function getComputerChoice(){
    let choice = Math.floor(Math.random() * 3) + 1;
    console.log(choice);
    return compChoice(+choice);
}

function compChoice(num){
    let choice;

    num === 1 ? choice = "rock" 
    : num === 2 ? choice = "scissor" 
    : choice = "paper";


    return choice;
}

function singleRound(playerSelection, computerSelection){

}

console.log(getComputerChoice());