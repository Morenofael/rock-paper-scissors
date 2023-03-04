let computerChoice;
let playerChoice;
let playerPoints = 0;
let computerPoints = 0;
function getComputerChoice(){
    return Math.floor(Math.random()*3)+1;
}
function game(playerChoice, computerChoice){
    playerChoice = playerChoice.toUpperCase();
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
for(i = 0;i<5;i++){
    playerChoice = prompt("Pick rock, paper, or scissor")
    playerChoice = playerChoice.toUpperCase()
    console.log(playerChoice != "ROCK")
    while(playerChoice != "ROCK" && playerChoice != "PAPER" && playerChoice != "SCISSOR"){
        playerChoice = prompt("Incorrect typing. Try again.").toUpperCase()
    }
    computerChoice = getComputerChoice();
    console.log(game(playerChoice,computerChoice));
}
console.log("The computer scored "+computerPoints+" and you scored "+playerPoints)

