console.log('Hello World');

let humanScore = 0;
let computerScore = 0;
//Create a function named getComputerChoice. This represents the computer.

//Create random number
function randomize() {
  let randomNumber = Math.random() * 3; // scales to [0, 3]
  return Math.floor(randomNumber);
}
//The code should return one of the following strings: "rock", "paper", or "scissor".
function getComputerChoice() {
  let num = randomize();
  let computerHand = '';
  console.log(num);

  switch (num) {
    case 0:
      computerHand = 'rock';
      break;
    case 1:
      computerHand = 'paper';
      break;
    case 2:
      computerHand = 'scissor';
      break;
  }

  return computerHand;
  console.log(`Computer shows: ${computerHand}`);
}

// User will select their choice
function getHumanChoice() {
  let choice = prompt('What do you chose?', 'Rock, Paper, or Scissor?');
  let hand = '';

  if (
    choice.toLowerCase() === 'scissor' ||
    choice.toLowerCase() === 'rock' ||
    choice.toLowerCase() === 'paper'
  ) {
    hand = choice;
    return hand.toLowerCase();
  } else {
    alert('Invalid input. Try again!');
    return getHumanChoice();
  }
}

function playRound() {
  let humanChoice = getHumanChoice();
  let computerChoice = getComputerChoice();

  console.log(humanChoice);
  console.log(computerChoice);
}
