//declare the variables :
let userPoints = 0;
let computerPoints = 0;
let userChoice = '';
let computerChoice = '';
let computerInput = '';
let userInput = '';

const rockBtn = document.querySelector('#rock');
const paperBtn = document.querySelector('#paper');
const scissorsBtn = document.querySelector('#scissors');
const gameDiv = document.querySelector('.game');

rockBtn.addEventListener('click', () => {
    userChoice = "Rock";
    singleRound();
});

paperBtn.addEventListener('click', () => {
    userChoice = "Paper";
    singleRound();
});

scissorsBtn.addEventListener('click', () => {
    userChoice = "Scissors";
    singleRound();
});



//declare the functions :

function singleRound() {
    getComputerChoice();
    if (userPoints === 5 && computerPoints === 5) {
        //...FINISH THIS after single round logic is done
    }
    if (userChoice === computerChoice) {
        userPoints += 1;
        computerPoints += 1;
        const roundResult = document.createElement('p'); 
        const runningScore = document.createElement('p');
        roundResult.textContent = `It's a draw!` 
        runningScore.textContent = `You have ${userPoints}, Computer has ${computerPoints}. Click for next round!`
        gameDiv.appendChild(roundResult);
        gameDiv.appendChild(runningScore);

    }
    else if (computerChoice === "Paper" && userChoice === "Rock") {
        computerPoints += 1;
        const roundResult = document.createElement('p'); 
        const runningScore = document.createElement('p');        
        roundResult.textContent = `You lost, ${userChoice} gets beaten by ${computerChoice}.` 
        runningScore.textContent = `You have ${userPoints}, Computer has ${computerPoints}. Click for next round!` ; 
        gameDiv.appendChild(roundResult);
        gameDiv.appendChild(runningScore);
    }
    
    else if (computerChoice === "Paper" && userChoice === "Scissors") {
        userPoints += 1; 
        const roundResult = document.createElement('p'); 
        const runningScore = document.createElement('p');        
        roundResult.textContent = `You won, ${userChoice} beats ${computerChoice}.` 
        runningScore.textContent = `You have ${userPoints}, Computer has ${computerPoints}. Click for next round!` ; 
        gameDiv.appendChild(roundResult);
        gameDiv.appendChild(runningScore);
    }

    else if (computerChoice === "Rock" && userChoice === "Paper") {
        userPoints += 1;      
        const roundResult = document.createElement('p'); 
        const runningScore = document.createElement('p');        
        roundResult.textContent = `You won, ${userChoice} beats ${computerChoice}.` 
        runningScore.textContent = `You have ${userPoints}, Computer has ${computerPoints}. Click for next round!` ; 
        gameDiv.appendChild(roundResult);
        gameDiv.appendChild(runningScore);     
    }

    else if (computerChoice === "Rock" && userChoice === "Scissors") {
        computerPoints +=1 ;
        const roundResult = document.createElement('p'); 
        const runningScore = document.createElement('p');        
        roundResult.textContent = `You lost, ${userChoice} gets beaten by ${computerChoice}.` 
        runningScore.textContent = `You have ${userPoints}, Computer has ${computerPoints}. Click for next round!` ; 
        gameDiv.appendChild(roundResult);
        gameDiv.appendChild(runningScore);
    }

    else if (computerChoice === "Scissors" && userChoice === "Rock") {
        userPoints += 1;  
        const roundResult = document.createElement('p'); 
        const runningScore = document.createElement('p');        
        roundResult.textContent = `You won, ${userChoice} beats ${computerChoice}.` 
        runningScore.textContent = `You have ${userPoints}, Computer has ${computerPoints}. Click for next round!` ; 
        gameDiv.appendChild(roundResult);
        gameDiv.appendChild(runningScore);
    }

    else if (computerChoice === "Scissors" && userChoice === "Paper") {
        computerPoints +=1 ;
        const roundResult = document.createElement('p'); 
        const runningScore = document.createElement('p');        
        roundResult.textContent = `You lost, ${userChoice} gets beaten by ${computerChoice}.`
        runningScore.textContent = `You have ${userPoints}, Computer has ${computerPoints}. Click for next round!` ; 
        gameDiv.appendChild(roundResult);
        gameDiv.appendChild(runningScore);
    }
}

function getComputerChoice() {
    randomNumber = Math.floor(Math.random() * 3);
    if (randomNumber == 0) {
        computerChoice = "Rock";
    }
    else if (randomNumber == 1) {
        computerChoice = 'Paper';
    } 
    else if (randomNumber == 2) {
        computerChoice = 'Scissors';
    }
}




//run the function : 
