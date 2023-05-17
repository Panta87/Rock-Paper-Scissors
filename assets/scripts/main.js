// steps
const stepOne = document.querySelector('#stepOne');
const stepTwo = document.querySelector('#stepTwo');

// step one options
const stepOneOptions = document.querySelectorAll('.step-one-option');

// selected options display
const displayUserOption = document.querySelector('#displayUserOption');
const displayHouseOption = document.querySelector('#displayHouseOption');

// result elements
const resultWrapper = document.querySelector('.result');
const resultText = document.querySelector('#resultText');

// score card
const scoreCard = document.querySelector('#playerScore');

// play again button
const playAgainButton = document.querySelector('#playAgain');

// options array
const optionsArray = ['rock', 'paper', 'scissors'];


let userOption;
let houseOption;
let winner;
let score = 0;

for (option of stepOneOptions) {
    option.addEventListener('click', function(event) {
        userOption = event.target.dataset.option;

        // switch to step two
        stepOne.style.display = 'none';
        stepTwo.style.display = 'flex';

        // show user selected option
        showUserOption();

        // show house selected option
        showHouseOption();
    });
};

function showUserOption() {
    displayUserOption.classList.add(userOption);
}

function showHouseOption() {
    const randomNumber = Math.floor(Math.random() * 3);

    houseOption = optionsArray[randomNumber];

    setTimeout(function() {
        displayHouseOption.classList.add(houseOption);

        // get winner
        getWinner();
    }, 1500);
}

function getWinner() {
    if (userOption === 'paper') {
        if (houseOption === 'rock') {
            winner = 'user';
        } else if (houseOption === 'scissors') {
            winner = 'house';
        }
    } else if (userOption === 'rock') {
        if (houseOption === 'scissors') {
            winner = 'user';
        } else if (houseOption === 'paper') {
            winner = 'house';
        }
    } else if (userOption === 'scissors') {
        if (houseOption === 'paper') {
            winner = 'user';
        } else if (houseOption === 'rock') {
            winner = 'house';
        }
    }

    // populate result
    if (winner === 'user') {
        resultText.innerText = 'YOU WIN';
        score++
    } else if (winner === 'house') {
        resultText.innerText = 'YOU LOSE';
        score === 0 ? '' : score--;
    } else {
        resultText.innerText = "IT'S A DRAW";
    }

    // show result section
    resultWrapper.style.display = 'block';

    // show updated score
    scoreCard.innerText = score;
}

playAgainButton.addEventListener('click', function() {
    // Reset game
    stepOne.style.display = 'flex';
    stepTwo.style.display = 'none';

    userOption = '';
    houseOption = '';
    winner = null;

    displayUserOption.className = 'option-display';
    displayHouseOption.className = 'option-display';

    resultWrapper.style.display = 'none';
});


// Rules modal 

const showRules = document.querySelector('#showRules');
const rulesModal = document.querySelector('#rulesModal');
const hideRules = document.querySelector('.cross-btn');

showRules.addEventListener('click', function(e) {
    rulesModal.classList.add('active');
})

hideRules.addEventListener('click', function(e) {
    rulesModal.classList.remove('active');
})






