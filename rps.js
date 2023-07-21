let computerChoice; //initialzing variable for computers choice 
let playerChoice;
let playerScore = 0;
let computerScore = 0;
const textField = document.querySelector('.dynamic'); //getting dynamic field from html in order to display a changing text field 
const pScore = document.querySelector('.pScore');
const cScore = document.querySelector('.cScore');// getting dynamic field to show running scores 
pScore.textContent = "Player Score: " + playerScore;
cScore.textContent = "Computer Score: " + computerScore ;



function getComputerChoice() { 
    let random=(Math.random() * 100); // random number generator between 0-100
    
    if(random<= 33.33) { 
        computerChoice = "Rock"
    } else if (random <= 66.66) {
        computerChoice = "Paper"
    } else { 
        computerChoice = "Scissors"
    }
}

function playRound (playerChoice, computerChoice) { // rules of rock paper scissors, returning string with win, tie or loss
    
    
    console.log("You chose " + playerChoice); 
    console.log("Computer chose " + computerChoice);
    
        if( playerChoice === "rock") {
            if (computerChoice === "Rock") {
                textField.textContent = "Tie"
            } else if(computerChoice === "Scissors") {
                textField.textContent = "Winner! Rock beats Scissors"
                playerScore +=1; 
        
            } else {
                textField.textContent = "Loser! Paper beats Rock";
                computerScore +=1;
            }
        } else if(playerChoice === "paper") {
            if(computerChoice === "Rock") { 
                textField.textContent = "Winner! Rock beats Paper";
                playerScore +=1; 
            } else if(computerChoice === "Paper") {
                textField.textContent = "Tie";
            } else {
                textField.textContent = "Loser! Scissors beats Paper";
                computerScore +=1;
            }
        } else if(playerChoice === "scissors") {
            if(computerChoice === "Rock") {
                textField.textContent = "Loser! Rock beats Scissors";
                computerScore +=1;
            } else if(computerChoice === "Paper") {
                textField.textContent = "Winner! Scissors beats Paper";
                playerScore +=1; 
            } else { 
                textField.textContent = "Tie";
            }
        }
        pScore.textContent = "Player Score: " + playerScore;
        cScore.textContent = "Computer Score: " + computerScore ;
        // console.log("player score  " + playerScore);
        // console.log("computer score  " + computerScore);

}

function winnerAnnouncement (playerScore, computerScore) {
    if (playerScore + computerScore === 5) {
        if (playerScore < computerScore) {
            textField.textContent = "You Lose! Better luck next time. You can play a new game by choosing your weapon again";
            newGame();
       
        } else if (playerScore > computerScore) {
            textField.textContent = "You Win! I hope you are proud of yourself.You can play a new game by choosing your weapon again";  ;
            newGame();
    
        } else return;
    }
}

function newGame () {
    playerScore = 0;
    computerScore = 0;
}



const rock = document.querySelector('#rock'); //adding event listener to rock button, and running a round 
rock.addEventListener('click', function(){
    playerChoice= "rock";
    getComputerChoice();
    playRound(playerChoice, computerChoice);
    winnerAnnouncement(playerScore, computerScore);
    
})


const scissors = document.querySelector('#scissors');//adding event listener to scissors button and running a round 
scissors.addEventListener('click', function(){
    playerChoice= "scissors";
    getComputerChoice();
    playRound(playerChoice, computerChoice);
    winnerAnnouncement(playerScore, computerScore);

     
})

const paper = document.querySelector('#paper'); //adding event listener to paper button and running a round
paper.addEventListener('click', function(){
    playerChoice= "paper";
    getComputerChoice();
    playRound(playerChoice, computerChoice);
    winnerAnnouncement(playerScore, computerScore);

})



        

    


    


// game()
// function game() {

    // let playerScore = 0;
    // let computerScore = 0;//initialising score counters 
    // let result; 
    // let playerChoice;


    // playerChoice = prompt("pick a tool");//asking user to choose their tool for game 
    // getComputerChoice();//calling random computer choice 
    // playRound(playerChoice, computerChoice);

    //     if ( playRound(playerChoice, computerChoice) === "Winner Winner Chicken Dinner") {
    //         playerScore += 1;
    //     } else if ( playRound(playerChoice, computerChoice) === "Loser Bitch") {
    //         computerScore += 1;
    //     } // keeping a tally of scores after each round 

    //     console.log("player score  " + playerScore);
    //     console.log("computer score  " + computerScore);
    //     console.log("computer chose  " + computerChoice);
    //     console.log(playRound(playerChoice, computerChoice));

    //     playerChoice = prompt("pick a tool");
    //     getComputerChoice();
    //     playRound(playerChoice, computerChoice);
    
    //         if ( playRound(playerChoice, computerChoice) === "Winner Winner Chicken Dinner") {
    //             playerScore += 1;
    //         } else if ( playRound(playerChoice, computerChoice) === "Loser Bitch") {
    //             computerScore += 1;
    //         } 
    
    //         console.log("player score  " + playerScore);
    //         console.log("computer score  " + computerScore);
    //         console.log(computerChoice);
    //         console.log(playRound(playerChoice, computerChoice));

    //         playerChoice = prompt("pick a tool");
    //         getComputerChoice();
    //         playRound(playerChoice, computerChoice);
        
    //             if ( playRound(playerChoice, computerChoice) === "Winner Winner Chicken Dinner") {
    //                 playerScore += 1;
    //             } else if ( playRound(playerChoice, computerChoice) === "Loser Bitch") {
    //                 computerScore += 1;
    //             } 
        
    //             console.log("player score  " + playerScore);
    //             console.log("computer score  " + computerScore);
    //             console.log(computerChoice);
    //             console.log(playRound(playerChoice, computerChoice));

    //             playerChoice = prompt("pick a tool");
    //             getComputerChoice();
    //             playRound(playerChoice, computerChoice);
            
    //                 if ( playRound(playerChoice, computerChoice) === "Winner Winner Chicken Dinner") {
    //                     playerScore += 1;
    //                 } else if ( playRound(playerChoice, computerChoice) === "Loser Bitch") {
    //                     computerScore += 1;
    //                 } 
            
    //                 console.log("player score  " + playerScore);
    //                 console.log("computer score  " + computerScore);
    //                 console.log(computerChoice);
    //                 console.log(playRound(playerChoice, computerChoice));

    //                 playerChoice = prompt("pick a tool");
    //                 getComputerChoice();
    //                 playRound(playerChoice, computerChoice);
                
    //                     if ( playRound(playerChoice, computerChoice) === "Winner Winner Chicken Dinner") {
    //                         playerScore += 1;
    //                     } else if ( playRound(playerChoice, computerChoice) === "Loser Bitch") {
    //                         computerScore += 1;
    //                     } 
                
    //                     console.log("player score  " + playerScore);
    //                     console.log("computer score  " + computerScore);
    //                     console.log(computerChoice);
    //                     console.log(playRound(playerChoice, computerChoice)); 


    //                     if (playerScore > computerScore) {
    //                         result =  "YOU WIN";
    //                     } else if(playerScore < computerScore) {
    //                         result = "YOU LOSE";
    //                     } else {
    //                         result = "DRAW"
    //                     }

    //                     console.log(result);


    // }


