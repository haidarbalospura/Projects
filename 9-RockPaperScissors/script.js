let score = JSON.parse(localStorage.getItem('score')) || {
  wins: 0,
  losses: 0,
  ties: 0,
}

// if(score === null){//you can put !score instead of (score === null)
//   score = {
//       wins: 0,
//       losses: 0,
//       ties: 0,
//   }
// };
updateScoreElement();

function playGame(playerMove) {
  const computerMove = pickComputerMove();
  let result = '';

  if (playerMove === 'rock') {
    if (computerMove === 'rock') {
      result = 'Tie';
    }
    else if (computerMove === 'paper') {
      result = 'You lose';
    }
    else if (computerMove === 'scissors') {
      result = 'You win';
    }
  }
  else if (playerMove === 'paper') {
    if (computerMove === 'rock') {
      result = 'You win';
    }
    else if (computerMove === 'paper') {
      result = 'Tie';
    }
    else if (computerMove === 'scissors') {
      result = 'You lose';
    }
  }
  else if (playerMove === 'scissors') {
    if (computerMove === 'rock') {
      result = 'You lose';
    }
    else if (computerMove === 'paper') {
      result = 'You win';
    }
    else if (computerMove === 'scissors') {
      result = 'Tie';
    }
  }

  if (result === 'You win') {
    score.wins += 1;
  }
  else if (result === 'You lose') {
    score.losses += 1;
  }
  else if (result === 'Tie') {
    score.ties += 1;
  }
  localStorage.setItem('score', JSON.stringify(score));
  document.querySelector('.js-result').innerHTML = result;
  document.querySelector('.js-moves').innerHTML = `You
    <img src="images/${playerMove}-emoji.png" class="move-icon">
    <img src="images/${computerMove}-emoji.png" class="move-icon">
    Computer`;
  updateScoreElement();
}
function updateScoreElement() {
  document.querySelector('.js-score').innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
}
function result() {

}
function moves() {

}

function pickComputerMove() {
  let computerMove = '';
  const randomNumber = Math.random();

  if (randomNumber >= 0 && randomNumber < 1 / 3) {
    computerMove = 'rock';
  }
  else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
    computerMove = 'paper';
  }
  else if (randomNumber >= 2 / 3 && randomNumber < 1) {
    computerMove = 'scissors';
  }

  return computerMove;
}
function toClearMoves() {
  document.querySelector('.js-result').innerHTML = '';
  document.querySelector('.js-moves').innerHTML = '';
}

document.addEventListener('touchstart', function(event) {
  if (event.touches.length > 1) {
    event.preventDefault();
  }
}, { passive: false });

/*
// Using the spread operator:

In ES6, you can use the spread operator (...) to concatenate arrays.
Here's an example:
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const concatenatedArray = [...array1, ...array2];
console.log(concatenatedArray); // Output: [1, 2, 3, 4, 5, 6]

*/