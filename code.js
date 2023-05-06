let computerChoice;
let playerChoice;
let playerPoints = 0;
let computerPoints = 0;
function getComputerChoice(){
    return Math.floor(Math.random()*3)+1;
}
function round(playerChoice, computerChoice){
    // playerChoice = prompt("Pick rock, paper, or scissor")
    console.log(playerChoice);
    playerChoice = playerChoice.toUpperCase();
    console.log(playerChoice);
    // while(playerChoice != "ROCK" && playerChoice != "PAPER" && playerChoice != "SCISSOR"){
    //     playerChoice = prompt("Incorrect typing. Try again.").toUpperCase()
    // }
    computerChoice = getComputerChoice();
    console.log(computerChoice);
    if(playerChoice == "ROCK" && computerChoice == 1){
        return "Ambos jogaram pedra. Emptate";
    }
    if(playerChoice == "ROCK" && computerChoice == 2){
        computerPoints+=1
        return "Você escolheu pedra e o computador escolheu papel. Você perdeu."
    }
    if(playerChoice == "ROCK" && computerChoice == 3){
        playerPoints+=1
        return "Você escolheu pedra e o computador escolheu tesoura. Você venceu."
    }
    if(playerChoice == "PAPER" && computerChoice == 1){
        playerPoints+=1
        return "Você escolheu papel e o computador escolheu pedra. Você venceu."
    }
    if(playerChoice == "PAPER" && computerChoice == 2){
        return "Você escolheu papel e o computador escolheu papel. Empate."
    }
    if(playerChoice == "PAPER" && computerChoice == 3){
        computerPoints+=1
        return "Você escolheu papel e o computador escolheu tesoura. Você perdeu."
    }
    if(playerChoice == "SCISSOR" && computerChoice == 1){
        computerPoints+=1
        return "Você escolheu tesoura e o computador escolheu pedra. Você perdeu."
    }
    if(playerChoice == "SCISSOR" && computerChoice == 2){
        playerPoints+=1
        return "Você escolheu tesoura e o computador escolheu papel. Você venceu."
    }
    if(playerChoice == "SCISSOR" && computerChoice == 3){
        return "Você escolheu tesoura e o computador escolheu tesoura. Você empate."
    }
}
function erasePoints(){
    playerPoints = 0;
    computerPoints = 0;
}
function game(playerChoice,computerChoice){
    scores.style.color = "black";
    scores.innerHTML = round(playerChoice,computerChoice);
    if(playerPoints >= 5){
        scores.style.color = "red";
        scores.innerHTML = "Você ganhou!";
        erasePoints();
    }else if(computerPoints >= 5){
        scores.style.color = "red";
        scores.innerHTML = "O computador ganhou!";
        erasePoints();
    }
}
let body = document.querySelector("body");
let scores = document.createElement("div");
body.appendChild(scores);