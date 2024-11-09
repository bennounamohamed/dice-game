'use strict';

let score = 0;

let playerOneScore = document.getElementById('score--0');
let playerTwoScore = document.getElementById('score--1');
const dice = document.querySelector('.dice');
const rollDice = document.querySelector('.btn--roll');
let currentScore1 = document.getElementById('current--0');
let currentScore2 = document.getElementById('current--1');
const holdBtn = document.querySelector('.btn--hold');
const newGame = document.querySelector('.btn--new');
const playerOneContainer = document.querySelector('.player--0');
const playerTwoContainer = document.querySelector('.player--1');

playerOneScore.textContent = 0;
playerTwoScore.textContent = 0;

let randomNum = 0;
let switchPlayer = 0;

let playerOne = Number(playerOneScore.textContent);
let playerTwo = Number(playerTwoScore.textContent);

dice.classList.add('hidden');

rollDice.addEventListener('click', () => {
  randomNum = Math.floor(Math.random() * 6 + 1);
  score = randomNum;
  dice.src = `dice-${randomNum}.png`;
  dice.classList.remove('hidden');

  if (currentScore1.textContent == 0) {
    currentScore1.textContent = score;
  } else if (currentScore2.textContent == 0) {
    currentScore2.textContent = score;
  }
});

holdBtn.addEventListener('click', () => {
  if (switchPlayer === 0) {
    playerTwoContainer.classList.add('player--active');
    playerOneContainer.classList.remove('player--active');
    score = randomNum;
    playerOne += score;
    randomNum = 0;
    playerOneScore.textContent = playerOne;
    currentScore2.textContent = 0;
    switchPlayer = 1;
  } else {
    playerOneContainer.classList.add('player--active');
    playerTwoContainer.classList.remove('player--active');
    score = randomNum;
    playerTwo += score;
    randomNum = 0;
    currentScore1.textContent = 0;
    playerTwoScore.textContent = playerTwo;
    switchPlayer = 0;
  }
});

newGame.addEventListener('click', () => {
  playerOneScore.textContent = 0;
  playerTwoScore.textContent = 0;
  score = 0;
  dice.classList.add('hidden');
  currentScore1.textContent = 0;
  currentScore2.textContent = 0;
  playerOne = 0;
  playerTwo = 0;
});
