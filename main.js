console.log('Hello World');

let computerHand = '';
let humanHand = '';

//Create a function named getComputerChoice. This represents the computer.
//The code should return one of the following strings: "rock", "paper", or "scissor".
function getComputerChoice() {
  let computerHand = Math.random();
  let handShow = '';

  /*   if (computerHand > 0 && computerHand < 0.3334) {
    handShow = 'Rock';
    return computerHand;
  } else if (computerHand > 0.3334 && computerHand < 0.6667) {
    computerHand = 'Paper';
    return computerHand;
  } else {
    computerHand = 'Scissor';
    return computerHand;
  } */

  switch (computerHand) {
    case computerHand > 0 && computerHand < 0.3334:
      handShow = 'Rock';
      break;
    case computerHand > 0.3334 && computerHand < 0.6667:
      handShow = 'Paper';
      break;
    default:
      handShow = 'Scissor';
      break;
  }

  console.log(`Computer shows: ${handShow}`);
}
