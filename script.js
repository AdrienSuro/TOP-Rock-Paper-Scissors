let userPoints = 0;
let computerPoints = 0;
let userChoice = '';
let computerChoice = '';

function game() {
    for (let i = 0; i < 5; i++) {
        singleRound();
    }
    if (userPoints > computerPoints) {
        console.log("You're the best, you won the game!");
    }
    else if (userPoints < computerPoints) {
        console.log("You lost... Try again!");
    }
    else {
        console.log("Oh oh... Seems like it's a final draw. Equality for all! The communist inside you shall be happy.");
    }
}

function singleRound() {
    getComputerChoice();
    getUserChoice();
    if (userChoice === computerChoice) {
        console.log("It's a draw!");
        userPoints += 1;
        computerPoints += 1;
    }
    else if (computerChoice === "Paper" && userChoice === "Rock") {
        console.log(`You lost, ${computerChoice} beats ${userChoice}`);
        computerPoints +=1 ;
    }
    else if (computerChoice === "Paper" && userChoice === "Scissors") {
        console.log(`You won, ${userChoice} beats ${computerChoice}.`);  
        userPoints += 1;      
    }
    else if (computerChoice === "Rock" && userChoice === "Paper") {
        console.log(`You won, ${userChoice} beats ${computerChoice}.`);      
        userPoints += 1;        
    }
    else if (computerChoice === "Rock" && userChoice === "Scissors") {
        console.log(`You lost, ${computerChoice} beats ${userChoice}`);
        computerPoints +=1 ;
    }
    else if (computerChoice === "Scissors" && userChoice === "Rock") {
        console.log(`You won, ${userChoice} beats ${computerChoice}.`); 
        userPoints += 1;        
    }
    else if (computerChoice === "Scissors" && userChoice === "Paper") {
        console.log(`You lost, ${computerChoice} beats ${userChoice}`);
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

function getUserChoice() {
    randomNumber = Math.floor(Math.random() * 3);
    if (randomNumber == 0) {
        userChoice = "Rock";
    }
    else if (randomNumber == 1) {
        userChoice = 'Paper';
    } 
    else if (randomNumber == 2) {
        userChoice = 'Scissors';
    }
}

game();