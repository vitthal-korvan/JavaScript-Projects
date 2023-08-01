'use strict';
// we use # symbol when we select the id using query selector
const score0El = document.querySelector('#score--0').textContent = 0;
//we can select the element using the ID 
const score1El = document.getElementById('score--1').textContent = 0;

//Added style property on query selector and used display none
const diceEl = document.querySelector('.dice');

diceEl.classList.add('hidden');