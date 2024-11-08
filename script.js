'use strict';

let score = 0;

let playerOneScore = document.getElementById('score--0');
let playerTwoScore = document.getElementById('score--1');
const dice = document.querySelector('.dice');
const rollDice = document.querySelector('.btn--roll');
let currentScore = document.getElementById('current--0');
const holdBtn = document.querySelector('.btn--hold');
const newGame = document.querySelector('.btn--new');

playerOneScore.textContent = 0;
playerTwoScore.textContent = 0;

let randomNum = 0;

let playerOne = Number(playerOneScore.textContent);

dice.classList.add('hidden');

rollDice.addEventListener('click', () => {
  randomNum = Math.floor(Math.random() * 6 + 1);
  score = randomNum;
  currentScore.textContent = randomNum;

  if (randomNum === 1) {
    score += randomNum;
    dice.src = 'dice-1.png';
    dice.classList.remove('hidden');
  } else if (randomNum === 2) {
    score += randomNum;
    dice.src = 'dice-2.png';
    dice.classList.remove('hidden');
  } else if (randomNum === 3) {
    score += randomNum;
    dice.src = 'dice-3.png';
    dice.classList.remove('hidden');
  } else if (randomNum === 4) {
    score += randomNum;
    dice.src = 'dice-4.png';
    dice.classList.remove('hidden');
  } else if (randomNum === 5) {
    score += randomNum;
    dice.src = 'dice-5.png';
    dice.classList.remove('hidden');
  } else if (randomNum === 6) {
    score += randomNum;
    dice.src = 'dice-6.png';
    dice.classList.remove('hidden');
  }
});

holdBtn.addEventListener('click', () => {
  score = randomNum;
  playerOne += score;
  randomNum = 0;
  playerOneScore.textContent = playerOne;
});

newGame.addEventListener('click', () => {
  playerOneScore.textContent = 0;
  playerTwoScore.textContent = 0;
  score = 0;
  dice.classList.add('hidden');
  currentScore.textContent = 0;
  playerOne = 0;
});
