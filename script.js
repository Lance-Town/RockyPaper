function computerPlay() {
    // Generate random number between 0 and 3
    let rand = (Math.floor(Math.random() * 3));
    // return the array at the random position to randomly choose rock, paper or scissors
    return(rockPaperScissor[rand]);
}

function playRound(playerAnswer, computerChoice) {
    // Check to see who won.
    if (playerAnswer == computerChoice) {
        return('t');
    }
    else if ((playerAnswer == 'rock') && (computerChoice=='paper')) {
        return('l');
    }
    else if ((playerAnswer == 'rock') && (computerChoice == 'scissors')) {
        return('w');
    }
    else if ((playerAnswer == 'scissors') && (computerChoice == 'rock')) {
        return('l');
    }
    else if ((playerAnswer == 'scissors') && (computerChoice == 'paper')) {
        return('w');
    }
    else if ((playerAnswer == 'paper') && (computerChoice == 'rock')) {
        return('w');
    }
    else if ((playerAnswer == 'paper') && (computerChoice == 'scissors')) {
        return('l');
    }
}
function game(playerAnswer) {
    let computerChoice = computerPlay();
    let outcome = playRound(playerAnswer, computerChoice);

    addOutcome(outcome);

    update();
}

function addOutcome(outcome) {
    if (outcome === 'w') {
        win++;
    }
    else if (outcome === 'l') {
        loss++;
    }


    if (win === 5 || loss === 5) {
        deleteEvents();
    }
}

function rockFunc() {
    game('rock');
}

function paperFunc() {
    game('paper');
}

function scissorsFunc() {
    game('scissors');
}

function update() {
    roundContainer.textContent = `${round}`;
    round++;
    playerContainer.textContent = `${win}`;
    computerContainer.textContent = `${loss}`;
}

function deleteEvents() {
    rock.removeEventListener('click', rockFunc);
    paper.removeEventListener('click', paperFunc);
    scissors.removeEventListener('click', scissorsFunc);

    let winMessage;

    if (win === 5) {
        winMessage = "You Won :)";
        document.getElementById('result').style.backgroundColor = '#06D6A0'
    } else {
        winMessage = "You Lost :("
        document.getElementById('result').style.backgroundColor = '#DF3B57'
    }

    result.textContent = winMessage;
    console.log(winMessage);
}

function resetGame() {
    win = 0;
    loss = 0;
    round = 0;

    update();

    rock.addEventListener('click', rockFunc);
    paper.addEventListener('click', paperFunc);
    scissors.addEventListener('click', scissorsFunc);
    result.textContent = "";
    document.getElementById('result').style.backgroundColor = 'transparent';
}

// create an array with the three possible choices in the game
const rockPaperScissor = ['rock', 'paper', 'scissors'];

const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');
const result = document.querySelector('#result');
const roundContainer = document.querySelector('.roundInject');
const computerContainer = document.querySelector('.computerScoreInject');
const playerContainer = document.querySelector('.playerScoreInject');
const reset = document.querySelector('.reset');

let win = 0;
let loss = 0;
let round = 0;

rock.addEventListener('click', rockFunc);
paper.addEventListener('click', paperFunc);
scissors.addEventListener('click', scissorsFunc);
reset.addEventListener('click', resetGame);