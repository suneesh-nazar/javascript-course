// JavaSqcript code for Lesson 10 - Rock-Paper-Scissors Game

//console.log(localStorage.getItem("message")); // prints the value 'hello' which is stored in localStorage 'message'

let score = JSON.parse(localStorage.getItem("score")) || {
  wins: 0,
  losses: 0,
  ties: 0,
};

updateScoreElement();

function resetScore() {
  score = { wins: 0, losses: 0, ties: 0 };
  localStorage.removeItem("score");
  updateScoreElement();
}

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
  // ).innerHTML = `You picked ${playerMove}. Computer picked ${computerMove}.`;

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