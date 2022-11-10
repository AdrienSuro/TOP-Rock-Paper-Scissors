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
        const roundResult = document.createElement('p'); 
        roundResult.textContent = `It's a draw!`;
        gameDiv.appendChild(roundResult);
        userPoints += 1;
        computerPoints += 1;
    }
    else if (computerChoice === "Paper" && userChoice === "Rock") {
        const roundResult = document.createElement('p'); 
        roundResult.textContent = `You lost, ${userChoice} beats ${computerChoice}.` ; 
        gameDiv.appendChild(roundResult);
        computerPoints += 1;
    }
    
    else if (computerChoice === "Paper" && userChoice === "Scissors") {
        const roundResult = document.createElement('p'); 
        roundResult.textContent = `You won, ${userChoice} beats ${computerChoice}.` ; 
        gameDiv.appendChild(roundResult);
        userPoints += 1;      
    }
    else if (computerChoice === "Rock" && userChoice === "Paper") {
        const roundResult = document.createElement('p'); 
        roundResult.textContent = `You won, ${userChoice} beats ${computerChoice}.` ; 
        gameDiv.appendChild(roundResult);     
        userPoints += 1;        
    }
    else if (computerChoice === "Rock" && userChoice === "Scissors") {
        const roundResult = document.createElement('p'); 
        roundResult.textContent = `You lost, ${userChoice} beats ${computerChoice}.` ; 
        gameDiv.appendChild(roundResult);
        computerPoints +=1 ;
    }
    else if (computerChoice === "Scissors" && userChoice === "Rock") {
        const roundResult = document.createElement('p'); 
        roundResult.textContent = `You won, ${userChoice} beats ${computerChoice}.` ; 
        gameDiv.appendChild(roundResult);
        userPoints += 1;        
    }
    else if (computerChoice === "Scissors" && userChoice === "Paper") {
        const roundResult = document.createElement('p'); 
        roundResult.textContent = `You lost, ${userChoice} beats ${computerChoice}.` ; 
        gameDiv.appendChild(roundResult);
        computerPoints +=1 ;
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
