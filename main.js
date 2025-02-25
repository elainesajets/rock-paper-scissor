const gameContainer = document.getElementById('game-container');
const gameResult = document.getElementById('game-result');
const gameScore = document.getElementById('game-score');
const roundNumber = document.getElementById('round-number');

let humanScore = 0;
let computerScore = 0;
let round = 0;

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

function newGame() {
  const newGame = document.createElement('button');
  newGame.textContent = 'Try again';
  gameScore.appendChild(newGame);

  newGame.addEventListener('click', resetGame);
}

const win = new Audio('sound/mixkit-good.wav');

function playRound(human, computer) {
  const result = document.createElement('p');
  const yourScore = document.createElement('p');
  const compScore = document.createElement('p');

  gameResult.textContent = '';
  gameScore.textContent = '';

  if (humanScore === 5 || computerScore === 5) {
    if (humanScore > computerScore) {
      win.play();
      gameResult.textContent = "You've won the game!";
      //resetButton.textContent = 'New Game';
      newGame();
      return;
    } else {
      gameResult.textContent = "You've unfortunately lost. Try again?";
      newGame();
      return;
    }
  }

  if (resetButton.textContent === 'New Game') {
    resetButton.textContent = 'Reset Game';
  }

  function updateScore(num1, num2) {
    yourScore.textContent = `Your score: ${num1}`;
    compScore.textContent = `Computer score: ${num2}`;
  }

  switch (true) {
    case human === computer:
      result.textContent = `Both have selected ${human}! It's a draw.`;
      updateScore(humanScore, computerScore);
      break;
    case human === 'scissor' && computer === 'paper':
      humanScore += 1;
      result.textContent = 'Scissor beats paper. You win! :)';
      updateScore(humanScore, computerScore);
      break;
    case human === 'rock' && computer === 'scissor':
      humanScore += 1;
      result.textContent = 'Rock beats scissor. You win! :)';
      updateScore(humanScore, computerScore);
      break;
    case human === 'paper' && computer === 'rock':
      humanScore += 1;
      result.textContent = 'Paper beats rock. You win! :)';
      updateScore(humanScore, computerScore);
      break;
    default:
      computerScore += 1;
      result.textContent = `${computer} beats ${human}. You lose! :(`;
      updateScore(humanScore, computerScore);
      break;
  }

  gameResult.appendChild(result);
  gameScore.appendChild(yourScore);
  gameScore.appendChild(compScore);

  round++;
}

const btns = document.getElementById('game-btns');

btns.addEventListener('click', (e) => {
  let text = e.target.textContent.toLowerCase().trim();
  if (text === 'rock' || text === 'paper' || text === 'scissor') {
    console.log(`You have selected ${text}`);
    playRound(text, getComputerChoice());
  }
});

function resetGame() {
  humanScore = 0;
  computerScore = 0;
  round = 0;
  console.clear();
  gameResult.textContent = '';
  gameScore.textContent = '';
}

const resetButton = document.getElementById('reset');

resetButton.addEventListener('mouseup', resetGame);

/*   //Assigns the human choice and computer choice to arguments that will be passed to the game
  const humanSelection = getHumanChoice();
  const computerSelection = getComputerChoice();

  // Starts the round after checking if the human input is valid
  if (humanSelection === null) {
    console.log('Player has cancelled the game.');
    return null;
  } else {
    playRound(humanSelection, computerSelection);
  }
} */

/*   //Announce the winner of the game based on the scores. As the game is supposed to be maximum 5 rounds, a draw is possible.
  if (humanScore > computerScore) {
    console.log('%c You won the game! :D', `color: green;`);
  } else if (humanScore === computerScore) {
    console.log("%c It's a draw!", `color: orange;`);
  } else {
    console.log('%c You lost this time. Try again!', `color: red;`);
  }

  //Reset the variables, so you can start the game again.
 

  //Checks if player wants to start the game again.
  if (confirm('Do you want to play again?')) {
    reset();
    playGame();
  } else {
    console.log('Thank you for playing!');
    return;
  }
} */

/* const playAgain = document.getElementById('play-again');

playAgain.addEventListener('mouseup', () => {
  
}) */
