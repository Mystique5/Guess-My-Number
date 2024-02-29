'use strict';
/*console.log(document.querySelector('.message').textContent); //getting the text content present in the element
document.querySelector('.message').textContent = 'Correct Guess!'; //Manipulating the content of the element
document.querySelector('.score').textContent = 13;
document.querySelector('.number').textContent = 15;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);*/

//addEventListener: function for appending eventListener
//Event Listener : func. waiting for an event to occure then respond to it.
/*GAME LOGIC:-
1. Generate the secret No(Random No)
2. Match the Inputed value (use addEventListener)
2a. IF input value < secret no. print "too low" & score--
2b. If  input>secret print "too high" & score --
2c. iF same print "correct value" & final score update
*/

let secretNo = Math.trunc(Math.random() * 20) + 1;
let score = 20; // storing/holding the value in the code so that it's present in the code throughout and if we took value from the screen(dom) then manipulate and again put in the screen(dom) then we(code) will have no access to the value.
let highScore = 0;

const displayMsg = function (msg) {
  document.querySelector('.message').textContent = msg;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);
  //when no input
  if (!guess) {
    // document.querySelector('.message').textContent = '⛔No Number!';
    displayMsg('⛔No Number!');
  } //when player wins
  else if (guess === secretNo) {
    //document.querySelector('.message').textContent = '🎉Correct Guess!';
    displayMsg('🎉Correct Guess!');
    document.querySelector('.number').textContent = secretNo;

    document.querySelector('body').style.backgroundColor = '#60b347'; // to do DOM manipulation in css , select "style" and then the attribute name (if 2 words then use camel case)
    document.querySelector('.number').style.width = '30rem';
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  } //when gues is wrong
  else if (guess !== secretNo) {
    if (score > 1) {
      // document.querySelector('.message').textContent = guess > secretNo ? '📈Too High!' : '📉Too Low!';
      displayMsg(guess > secretNo ? '📈Too High!' : '📉Too Low!');
      score--;
      document.querySelector('.score').textContent = score;
    } //when guess is too low
    else {
      // document.querySelector('.message').textContent = '💥You Lost the Game!';
      displayMsg('💥You Lost the Game!');
      document.querySelector('.score').textContent = 0;
    }
  }

  //when guess is too high
  /*else if (guess > secretNo) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📈Too High!';
      score--;
      document.querySelector('.score').textContent = score;
    } //when guess is too low
    else {
      document.querySelector('.message').textContent = '💥You Lost the Game!';
      document.querySelector('.score').textContent = 0;
    }
  } else if (guess < secretNo) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📉Too Low!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '💥You Lost the Game!';
      document.querySelector('.score').textContent = 0;
    }
  }*/
});
/*CODING CHALLENGE
Implement a game rest functionality, so that the player can make a new guess!
Your tasks:
1. Select the element with the 'again' class and attach a click event handler
2. In the handler function, restore initial values of the 'score' and
'secretNumber' variables
3. Restore the initial conditions of the message, number, score and guess input
fields
4. Also restore the original background color (#222) and number width (15rem)*/

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNo = Math.trunc(Math.random() * 20) + 1;
  // document.querySelector('.message').textContent = 'Start Guessing...';
  displayMsg('Start Guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
