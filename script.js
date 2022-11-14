//VARIABLES DECLARATION
let userPoints = 0;
let computerPoints = 0;
let userChoice = '';
let computerChoice = '';
let computerInput = '';
let userInput = '';

//QUERY SELECTORS
const rockBtn = document.querySelector('.rock');
const paperBtn = document.querySelector('.paper');
const scissorsBtn = document.querySelector('.scissors');
const roundWinner = document.querySelector('.roundWinner');
const nextRound = document.querySelector('.nextRound') ;
const questionComputer = document.querySelector('.questionComputer') ;
const rockComputer = document.querySelector('.rockComputer') ;
const scissorsComputer = document.querySelector('.scissorsComputer') ;
const paperComputer = document.querySelector('.paperComputer') ;
const currentScore = document.querySelector('.currentScore');
const currentComputerScore = document.querySelector('.currentComputerScore');
const reloadBtn = document.querySelector('.reloadBtn');

//SET SCORE :
currentScore.textContent = `${userPoints}` ;
currentComputerScore.textContent = `${computerPoints}`;

//EVENTS
rockBtn.addEventListener('click', () => {
    userChoice = "Rock";
    rockBtn.classList.toggle('grow');
    singleRound();
});

paperBtn.addEventListener('click', () => {
    userChoice = "Paper";
    paperBtn.classList.toggle('grow');
    singleRound();
});

scissorsBtn.addEventListener('click', () => {
    userChoice = "Scissors";
    scissorsBtn.classList.toggle('grow');
    singleRound();
});

// Function for randomly selecting computer choice :
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

// Function for displaying computer choice : 
function displayComputerChoice() {
    questionComputer.classList.toggle('grow');
    setTimeout ( () => questionComputer.classList.toggle('invisible'), 1000);
    if (computerChoice == 'Rock') {
        setTimeout ( () => rockComputer.classList.toggle('invisible'), 1000);
        setTimeout ( () => rockComputer.classList.toggle('invisible'), 4500);
        setTimeout ( () => questionComputer.classList.toggle('grow'), 4500)
    } 
    else if (computerChoice == 'Paper') {
        setTimeout ( () => paperComputer.classList.toggle('invisible'), 1000);
        setTimeout ( () => paperComputer.classList.toggle('invisible'), 4500);
        setTimeout ( () => questionComputer.classList.toggle('grow'), 4500)
    }
    else if (computerChoice == 'Scissors') {
        setTimeout ( () => scissorsComputer.classList.toggle('invisible'), 1000);
        setTimeout ( () => scissorsComputer.classList.toggle('invisible'), 4500);
        setTimeout ( () => questionComputer.classList.toggle('grow'), 4500)
    }
};

// Function for displaying the winner of the round : 
function displayRoundWinner() {
    roundWinner.innerHTML=`<p>${userChoice} beats ${computerChoice}. <br><br> You won this round!</p>` ;
    setTimeout (() => roundWinner.classList.toggle('roundWinnerDisplay'), 2000);
    setTimeout (() => roundWinner.classList.toggle('roundWinnerDisplay'), 4500);
}

function displayRoundWinnerIfComputer() {
    roundWinner.innerHTML=`<p>${computerChoice} beats ${userChoice}. <br><br> You lost this round :-( </p>` ;
    setTimeout (() => roundWinner.classList.toggle('roundWinnerDisplay'), 2000);
    setTimeout (() => roundWinner.classList.toggle('roundWinnerDisplay'), 4500);
}

function displayRoundWinnerIfDraw() {
    roundWinner.innerHTML="<p>It's a draw, try again.</p>" ;
    setTimeout (() => roundWinner.classList.toggle('roundWinnerDisplay'), 2000);
    setTimeout (() => roundWinner.classList.toggle('roundWinnerDisplay'), 4500);
}

// Function for resetting the game for the next ground :
function resetForNextRound() {
    switch (userChoice) {
        case "Rock":
            rockBtn.classList.remove('grow');
            break;

        case "Scissors":
            scissorsBtn.classList.remove('grow');
            break;

        case "Paper":
            paperBtn.classList.remove('grow');
            break;

        default:
            console.log("Something is wrong with your switch");
            break;   
    };
    questionComputer.classList.toggle('invisible');
};

// Update scores : 
function updateScores() {
    setTimeout( () => currentScore.textContent = `${userPoints}`, 4500) ;
    setTimeout( () => currentComputerScore.textContent = `${computerPoints}`, 4500) ;
}

// Check if final round :
function checkFinalRound() {
if (computerPoints === 5) {
    roundWinner.innerHTML="<p>YOU LOST AGAINST THE COMPUTER !! :O Machines will soon take over the planet! Humanity brace yourself!</p>"
    setTimeout (() => roundWinner.classList.toggle('roundWinnerDisplay'), 4500);
}

else if (userPoints === 5) {
    roundWinner.innerHTML="<p>You did better than Kasparov, congratulations ! </p>" ;
    setTimeout (() => roundWinner.classList.toggle('roundWinnerDisplay'), 4500);}
};

function singleRound() {

getComputerChoice();

if ((computerChoice === "Paper" && userChoice === "Scissors") || (computerChoice === "Rock" && userChoice === "Paper") || (computerChoice === "Scissors" && userChoice === "Rock")) {
    displayComputerChoice();
    displayRoundWinner();
    userPoints += 1;
    setTimeout ( () => resetForNextRound(), 4500);
    updateScores();
    checkFinalRound();
}

else if ((computerChoice === "Paper" && userChoice === "Rock") || (computerChoice === "Rock" && userChoice === "Scissors") || (computerChoice === "Scissors" && userChoice === "Paper")) {
    displayComputerChoice();
    displayRoundWinnerIfComputer() ;
    computerPoints += 1;
    setTimeout ( () => resetForNextRound(), 4500);
    updateScores();
    checkFinalRound() ;
}

else if (userChoice === computerChoice) {
    displayComputerChoice();
    displayRoundWinnerIfDraw() ;
    setTimeout ( () => resetForNextRound(), 4500);
    updateScores();
    checkFinalRound() ;
}
};