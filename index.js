function getComputerChoice(){
    let choice = Math.floor(Math.random() * 3) + 1;
    return compChoice(choice);
}

function compChoice(num){
    let choice;
    num === 1 ? choice = "rock" 
    : num === 2 ? choice = "scissor" 
    : choice = "paper";
    return choice;
}

function singleRound(computerSelection){
    let select = prompt("Please enter one of the three choices, Rock, Paper, or Scissors");
    if(select === computerSelection)
        return 2;//`TIE!! Player selected: ${select}, Computer selected: ${computerSelection}`;
    else if((select === 'rock' && computerSelection === 'scissor') 
    || (select === 'scissor' && computerSelection === 'paper') 
    || (select === 'paper' && computerSelection === 'rock'))
        return 1;//`YOU WIN!! ${select} beats ${computerSelection}, nice job!!`;
    else 
        return 0;//`YOU LOSE!!! ${computerSelection} beats ${select}, better luck next time!`;
}

function game(){
    let wins = 0, 
    losses  = 0, 
    ties = 0;
    
    for(let i = 0; i < 5; i++){
        if(singleRound(getComputerChoice) === 1){
            wins++;
            document.getElementById("wins").innerHTML = `Wins: ${wins}`;
        }
        else if(singleRound(getComputerChoice) === 0){
            losses++;
            document.getElementById("losses").innerHTML = `Losses: ${losses}`;
        }
        else{
            ties++;
            document.getElementById("ties").innerHTML = `Ties: ${ties}`;
        }
    }

    
}