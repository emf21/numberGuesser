// This is a game to guess the exact or closest number

let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const generateTarget = () => {
  let randomNumber = Math.floor(Math.random() * 10);
  // alert(randomNumber)
  if (randomNumber === 0) {
    randomNumber++;
  } else if (randomNumber === 9) {
    randomNumber--;
  }
  return randomNumber;
};

const compareGuesses = (humanGuesser, computerGuesser, secretTarget) => {
  const humanDiff = Math.abs(humanGuesser - secretTarget);
  const computerDiff = Math.abs(computerGuesser - secretTarget);
  if (humanDiff < computerDiff) {
    return true;
  } else if (computerDiff < humanDiff) {
    return false;
  } else {
    return true;
  }
};

const updateScore = (score) => {
  if (score === "human") {
    humanScore++;
  } else if (score === "computer") {
    computerScore++;
  }
};

const advanceRound = () => {
  currentRoundNumber++;
};
