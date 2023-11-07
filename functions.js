let score =   
JSON.parse(localStorage.getItem('score'))|| 
     {wins : 0,
    Loses : 0,
    Ties : 0,
    }
let isPlaying = false;

let intervalId;
function autoPlay(){
    if(!isPlaying){
        intervalId = setInterval (function(){
            const playerMove = pickComputerMove();
            playGame(playerMove);
        },3000);
        isPlaying = true
    } else{
        clearInterval(intervalId);
        isPlaying = false;
    }
}
function playGame(playerMove){

    const computerMove = pickComputerMove();
    let result = '';

    if(playerMove === 'rock'){
        if (computerMove === 'rock'){
            result = 'Tie.';
        } else if (computerMove === 'paper'){
            result = 'You lose.';
        } else if(computerMove === 'scissors'){
            result = 'You win.'
        }
    } else if(playerMove === 'paper'){
        if (computerMove === 'rock'){
            result = 'You win.';
        } else if (computerMove === 'paper'){
            result = 'Tie.';
        } else if(computerMove === 'scissors'){
            result = 'You lose.'
        } 
    } else if(playerMove === 'scissors'){
        if (computerMove === 'rock'){
            result = 'You lose.';
        } else if (computerMove === 'paper'){
            result = 'You win.';
        } else if(computerMove === 'scissors'){
            result = 'Tie.'
        }
    }

    if(result === 'You win.'){
        score.wins ++;
    } else if(result === 'You lose.'){
        score.Loses ++
    }
    else if(result === 'Tie.'){
        score.Ties ++
    }

    localStorage.setItem('score', JSON.stringify(score));

    document.getElementById('display-result').innerHTML = 

    `You picked ${playerMove}. Computer picked ${computerMove}. `;

    document.getElementById('display-score').innerHTML = `${result}
    Wins: ${score.wins}, Tie: ${score.Ties}, Loses: ${score.Loses}`;
    }

function pickComputerMove(){
const randomNumber = Math.random();
let computerMove = '';

if (randomNumber >= 0 && randomNumber < 1 / 3) {
computerMove='rock';
} else if(randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
computerMove='paper';
}
else if(randomNumber >=2 / 3 && randomNumber < 1) {
computerMove='scissors';
}

let result = '';

if (computerMove === 'rock'){
    result = 'Tie.';
} else if (computerMove === 'paper'){
    result = 'You lose.';
} else if(computerMove === 'scissors'){
    result = 'You win.'
}
return computerMove;
}
function resetScores(){
    score.wins =0; score.Loses=0; score.Ties=0;
    localStorage.removeItem('score'); 
    console.log(score.wins);
}

