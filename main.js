const gameContainer = document.getElementById('game-container');
const gameResult = document.getElementById('game-result');
const gameScore = document.getElementById('game-score');
const roundNumber = document.getElementById('round-number');

let humanScore = 0;
let computerScore = 0;
let round = 0;

//Sounds from https://mixkit.co/free-sound-effects/game/
const win = new Audio('sound/mixkit-good.wav');
const effect = new Audio('sound/mixkit-game-ball-tap-2073.wav');

function randomize() {
  let randomNumber = Math.random() * 3; // scales to [0, 3]
  return Math.floor(randomNumber);
}

function getComputerChoice() {
  let num = randomize();

  if (num === 0) {
    return 'rock';
  } else if (num === 1) {
    return 'paper';
  } else {
    return 'scissors';
  }
}

function updateScore() {
  gameScore.textContent = `Your score: ${humanScore} \n Computer score: ${computerScore}`;
}

// Separate function in case I want to add a reset button to use during the game
function resetGame() {
  humanScore = 0;
  computerScore = 0;
  round = 0;
  console.clear();
  gameResult.textContent = 'Start the game!';
  gameScore.textContent = '';
  roundNumber.textContent = '';
  document.getElementById('game-btns').style.pointerEvents = 'auto'; // Enables if disabled
}

function newGame() {
  const newGameButton = document.createElement('button');
  newGameButton.textContent = 'Try again';
  roundNumber.appendChild(newGameButton);

  newGameButton.addEventListener('click', () => {
    resetGame();
    roundNumber.removeChild(newGameButton);
  });
}

function playRound(human, computer) {
  const result = document.createElement('p');

  //Reset textContent of elements
  roundNumber.textContent = '';
  gameResult.textContent = '';
  gameScore.textContent = '';

  if (
    (human === 'scissors' && computer === 'paper') ||
    (human === 'rock' && computer === 'scissors') ||
    (human === 'paper' && computer === 'rock')
  ) {
    humanScore += 1;
    result.textContent = `${human} beats ${computer}. \nYou won the round!`;
  } else if (human === computer) {
    result.textContent = `Both have selected ${human}! \nIt's a draw.`;
  } else {
    computerScore += 1;
    result.textContent = `${computer} beats ${human}. \nYou lost the round!`;
  }

  updateScore();

  if (humanScore >= 5) {
    win.play();
    gameResult.textContent = "You've won the game :)";
    document.getElementById('game-btns').style.pointerEvents = 'none'; //disables buttons on win/lose screen
    newGame();
    return;
  } else if (computerScore >= 5) {
    gameResult.textContent = `You unfortunately lost :(\nBetter luck next time!`;
    document.getElementById('game-btns').style.pointerEvents = 'none'; //disables buttons on win/lose screen
    newGame();
    return;
  } else {
    round++;

    roundNumber.textContent = `Round: ${round}`;
    gameResult.appendChild(result);
  }
}

const btns = document.getElementById('game-btns');

btns.addEventListener('click', (e) => {
  let text = e.target.closest('button').getAttribute('id');
  if (text === 'rock' || text === 'paper' || text === 'scissors') {
    playRound(text, getComputerChoice());
  }
});

document.body.addEventListener('click', (e) => {
  if (e.target.tagName === 'BUTTON' || e.target.tagName === 'IMG') {
    effect.currentTime = 0;
    effect.play();
  }
});
