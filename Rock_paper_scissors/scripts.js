const totalScore = {computerScore: 0, playerScore: 0};

const getComputerChoice = () => {
    // ** getComputerChoice randomly selects between `rock` `paper` `scissors` and returns that string **
    // getComputerChoice() 👉 'Rock'
    // getComputerChoice() 👉 'Scissors'

    const rpsChoice = ['Rock','Paper','Scissors'];
    const randomChoice = Math.floor(Math.random()*rpsChoice.length);

    return rpsChoice[randomChoice];
}

const getResult = (playerChoice,computerChoice) => {
    // ** getResult compares playerChoice & computerChoice and returns the score accordingly **
    // human wins - getResult('Rock', 'Scissors') 👉 1
    // human loses - getResult('Scissors', 'Rock') 👉 -1
    // human draws - getResult('Rock', 'Rock') 👉 0
    let score;

    if(playerChoice == computerChoice) score = 0;
    else if(playerChoice == 'Rock' && computerChoice == 'Scissors') score = 1;
    else if(playerChoice == 'Paper' && computerChoice == 'Rock') score = 1;
    else if(playerChoice == 'Scissors' && computerChoice == 'Paper') score = 1;
    else score = -1;

    return score;
}

const showResult = (score) => {
    // ** Calculate who won and show it on the screen **
    const result = document.getElementById('result');

    if(score == 1){
        result.textContent = 'You Win!';
    }
    else if(score == -1){
        result.textContent = 'You Lose!';
    }
    else if(score == 0){
        result.textContent = `It's a tie!`;
    }
}

const onClickRPS = (playerChoice) => {
    const playerScore = document.getElementById('playerScore');
    const hands = document.getElementById('hands');
    let computerChoice = getComputerChoice();

    totalScore['playerScore'] += getResult(playerChoice,computerChoice);

    hands.textContent = `👱🏼‍♂️ ${playerChoice} Vs 💻 ${computerChoice}`;
    playerScore.textContent = totalScore['playerScore'];
    showResult(getResult(playerChoice,computerChoice));
}

const endGame = () => {
    playerScore.textContent = '';
    result.textContent = '';
    hands.textContent = '';
}

function playGame() {
    // ** Make the RPS buttons actively listen for a click and do something once a click is detected **
    const buttons = [...document.querySelectorAll('.rpsButton')];

    const endGameButton = document.getElementById   ('endGameButton'); 

    buttons.forEach(button => button.addEventListener('click',() => onClickRPS(button.value)));   

    endGameButton.addEventListener('click',() => endGame());
}

playGame();