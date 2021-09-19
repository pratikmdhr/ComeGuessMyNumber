'use strict';

const number = document.querySelector('.number');
let secretNum = Math.floor(Math.random() * 20) + 1;
// number.textContent = secretNum;

const message = document.querySelector('.message');

const score = document.querySelector('.score');
let currScore = Number(score.textContent);

const highScore = document.querySelector('.highscore');
let record = Number(highScore.textContent);

const checkBtn = document.querySelector('.check');
const againBtn = document.querySelector('.again');

const body = document.querySelector('body');

checkBtn.addEventListener('click', function () {
  const guess = document.querySelector('.guess');
  let guessNum = Number(guess.value);
  // console.log(typeof guess, guess);
  if (!guessNum) {
    message.textContent = '⛔  No Number!';
  } else if (guessNum === secretNum) {
    number.textContent = secretNum;
    message.textContent = '✨  Correct guess!!';
    body.style.backgroundColor = '#60b347';
    number.style.width = '30rem';
    // console.log(currScore);
    if (currScore >= record) {
      highScore.textContent = currScore;
    }
  } else if (guessNum > secretNum && guessNum <= 20) {
    if (currScore > 1) {
      message.textContent = '📈  Too High';
      currScore--;
      score.textContent = currScore;
    } else {
      message.textContent = '💣  You Lost!';
      currScore--;
      body.style.backgroundColor = 'red';
      score.textContent = currScore;
    }
  } else if (guessNum < secretNum && guessNum >= 0) {
    if (currScore > 1) {
      message.textContent = '📉  Too Low';
      currScore--;
      score.textContent = currScore;
    } else {
      message.textContent = '💣  You Lost!';
      currScore--;
      body.style.backgroundColor = 'red';
      score.textContent = currScore;
    }
  } else {
    message.textContent = 'Enter Number Between 1 - 20';
    // document.querySelector('.guess').value = '';
  }
});

againBtn.addEventListener('click', function () {
  secretNum = Math.floor(Math.random() * 20) + 1;
  number.textContent = '?';
  body.style.backgroundColor = '#222';
  number.style.width = '15rem';
  // console.log(secretNum);
  document.querySelector('.guess').value = '';
  document.querySelector('.message').textContent = 'Start guessing...';

  currScore = 20;
  score.textContent = currScore;
});
