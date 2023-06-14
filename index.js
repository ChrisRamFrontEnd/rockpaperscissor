let round = 0, wins = 0, losses = 0;
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
    const container = document.querySelector('.content');
    if(playerSelection === computerSelection){
        const tie = document.createElement('div');
        tie.classList.add('round');
        round++;
        tie.textContent = `Round: ${round}, Tie.`;
        container.appendChild(tie);
    }
    else if((playerSelection === 'rock' && computerSelection === 'scissor') 
    || (playerSelection === 'scissor' && computerSelection === 'paper') 
    || (playerSelection === 'paper' && computerSelection === 'rock')){
        const win = document.createElement('div');
        win.classList.add('round');
        round++;
        wins++;
        win.textContent = `Round: ${round}, Win.`;
        container.appendChild(win);
    }
    else if(!(playerSelection === 'rock' && computerSelection === 'scissor') 
    || !(playerSelection === 'scissor' && computerSelection === 'paper') 
    || !(playerSelection === 'paper' && computerSelection === 'rock')){
        const lose = document.createElement('div');
        lose.classList.add('round');
        round++;
        losses++;
        lose.textContent = `Round: ${round}, Lose.`;
        container.appendChild(lose);
    }

    if(round === 5){
        if(wins > losses){
            const endMessage = document.createElement('div');
            endMessage.textContent = 'You have beat the Computer!';
            endMessage.style.cssText = 'color: green';
            container.appendChild(endMessage);
        }
        else if(wins === losses){
            const endMessage = document.createElement('div');
            endMessage.textContent = 'You have Tied with the computer, Try again!';
            endMessage.style.cssText = 'color: blue';
            container.appendChild(endMessage);
        }
        else{
            const endMessage = document.createElement('div');
            endMessage.textContent = 'You have Lost to the Computer, better luck next time!';
            endMessage.style.cssText = 'color: red';
            container.appendChild(endMessage);
        }
    }
    if(round > 5){
        resets();
    }
}

function resets(){
    const container = document.querySelector('.content');
    while(container.children.length > 0)
        container.removeChild(container.firstChild);
    round = 0;
}

const reset = document.querySelector('#reset');
reset.addEventListener('click', ()=>{
    resets();
});
const scissor = document.querySelector('#scissor');
scissor.addEventListener('click', () =>{
    singleRound("scissor", getComputerChoice());
});

const rock = document.querySelector('#rock');
rock.addEventListener('click', ()=>{
    singleRound('rock', getComputerChoice());
});

const paper = document.querySelector('#paper');
paper.addEventListener('click', ()=>{
    singleRound('paper',getComputerChoice());
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