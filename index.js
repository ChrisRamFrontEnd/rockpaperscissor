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
    let select = playerSelection.toLowerCase();
    if(select === computerSelection)
        return `TIE!! Player selected: ${select}, Computer selecyed: ${computerSelection}`;
    else if((select === 'rock' && computerSelection === 'scissor') 
    || (select === 'scissor' && computerSelection === 'paper') 
    || (select === 'paper' && computerSelection === 'rock'))
        return `YOU WIN!! ${select} beats ${computerSelection}, nice job!!`;
    else 
        return `YOU LOSE!!! ${computerSelection} beats ${select}, better luck next time!`;
}

console.log(singleRound('ROCK', getComputerChoice()));