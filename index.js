



function getComputerChoice() {

  let randomNumber = Math.random();

  let compChoice;

  if (randomNumber <= 0.33) {
    compChoice = "rock";
  } else if (randomNumber > 0.33 && randomNumber <= 0.66) {
    compChoice = "paper";
  } else if (randomNumber > 0.66) {
    compChoice = "scissors";
  }
  

  return compChoice;
};

function getHumanChoice() {

  let human = prompt("Hello in rock, paper, scissors game!").toLowerCase();

  let humanChoice;

  if (human === "rock") {
    humanChoice = "rock";
  } else if (human === "paper") {
    humanChoice = "paper";
  } else if (human === "scissors") {
    humanChoice = "scissors";
  }

  return humanChoice;
}







function playGame() {

  let humanScore = 0;
  let computerScore = 0;

  function playRound(humanChoice, compChoice) {
  
    if (humanChoice === "rock" && compChoice === "rock") {
      console.log("It's a draw!");
    } else if (humanChoice === "rock" && compChoice === "paper") {
      computerScore += 1;
      console.log("You lost!");
    } else if (humanChoice === "rock" && compChoice === "scissors") {
      humanScore += 1;
      console.log("You won!");
    }
  
  
    if(humanChoice === "paper" && compChoice === "rock") {
      humanScore += 1;
      console.log("You won!")
    } else if (humanChoice === "paper" && compChoice === "paper") {
      console.log("It's a draw!");
    } else if (humanChoice === "paper" && compChoice === "scissors") {
      computerScore += 1;
      console.log("You lost!");
    }
  
    if(humanChoice === "scissors" && compChoice === "rock") {
      computerScore += 1;
      console.log("You lost!")
    } else if (humanChoice === "scissors" && compChoice === "paper") {
      humanScore += 1;
      console.log("You won!")
    } else if (humanChoice === "scissors" && compChoice === "scissors") {
      console.log("It's a draw!")
    }
  
    console.log(`Your score is: ${humanScore}`);
    console.log(`Computer score is: ${computerScore}`);
  }

  const humanSelection = getHumanChoice();
  const compSelection = getComputerChoice();

  for (i = 0; i < 4; i++) {
    playRound(humanSelection, compSelection) * i;
  }

};

playGame();



