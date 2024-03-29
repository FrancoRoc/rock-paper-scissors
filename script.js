let playerScore = 0;
let computronScore = 0;

const rockEl = document.getElementById("rock");
rockEl.addEventListener("click", playRound);
const paperEl = document.getElementById("paper");
paperEl.addEventListener("click", playRound);
const scissorsEl = document.getElementById("scissors");
scissorsEl.addEventListener("click", playRound);

const results = document.getElementById("results");
const para = document.createElement("p");
results.appendChild(para);

function computerPlay() {
  const computronWeapon = Math.floor(Math.random() * 3);
  if (computronWeapon === 0) {
    return "rock";
  } else if (computronWeapon === 1) {
    return "paper";
  } else {
    return "scissors";
  }
}

function playRound(e) {
  const playerWeapon = e.target.id;
  const computronWeapon = computerPlay();
  
  if (playerWeapon === "rock" && computronWeapon === "scissors" || playerWeapon === "paper" && computronWeapon === "rock" || playerWeapon === "scissors" && computronWeapon === "paper") {
    document.getElementById("playerPoints").textContent = playerScore += 1;
    para.textContent = `Nice! ${playerWeapon} beats ${computronWeapon}`;
  } else if (playerWeapon === computronWeapon) {
    para.textContent = `Eh, a tie. Both chose ${playerWeapon}`; 
  } else {
    document.getElementById("computronPoints").textContent = computronScore += 1;
    para.textContent = `Ouch! ${computronWeapon} beats ${playerWeapon}`;
  }
  if (playerScore === 5 || computronScore === 5) {
    announceWinner();
    disableWeapons();
  }
}

function announceWinner() {
  if (playerScore > computronScore) {
    para.textContent = "!!!YOU WIN!!!";
  } else {
    para.textContent = "!!COMPUTRON WINS!!";
  }
  resetButton();
}

function disableWeapons() {
  rockEl.removeEventListener("click", playRound);
  paperEl.removeEventListener("click", playRound);
  scissorsEl.removeEventListener("click", playRound);
}

function resetButton() {
  const resetButton = document.createElement("button");
  resetButton.textContent = "PLAY AGAIN";
  resetButton.style.display = "block";
  resetButton.setAttribute("id", "resetButton");
  para.appendChild(resetButton);
  resetButton.addEventListener("click", newGame);
}

function newGame() {
  para.textContent = "";
  playerScore = 0;
  computronScore = 0;
  document.getElementById("playerPoints").textContent = 0;
  document.getElementById("computronPoints").textContent = 0;
  rockEl.addEventListener("click", playRound);
  paperEl.addEventListener("click", playRound);
  scissorsEl.addEventListener("click", playRound);
}