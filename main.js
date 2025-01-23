//Create a function named getComputerChoice. This represents the computer.
let humanScore = 0;
let computerScore = 0;
const maxRounds = 5;
let round = 0;

//Create random number
function randomize() {
  let randomNumber = Math.random() * 3; // scales to [0, 3]
  return Math.floor(randomNumber);
}
//The code should return one of the following strings: "rock", "paper", or "scissor".
function getComputerChoice() {
  let num = randomize();
  let computerHand = '';
  //console.log(num);

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
  //console.log(`Computer shows: ${computerHand}`);
  return computerHand;
}

// User will select their choice
function getHumanChoice() {
  let choice = prompt('What do you chose?', 'Rock, Paper, or Scissor?');
  let hand = '';

  // Check if the user input is valid
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

// Start 5 rounds of Rock Paper Scissor
function playGame() {
  function reset() {
    humanScore = 0;
    computerScore = 0;
    round = 0;
  }

  // Finish the game after 5 rounds
  while (round < maxRounds) {
    // Start a round of the game and check the winner
    function playRound(human, computer) {
      let result = '';
      switch (true) {
        case human === computer:
          result = "It's a draw";
          break;
        case human === 'scissor' && computer === 'paper':
          result = 'You win! :)';
          humanScore += 1;
          break;
        case human === 'rock' && computer === 'scissor':
          result = 'You win! :)';
          humanScore += 1;
          break;
        case human === 'paper' && computer === 'rock':
          result = 'You win! :)';
          humanScore += 1;
          break;
        default:
          result = 'You lose! :(';
          computerScore += 1;
          break;
      }

      //Increment the round number.
      round += 1;

      //Print the results to console
      console.info(`%c Round: ${round}`, `font-weight: bold;`);
      console.log(`Result: ${result}`);
      console.log(`Your score: ${humanScore}`);
      console.log(`Computer's score: ${computerScore}`);
    }

    //Assigns the human choice and computer choice to arguments that will be passed to the game
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();

    // Starts the round
    playRound(humanSelection, computerSelection);
  }

  //Announce the winner of the game
  if (humanScore > computerScore) {
    console.log('%c You won the game! :D', `color: green;`);
  } else if (humanScore === computerScore) {
    console.log("%c It's a draw!", `color: orange;`);
  } else {
    console.log('%c You lost this time. Try again!', `color: red;`);
  }

  //Reset the variables, so you can start the game again.
  if (confirm('Do you want to play again?')) {
    reset();
    playGame();
  }
}
