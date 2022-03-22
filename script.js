let cpuChoice = ["Rock","Paper","Scissors"];
let playerChoice;

function cpuPlay(cpuChoice){
    return cpuChoice[Math.floor(Math.random()*cpuChoice.length)];
}

function playerInput(playerChoice){
   return playerChoice = prompt("Rock, Paper, or Scissors?");
}

cpuPlay(cpuChoice);
console.log(playerInput(playerChoice));



