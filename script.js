function getComputerChoice() {
    let computerChoice = '';
    randomNumber = Math.floor(Math.random() * 3);
    console.log(randomNumber);
    if (randomNumber == 0) {
        computerChoice = "Rock";
    }
    else if (randomNumber == 1) {
        computerChoice = "Paper";
    } 
    else if (randomNumber == 0) {
        computerChoice = "Scissors";
    }
}
console.log("You're great");
console.log(getComputerChoice());

let playerChoice = document.getElementById("playerChoice").value;
console.log(playerChoice);

// function singleRound() {
//     if playerChoice === computerChoice {
//         alert("It's a draw!");
//     }
//     else if computerChoice === "Paper" && playerChoice === "Rock" {
//         alert ("You lost, you're a looser.")
//     }
//     else if computerChoice === "Paper" && playerChoice === "Scissors" {
//         alert ("You won, lucky bastard.")
//     }
//     else if computerChoice === "Rock" && playerChoice === "Paper" {
//         alert ("You won, lucky bastard.")        
//     }
//     else if computerChoice === "Rock" && playerChoice === "Scissors" {
//         alert ("You lost, you're a looser.")
//     }
//     else if computerChoice === "Scissors" && playerChoice === "Rock" {
//         alert ("You won, lucky bastard.")        
//     }
//     else if computerChoice === "Scissors" && playerChoice === "Paper" {
//         alert ("You lost, you're a looser.")
//     }
// }