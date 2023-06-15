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
    const comp = document.querySelector('.compChoice');
    if(playerSelection === computerSelection){
        comp.textContent = `Computer Chose: ${computerSelection}`;
        const tie = document.createElement('div');
        tie.classList.add('round');
        round++;
        tie.textContent = `Round: ${round}, Tie.`;
        tie.style.cssText = 'text-align:center; padding: 10px; border-radius:30px; border: solid black 5px';
        container.appendChild(tie);
    }
    else if((playerSelection === 'rock' && computerSelection === 'scissor') 
    || (playerSelection === 'scissor' && computerSelection === 'paper') 
    || (playerSelection === 'paper' && computerSelection === 'rock')){
        comp.textContent = `Computer Chose: ${computerSelection}`;
        const win = document.createElement('div');
        win.classList.add('round');
        round++;
        wins++;
        win.textContent = `Round: ${round}, Win.`;
        win.style.cssText = 'text-align:center; padding: 10px; border-radius:30px; border: solid black 5px';
        container.appendChild(win);
    }
    else if(!(playerSelection === 'rock' && computerSelection === 'scissor') 
    || !(playerSelection === 'scissor' && computerSelection === 'paper') 
    || !(playerSelection === 'paper' && computerSelection === 'rock')){
        comp.textContent = `Computer Chose: ${computerSelection}`;
        const lose = document.createElement('div');
        lose.classList.add('round');
        round++;
        losses++;
        lose.textContent = `Round: ${round}, Lose.`;
        lose.style.cssText = 'text-align:center; padding: 10px; border-radius:30px; border: solid black 5px';
        container.appendChild(lose);
    }

    if(round === 5){
        if(wins > losses){
            comp.textContent = ``;
            const endMessage = document.createElement('div');
            endMessage.textContent = 'You have beat the Computer!';
            endMessage.style.cssText = 'text-align: center; color: green';
            container.appendChild(endMessage);
        }
        else if(wins === losses){
            comp.textContent = ``;
            const endMessage = document.createElement('div');
            endMessage.textContent = 'You have Tied with the computer, Try again!';
            endMessage.style.cssText = 'color: blue; text-align: center';
            container.appendChild(endMessage);
        }
        else{
            comp.textContent = ``;
            const endMessage = document.createElement('div');
            endMessage.textContent = 'You have Lost to the Computer, better luck next time!';
            endMessage.style.cssText = 'color: red; text-align: center';
            container.appendChild(endMessage);
        }
    }
    if(round > 5){
        resets();
    }
}

function resets(){
    const container = document.querySelector('.content');
    const comp = document.querySelector('.compChoice');
    comp.textContent = ``;
    while(container.children.length > 0)
        container.removeChild(container.firstChild);
    round = 0;
    wins = 0;
    losses = 0;
}

function removeTransition(e){
    if(e.propertyName !== 'transform') return;
    this.classList.remove('selected');
}

const reset = document.querySelector('#reset');
reset.addEventListener('click', ()=>{
    reset.classList.add('selected');
    resets();
});
const scissor = document.querySelector('#scissor');
scissor.addEventListener('click', () =>{
    scissor.classList.add('selected');
    singleRound("scissor", getComputerChoice());
});

const rock = document.querySelector('#rock');
rock.addEventListener('click', ()=>{
    rock.classList.add('selected');
    singleRound('rock', getComputerChoice());
});

const paper = document.querySelector('#paper');
paper.addEventListener('click', ()=>{
    paper.classList.add('selected');
    singleRound('paper',getComputerChoice());
});

const buttons = document.querySelectorAll('button');
buttons.forEach(button => button.addEventListener('transitionend', removeTransition))
