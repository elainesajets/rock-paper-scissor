//Create random number
function randomize() {
  let randomNumber = Math.random() * 3; // scales to [0, 3]
  return Math.floor(randomNumber);
}

//Create a function named getComputerChoice. This represents the computer.
function getComputerChoice() {
  let num = randomize();

  if (num === 0) {
    return 'rock';
  } else if (num === 1) {
    return 'paper';
  } else {
    return 'scissor';
  }
}

// User will select their choice
function getHumanChoice() {
  let choice = prompt('What do you chose? (Rock, Paper, or Scissor)');

  // Check if the user input is valid
  if (choice === null) {
    alert('You have cancelled the game.');
    return null;
  }
  choice = choice.trim().toLowerCase();

  if (choice === 'scissor' || choice === 'rock' || choice === 'paper') {
    return choice;
  } else {
    alert('Invalid input. Try again!');
    return getHumanChoice();
  }
}

// Start 5 rounds of Rock Paper Scissor
function playGame() {
  let humanScore = 0;
  let computerScore = 0;
  const maxRounds = 5;
  let round = 0;

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
          result = 'Scissor beats paper. You win! :)';
          humanScore += 1;
          break;
        case human === 'rock' && computer === 'scissor':
          result = 'Rock beats scissor. You win! :)';
          humanScore += 1;
          break;
        case human === 'paper' && computer === 'rock':
          result = 'Paper beats rock. You win! :)';
          humanScore += 1;
          break;
        default:
          result = `${computer} beats ${human}. You lose! :(`;
          computerScore += 1;
          break;
      }

      //Increment the round number.
      round += 1;

      //Print the results to console
      console.log('=================================');
      console.info(`%c Round: ${round}`, `font-weight: bold;`);
      console.log(`Result: ${result}`);
      console.log(`Your score: ${humanScore}`);
      console.log(`Computer's score: ${computerScore}`);
    }

    //Assigns the human choice and computer choice to arguments that will be passed to the game
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();

    // Starts the round after checking if the human input is valid
    if (humanSelection === null) {
      console.log('Player has cancelled the game.');
      return null;
    } else {
      playRound(humanSelection, computerSelection);
    }
  }

  //Announce the winner of the game based on the scores. As the game is supposed to be maximum 5 rounds, a draw is possible.
  if (humanScore > computerScore) {
    console.log('%c You won the game! :D', `color: green;`);
  } else if (humanScore === computerScore) {
    console.log("%c It's a draw!", `color: orange;`);
  } else {
    console.log('%c You lost this time. Try again!', `color: red;`);
  }

  //Reset the variables, so you can start the game again.
  function reset() {
    humanScore = 0;
    computerScore = 0;
    round = 0;
  }

  //Checks if player wants to start the game again.
  if (confirm('Do you want to play again?')) {
    reset();
    playGame();
  } else {
    console.log('Thank you for playing!');
    return;
  }
}
