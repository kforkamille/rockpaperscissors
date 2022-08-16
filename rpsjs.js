let playerScore = 0;
let computerScore = 0;

function getComputerChoice(){
    let choice=['rock','paper','scissors'];
    return choice[Math.floor(Math.random()*choice.length)];
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection ) {
        return ("It's a tie");
    } else if(computerSelection == 'scissors' && playerSelection == 'rock') {
        return ('You win! Rock beats scissors');
    } else if(computerSelection == 'rock' && playerSelection == 'paper') {
        return ('You win! Paper beats rock');
    } else if(computerSelection == 'paper' && playerSelection == 'scissors') {
        return ('You win! Scissors beats paper');
    } else if (computerSelection =='paper' && playerSelection == 'rock'){
        return ('You lose! Paper beats rock');
    } else if (computerSelection == 'scissors' && playerSelection == 'paper'){
        return ('You lose! Scissors beats paper');
    } else if (computerSelection == 'rock' && playerSelection == 'scissors'){
        return ('You lose! Rock beats scissors');
    }  else {
        return ('Choice not found. Try again. :(');
    }
}



function yourScore(playerSelection, computerSelection){
if (playerSelection === computerSelection ) { 
    return playerScore = playerScore + 0; 
} else if(computerSelection == 'scissors' && playerSelection == 'rock') { 
    return playerScore = playerScore + 1; 
} else if(computerSelection == 'rock' && playerSelection == 'paper') { 
    return playerScore = playerScore + 1; 
} else if(computerSelection == 'paper' && playerSelection == 'scissors') { 
    return playerScore = playerScore + 1; 
} else if (computerSelection =='paper' && playerSelection == 'rock'){ 
    return playerScore = playerScore + 0; 
} else if (computerSelection == 'scissors' && playerSelection == 'paper'){ 
    return playerScore = playerScore + 0; 
} else if (computerSelection == 'rock' && playerSelection == 'scissors'){ 
    return playerScore = playerScore + 0; 
}  else { 
    return playerScore = playerScore + 0; 
} 
}

function compScore(playerSelection, computerSelection){
    if (playerSelection === computerSelection ) { 
        return computerScore = computerScore + 0; 
    } else if(computerSelection == 'scissors' && playerSelection == 'rock') { 
        return computerScore = computerScore + 0; 
    } else if(computerSelection == 'rock' && playerSelection == 'paper') { 
        return computerScore = computerScore + 0; 
    } else if(computerSelection == 'paper' && playerSelection == 'scissors') { 
        return computerScore = computerScore + 0; 
    } else if (computerSelection =='paper' && playerSelection == 'rock'){ 
        return computerScore = computerScore + 1; 
    } else if (computerSelection == 'scissors' && playerSelection == 'paper'){ 
        return computerScore = computerScore + 1; 
    } else if (computerSelection == 'rock' && playerSelection == 'scissors'){ 
        return computerScore = computerScore + 1; 
    }  else { 
        return computerScore = computerScore + 0; 
    } 
    }
function game(){
    for (let i = 0; i < 5; i++) {
      const player = prompt('rock, paper or scissors?','');
      const playerSelection = player.toLowerCase(); 
      const computerSelection = getComputerChoice();
      console.log (playRound(playerSelection, computerSelection));
      console.log(computerSelection);
      console.log("your current score: ", yourScore(playerSelection, computerSelection));
      console.log("computer's current score: ", compScore(playerSelection, computerSelection));
    }
    if (playerScore>computerScore){
        console.log("YOU WIN");
    } else if (playerScore<computerScore) {
        console.log("YOU LOSE");
    } else {
        console.log("IT'S A TIE");
    }
}

game();
