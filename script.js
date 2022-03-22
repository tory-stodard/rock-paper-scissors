let cpuChoice = ["rock", "paper", "scissors"];
let playerChoice;

game();

function game() {
  for (i = 0; i < 5; i++) {
    playRound();
  }
}

function playRound() {
  cpuChoice = cpuInput();
  playerChoice = playerInput();
  playerChoice = playerChoice.toLowerCase();

  if (cpuChoice == playerChoice) {
    console.log("it's a tie!");
  } else if (
    (cpuChoice == "rock" && playerChoice == "paper") ||
    (cpuChoice == "paper" && playerChoice == "scissors") ||
    (cpuChoice == "scissors" && playerChoice == "rock")
  ) {
    console.log("you win this round!");
  } else {
    console.log("you loose this round!");
  }
}

function cpuInput() {
  return cpuChoice[Math.floor(Math.random() * cpuChoice.length)];
}

function playerInput() {
  return prompt("rock, paper, or scissors?");
}
