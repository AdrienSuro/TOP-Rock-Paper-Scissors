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

//try to create a logic using do...while : the first round will be displayed without timeOut, for the others, the score will be displayed for 3 seconds.

//declare the functions :

function singleRound() {
    if (computerPoints === 5 || userPoints === 5 ) {
        return ;
    }
    getComputerChoice();
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

    if (userPoints === 5 && computerPoints === 5) {
        const finalResult = document.createElement('p');
        finalResult.textContent = `The game is over. It's a draw, how boring!`
        gameDiv.appendChild(finalResult);
    }
    else if (userPoints === 5 && computerPoints <= 5) {
        const finalResult = document.createElement('p');
        finalResult.textContent = `YOU WON THE GAME !!! You have ${userPoints} points, whereas the computer has only ${computerPoints} points! You did better than Kasparov.`
        gameDiv.appendChild(finalResult);
    }
    else if (userPoints <= 5 && computerPoints === 5) {
        const finalResult = document.createElement('p');
        finalResult.textContent = `YOU LOST THE GAME :-( You have ${userPoints} points, but the computer has  ${computerPoints} points! Humanity brace yourself !`
        gameDiv.appendChild(finalResult);
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
