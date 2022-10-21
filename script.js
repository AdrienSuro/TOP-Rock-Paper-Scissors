function getInputValue() {
    let playerChoice = document.getElementById("inputId").value;
    // console.log(playerChoice);
    singleRound(playerChoice, getComputerChoice());
}

function singleRound(player, computer) {
    if (player === computer) {
        alert("It's a draw!");
    }
    else if (computer === "Paper" && player === "Rock") {
        alert ("You lost, you're a looser.")
    }
    else if (computer === "Paper" && player === "Scissors") {
        alert ("You won, lucky bastard.")
    }
    else if (computer === "Rock" && player === "Paper") {
        alert ("You won, lucky bastard.")        
    }
    else if (computer === "Rock" && player === "Scissors") {
        alert ("You lost, you're a looser.")
    }
    else if (computer === "Scissors" && player === "Rock") {
        alert ("You won, lucky bastard.")        
    }
    else if (computer === "Scissors" && player === "Paper") {
        alert ("You lost, you're a looser.")
    }
}

function getComputerChoice() {
    randomNumber = Math.floor(Math.random() * 3);
    let computerChoice = '';
    if (randomNumber == 0) {
        computerChoice = "Rock";
        document.getElementById("computerChoice").innerHTML = computerChoice;
        return "Rock";
    }
    else if (randomNumber == 1) {
        computerChoice = 'Paper';
        document.getElementById("computerChoice").innerHTML = computerChoice;
        return "Paper";
    } 
    else if (randomNumber == 0) {
        computerChoice = 'Scissors';
        document.getElementById("computerChoice").innerHTML = computerChoice;
        return "Scissors";
    }
}

