'use strict';

// document.querySelector('.message').textContent= '🎉 Correct Number'

//Generating Random Number

const secretNumber = Math.trunc(Math.random() * 20) + 1;


// we are initializing the score value as let because it will decrease if we guess wrong number.
let score = 20;


// Adding the generated random number to the guessing Number.
// document.querySelector('.number').textContent = secretNumber;


//Adding a event listner 
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  // when there is no input
  if (!guess) {
    document.querySelector('.message').textContent = '⛔ No Number!';
  }
  // user input === secretNumber 
  else if(guess === secretNumber){
      document.querySelector('.message').textContent = '🎉 Correct Number';
      document.querySelector('.number').textContent = secretNumber;
  }
  // when guess is too high
  else if(guess > secretNumber){
      if(score > 1){
            document.querySelector('.message').textContent = '📈 Too High';
            score--;
            document.querySelector('.score').textContent = score;
      }
      else{
            document.querySelector('.message').textContent = '🎆 You Lost The Game';
            document.querySelector('.score').textContent = 0;
      }
  }
  //when guess is too low
  else if(guess < secretNumber){
      if(score > 1){
            document.querySelector('.message').textContent = '📉 Too Low';
            score--;
            document.querySelector('.score').textContent = score;
      }
      else{
            document.querySelector('.message').textContent = '🎆 You Lost The Game';
            document.querySelector('.score').textContent = 0;
      }     
  }
});
