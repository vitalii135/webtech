const startButton = document.getElementById("startButton");
const gameArea = document.getElementById("gameArea");
const scoreDisplay = document.getElementById("score");
const timerDisplay = document.getElementById("timer");
const difficultySelect = document.getElementById("difficulty");
const colorSelect = document.getElementById("color");

let score = 0;
let timer = 0;
let gameInterval;
let countdownInterval;

function getRandomPosition(max) {
  return Math.floor(Math.random() * max);
}

function startGame() {
  // Reset game
  score = 0;
  scoreDisplay.textContent = score;
  clearInterval(gameInterval);
  clearInterval(countdownInterval);
  gameArea.innerHTML = "";

  // Set difficulty
  const difficulty = difficultySelect.value;
  let spawnTime;
  switch (difficulty) {
    case "hard":
      spawnTime = 800;
      break;
    case "extreme":
      spawnTime = 500;
      break;
    default:
      spawnTime = 1000;
  }

  // Start spawning squares
  gameInterval = setInterval(spawnSquare, spawnTime);
}

function spawnSquare() {
  // Clear game area
  gameArea.innerHTML = "";

  // Create square
  const square = document.createElement("div");
  square.classList.add("square");
  square.style.backgroundColor = colorSelect.value;
  square.style.top = `${getRandomPosition(gameArea.clientHeight - 50)}px`;
  square.style.left = `${getRandomPosition(gameArea.clientWidth - 50)}px`;

  gameArea.appendChild(square);

  // Start countdown
  timer = 3; // Seconds to click
  updateTimer();

  countdownInterval = setInterval(() => {
    timer--;
    updateTimer();
    if (timer <= 0) {
      clearInterval(countdownInterval);
      gameArea.innerHTML = "Game Over!";
      clearInterval(gameInterval);
    }
  }, 1000);

  // Add click event
  square.addEventListener("click", () => {
    score++;
    scoreDisplay.textContent = score;
    clearInterval(countdownInterval);
    gameArea.innerHTML = "";
  });
}

function updateTimer() {
  timerDisplay.textContent = timer;
}

startButton.addEventListener("click", startGame);
