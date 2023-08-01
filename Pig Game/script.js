'use strict';

//selecting the elements

// we use # symbol when we select the id using query selector
const score0El = document.querySelector('#score--0');
//we can select the element using the ID
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--');
//Added style property on query selector and used display none
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
let currentScore = 0; 

// starting with conditions

score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

//Rolling Dice Functionality
btnRoll.addEventListener('click', function () {
  // 1. Generating the random dice roll
  const dice = Math.trunc(Math.random() * 6) + 1;

  // 2. Display Dice
  diceEl.classList.remove('hidden');
  diceEl.src = `dice-${dice}.png`;

  // 3. Check the rolled for 1: if true switch to the next player
  if(dice !== 1){
      // If the Rolled is not 1;
      //Add Dice to current score
      currentScore += dice;
      current0El.textContent = currentScore;
  }
  else{
      // Switch to the next player

  }
});
