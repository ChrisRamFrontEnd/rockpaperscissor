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

function singleRound(playerSelection, computerSelection){
    let select = playerSelection.toLowerCase();
    if(select === computerSelection)
        console.log('Tie');
    else if((select === 'rock' && computerSelection === 'scissor') 
    || (select === 'scissor' && computerSelection === 'paper') 
    || (select === 'paper' && computerSelection === 'rock'))
        console.log('Win');
    else if(!(select === 'rock' && computerSelection === 'scissor') 
    || !(select === 'scissor' && computerSelection === 'paper') 
    || !(select === 'paper' && computerSelection === 'rock'))
        console.log('Lose');
}

const buttons = document.querySelectorAll('button');
buttons.forEach((button) =>{
    button.addEventListener('click', singleRound(button.id, compChoice(getComputerChoice())));
});

// function game(){
//     let wins = 0, 
//     losses  = 0, 
//     ties = 0;
    
//     for(let i = 0; i < 5; i++){
//         let selection = prompt("Please enter one of the three choices, Rock, Paper, or Scissors");
//         let result = singleRound(selection, getComputerChoice());
//         if(result=== 1){
//             wins++;
//             document.getElementById("wins").innerHTML = `Wins: ${wins}`;
//         }
//         else if(result === 0){
//             losses++;
//             document.getElementById("losses").innerHTML = `Losses: ${losses}`;
//         }
//         else{
//             ties++;
//             document.getElementById("ties").innerHTML = `Ties: ${ties}`;
//         }
//     }
//     wins > losses ? document.getElementById("result").innerHTML = "YOU WON!!" 
//     : wins === losses ? document.getElementById("result").innerHTML = "YOU TIED!"
//     : ties >= wins ? document.getElementById("result").innerHTML = "You tied quite a bit there!"
//     : document.getElementById("result").innerHTML = "YOU LOSE!! :(";
// }