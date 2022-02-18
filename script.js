function computerPlay() {
    // Generate random number between 0 and 2
    let rand = (Math.floor(Math.random() * 2));
    // return the array at the random position to randomly choose rock, paper or scissors
    return(rockPaperScissor[rand]);
}

function playerSelection() {
    // Get input from player, and make it all lowercase so it will accept ROCK, RoCk, rock, roCk or any other variation of rock
    let playerAnswer = prompt('Enter Selection').toLowerCase();

    // Make sure the answer they gave is one of the three choices, else call the function again until they do
    if (playerAnswer == 'rock' || playerAnswer == 'paper' || playerAnswer == 'scissors') {
        return(playerAnswer);
    }
    else {
        return playerSelection();
    }
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

function game() {
    // Initialize the variables. totalGamesPlayed is the rounds that have elapsed, win is the players wins, loss is the players losses,
    // and notDoneYet is for the while loop because that was the best way I could think to make a loop with an undetermined ending. I
    // had to make a boolean variable to control the while loop because I had originally tried while(win < 5 || loss < 5) to try to 
    // end it when the win or losses reaches 5, but it created an endless loop. I think it was because of the weird way that || and &&
    // statement works and how || is truthy, but that doesn't make sense to me right now, so I will have to learn about that. I need to
    // figure out a better way to debug javascript. Replit currently is my best known way. 
    let win = 0;
    let loss = 0;
    let totalGamesPlayed = 0;
    let notDoneYet = true;

    while(notDoneYet) {
        if (win == 5 || loss == 5) {
            notDoneYet = false;
        }
        else {
            // re-run the player answer and computer choice each turn to advance the game
            let playerAnswer = playerSelection();
            let computerChoice = computerPlay();
            let outcome = playRound(playerAnswer, computerChoice);

            // add wins or losses, and ignore ties.
            if (outcome == 'w') {
                win+= 1;
                console.log(`Wins: ${win}`);
            }
            else if (outcome == 'l') {
                loss+=1;
                console.log(`Losses: ${loss}`);
            }
            totalGamesPlayed+=1;
            console.log(`Round: ${totalGamesPlayed}`);
        }
    }
    // Return if player won or loss
    if (win == 5) {
        return('You Won!');
    }
    else {
        return('You Lose!');
    }
}

// create an array with the three possible choices in the game
const rockPaperScissor = ['rock', 'paper', 'scissors'];

// start game
let winOrLose = game();

// print winner
console.log(winOrLose);