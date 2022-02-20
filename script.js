function computerPlay() {
    // Generate random number between 0 and 3
    let rand = (Math.floor(Math.random() * 3));
    // return the array at the random position to randomly choose rock, paper or scissors
    return(rockPaperScissor[rand]);
}

function playRound(playerAnswer, computerChoice) {
    // Check to see who won. This is definetly not how I wanted to solve this problem, but I couldnt get any other solution to work.
    // I tried using the length of the string to tell who won, but that didnt work becuase I had to make rock longer than scissors, which worked
    // but it made it so rock beat paper because i changed the string to rockrockrock. I also tried using numbers to decide who won, but
    // that didn't work because I couldnt figure out how to loop back to the start of the string, and rockPaperScissors[-1] doesn't work in Python. 
    // I was even thinking of using the alphabet to decide but that doesn't work because like numbers, the alphabet is linear and I couldn't
    // Loop back to the start. I am going to have to think on it some more. I was thinking recursion could work but the only idea I had was
    // to basically make the exact same thing but just run a recursive loop 9 seperate times, and that run time might not be much better,
    // and the complexity would be far higher. I do want a more elagant solution though so when I return to this I am gonna try another 
    // crack at it. 
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

    container.textContent = `Round: ${round}`;
    round++;
    container.textContent += ` Win: ${win}`;
    container.textContent += ` Loss: ${loss}`;
}

function addOutcome(outcome) {
    if (outcome == 'w') {
        win++;
    }
    else if (outcome == 'l') {
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

function deleteEvents() {
    rock.removeEventListener('click', rockFunc);
    paper.removeEventListener('click', paperFunc);
    scissors.removeEventListener('click', scissorsFunc);
}

// create an array with the three possible choices in the game
const rockPaperScissor = ['rock', 'paper', 'scissors'];
const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');
const container = document.querySelector('#container');

let win = 0;
let loss = 0;
let round = 1;

rock.addEventListener('click', rockFunc);
paper.addEventListener('click', paperFunc);
scissors.addEventListener('click', scissorsFunc);