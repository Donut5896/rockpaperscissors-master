

/*let userScore = 0;
let computerScore = 0;
const userScore_p = document.getElementById("user-score");
const scoreBoard_div = document.querySelector(".score");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");
const container = document.querySelector(".game");





//computer Choices
function getComputerChoice(){
    const choices = ['r', 'p', 's'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

//messages convertor
function convertToWord(letter){
    if(letter==="r"){
        return "rock";
    }
    if(letter==="p"){
        return "paper"
        
    }
    if(letter==="s"){
        return "scissors"
    }
}

let houseSelection, playerSelection;
let result = false;

function playRound(event){
  playerSelection = userChoice.currentTarget.className;

}




function win(userChoice, computerChoice){
    //const userChoice_div = document.getElementById(userChoice);
    userScore++;
    userScore_p.innerHTML = userScore;
    result_p.innerHTML = `${convertToWord(userChoice)} beats ${convertToWord(computerChoice)}, You win!`;
  
   console.log(playerSelection);
    let el = document.createElement("img");
    el.src = `./images/${userChoice.img}`;
    //div = userChoice.cloneNode(true);
    container.appendChild(div)
    console.log(el);

}

function lose(userChoice, computerChoice){
    //const userChoice_div = document.getElementById(userChoice);
    userScore--;
    userScore_p.innerHTML = userScore;
    result_p.innerHTML = `${convertToWord(userChoice)} loses to ${convertToWord(computerChoice)}, You lose`
}

function draw(userChoice, computerChoice){
    result_p.innerHTML = `${convertToWord(userChoice)} equals ${convertToWord(computerChoice)}, it's a draw!`
}






function game(userChoice){
    const computerChoice = getComputerChoice();

    switch( userChoice + computerChoice){
        case "rs":
        case "pr":
        case "sp":
            win(userChoice, computerChoice);
        break;
        case "rp":
        case "ps":
        case "sr":
            lose(userChoice, computerChoice);
        break;
        case "rr":
        case "pp":
        case "ss":
            draw(userChoice, computerChoice);
        break;

    }
}




function main(){
    rock_div.addEventListener('click', () => game("r"));
    paper_div.addEventListener('click', () => game("p"));
    scissors_div.addEventListener('click', () => game("s"));
}

main(); */

/*------------------------------------------*/
const buttons = document.querySelectorAll('.circle');
const scoreEl = document.getElementById('user-score');
const choices = ['paper', 'rock', 'scissors'];

let score = 0;
let userChoice = undefined;

//get buttons input name attribute
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        userChoice = button.getAttribute('data-choice');
        checkWinner();
    })
})

//check winner
function checkWinner(){
    const computerChoice = pickRandomChoice();
     
    if((userChoice === 'paper' && computerChoice === 'rock')
    ||(userChoice === 'rock' && computerChoice === 'scissors')
    ||(userChoice === 'scissors' && computerChoice === 'paper')){

        updateScore(1);
    }else{
        updateScore(-1);
    }

}



//update score
function updateScore(value){
    score += value;
    scoreEl.innerText = score;
}

//computer choices
function pickRandomChoice(){
    return choices[Math.floor(Math.random() * choices.length)]
}

