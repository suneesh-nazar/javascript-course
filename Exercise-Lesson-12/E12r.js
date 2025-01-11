// JavaSqcript code for Lesson 12 - Rock-Paper-Scissors Game

//console.log(localStorage.getItem("message")); // prints the value 'hello' which is stored in localStorage 'message'

let score = JSON.parse(localStorage.getItem("score")) || {
  wins: 0,
  losses: 0,
  ties: 0,
};

updateScoreElement();

const resetScoreButtonElement = document.querySelector('.js-reset-score-button');
resetScoreButtonElement.addEventListener('click', () => { showConfirmationMessage(); });

function resetScore() {
  score = { wins: 0, losses: 0, ties: 0 };
  localStorage.removeItem("score");
  updateScoreElement();
}

function showConfirmationMessage() {
  const resetConfirmMessageElement = document.querySelector('.js-reset-confirm');
  resetConfirmMessageElement.innerHTML = `
    Are you sure you want to reset the score?
    <button class="js-reset-confirm-yes reset-confirm-button">Yes</button>
    <button class="js-reset-confirm-no reset-confirm-button">No</button>`;

  const resetConfirmYesElement = document.querySelector('.js-reset-confirm-yes');
  resetConfirmYesElement.addEventListener('click', () => {
    resetScore();
    resetConfirmMessageElement.innerHTML = '';
  });

  const resetConfirmNoElement = document.querySelector('.js-reset-confirm-no');
  resetConfirmNoElement.addEventListener('click', () => {
    resetConfirmMessageElement.innerHTML = '';
  });
}

let isAutoPlaying = false;
let intervalId;

const autoPlayButtonElement = document.querySelector('.js-auto-play');
autoPlayButtonElement.addEventListener('click', () => { autoPlay(); });

function autoPlay(){
  if(!isAutoPlaying){
    intervalId = setInterval(() => {
      const playerMove = pickComputerMove();
      playGame(playerMove);
    }, 1000);
    isAutoPlaying = true;
    document.querySelector('.js-auto-play').innerHTML = 'Stop Playing';
  } else {
    clearInterval(intervalId);
    isAutoPlaying = false;
    document.querySelector('.js-auto-play').innerHTML = 'Auto Play';
  }
}

const rockButtonElement = document.querySelector('.js-rock-button');
rockButtonElement.addEventListener('click', () => {playGame('rock')});

const paperButtonElement = document.querySelector('.js-paper-button');
paperButtonElement.addEventListener('click', () => {playGame('paper')});

const scissorsButtonElement = document.querySelector('.js-scissors-button');
scissorsButtonElement.addEventListener('click', () => {playGame('scissors')});

const bodyElement = document.body;
bodyElement.addEventListener('keydown', (event) => {
  if (event.key === 'r') {
    playGame('rock');
  } else if (event.key === 'p') {
    playGame('paper');
  } else if (event.key === 's') {
    playGame('scissors');
  } else if (event.key === 'a') {
    autoPlay();
  } else if (event.key === 'Backspace') {
    showConfirmationMessage();
  }
});

function playGame(playerMove) {
  const computerMove = pickComputerMove();

  let result = "";

  if (playerMove === "rock") {
    if (computerMove === "rock") {
      result = "Tie.";
    } else if (computerMove === "paper") {
      result = "You lose.";
    } else {
      result = "You win.";
    }
  } else if (playerMove === "paper") {
    if (computerMove === "rock") {
      result = "You win.";
    } else if (computerMove === "paper") {
      result = "Tie.";
    } else {
      result = "You lose.";
    }
  } else {
    if (computerMove === "rock") {
      result = "You lose.";
    } else if (computerMove === "paper") {
      result = "You win.";
    } else {
      result = "Tie.";
    }
  }

  if (result === "You win.") {
    score.wins++;
  } else if (result === "You lose.") {
    score.losses++;
  } else {
    score.ties++;
  }

  //localStorage.setItem("message", "hello"); // Stores the value 'hello' into the localStorage called 'message' so that the value will be stored locally and don't change everytime the page refreshes.
  //loaclStorage supports only String. So if we want to save any item other than String, we have to convert it into a string

  localStorage.setItem("score", JSON.stringify(score));

  updateScoreElement();
  document.querySelector(".js-result").innerHTML = result;

  // document.querySelector(
  //   ".js-moves"
  // ).innerHTML = `You picked <img src="images/${playerMove}-emoji.png" alt="Rock" class="move-icon" /> Computer picked <img src="images/${computerMove}-emoji.png" alt="Paper" class="move-icon" />`;

  document.querySelector(
    ".js-moves"
  ).innerHTML = `You <img src="images/${playerMove}-emoji.png" alt="Rock" class="move-icon" />
<img src="images/${computerMove}-emoji.png" alt="Paper" class="move-icon" />
Computer`;
}

function pickComputerMove() {
  const randomNumber = Math.random();
  let computerMove = "";

  if (randomNumber >= 0 && randomNumber < 1 / 3) {
    computerMove = "rock";
  } else if (randomNumber < 2 / 3) {
    computerMove = "paper";
  } else {
    computerMove = "scissors";
  }

  return computerMove;
}

function updateScoreElement() {
  document.querySelector(
    ".js-score"
  ).innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
}
