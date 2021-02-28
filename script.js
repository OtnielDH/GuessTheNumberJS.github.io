'use strict';

/*
//reading content in some class
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = '🎉 Correct Number'
console.log(document.querySelector('.message').textContent);

//hardcode with js
document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

//setting value
document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/

//secret number
let secretNumber = Math.trunc(Math.random() * 20) + 1;


//new variable for the score keep the variable to hold our data
let score = 20;
let highscore = 0;

//refactor some syntax to shorten the code
//ex : text massage
const displayMessage = function (message) {
    document.querySelector('.message').textContent = message;
}

//listen to event with event hendler
document.querySelector('.check').addEventListener('click', function () {
    //save the guess to a variable
    //type sett to Number
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess);

    //when no input
    if (!guess) {
        //document.querySelector('.message').textContent = '⛔ No number!'

        displayMessage('⛔ No number!');

    }
    //when win
    else if (guess === secretNumber) {
        //document.querySelector('.message').textContent = '🎉 Correct Number';

        displayMessage('🎉 Correct Number');

        document.querySelector('.number').textContent = secretNumber;

        //changin css style
        document.querySelector('body').style.backgroundColor = '#60b347';

        //changing number width
        document.querySelector('.number').style.width = '30rem';

        if (score > highscore) {
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }


    }
    //when the guess is wrong
    else if (guess !== secretNumber) {
        if (score > 1) {
            //turnury if-else
            //document.querySelector('.message').textContent = guess > secretNumber ? '📈Too high!' : '📉Too low!';

            displayMessage(guess > secretNumber ? '📈Too high!' : '📉Too low!');

            score--;
            document.querySelector('.score').textContent = score;
        } else {
            //document.querySelector('.message').textContent = '💥 You loose the game!'

            displayMessage('💥 You loose the game!');

            document.querySelector('.score').textContent = 0;
        }
    }
    //when too high
    // else if (guess > secretNumber) {
    //     if (score > 1) {
    //         document.querySelector('.message').textContent = '📈Too high!';
    //         score--;
    //         document.querySelector('.score').textContent = score;
    //     } else {
    //         document.querySelector('.message').textContent = '💥 You loose the game!'
    //         document.querySelector('.score').textContent = 0;
    //     }


    // }
    //when too low
    // else if (guess < secretNumber) {
    //     if (score > 1) {
    //         document.querySelector('.message').textContent = '📉Too low!';
    //         score--;
    //         document.querySelector('.score').textContent = score;
    //     } else {
    //         document.querySelector('.message').textContent = '💥 You loose the game!'
    //         document.querySelector('.score').textContent = 0;
    //     }
    // }
});

//again button eventhandler
document.querySelector('.again').addEventListener('click', function () {
    //reset css style
    document.querySelector('.number').textContent = '?';
    document.querySelector('.number').style.width = '15rem';
    document.querySelector('body').style.backgroundColor = '#222';

    //reset message
    //document.querySelector('.message').textContent = 'Start guessing...';

    displayMessage('Start guessing...');

    //reset score
    score = 20;
    document.querySelector('.score').textContent = score;

    //new secret number
    secretNumber = Math.trunc(Math.random() * 20) + 1;;
})