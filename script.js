const computerPlay = () => {
  let random = Math.floor(Math.random() * 3) + 1;
  let choice = "";
  if (random === 1) {
    choice = "ROCK";
  } else if (random === 2) {
    choice = "PAPER";
  } else {
    choice = "SCISSORS";
  }
  return choice;
};

const rockPaperScissors = (playerChoice, computerChoice) => {
  const player = playerChoice.toUpperCase();
  const cpu = computerChoice.toUpperCase();

  if (player === "ROCK") {
    if (cpu === "ROCK") {
      console.log("Draw! Both players chose Rock.");
      return ['DRAW', "ROCK"];
    } else if (cpu === "PAPER") {
      console.log("You lose! Paper beats Rock.");
      return ["LOSE", "ROCK", "PAPER"];
    } else if (cpu === "SCISSORS") {
      console.log("You win! Rock beats Scissors.");
      return ["WIN", "ROCK", "SCISSORS"];
    }
  } else if (player === "PAPER") {
    if (cpu === "ROCK") {
      console.log("You win! Paper beats Rock.");
      return ["WIN", "PAPER", "ROCK"];
    } else if (cpu === "PAPER") {
      console.log("Draw! Both players chose Paper.");
      return ["DRAW", "PAPER"];
    } else if (cpu === "SCISSORS") {
      console.log("You lose! Scissors beats Paper.");
      return ["LOSE", "PAPER", "SCISSORS"];
    }
  } else if (player === "SCISSORS") {
    if (cpu === "ROCK") {
      console.log("You lose! Rock beats Scissors.");
      return ["LOSE", "SCISSORS", "ROCK"];
    } else if (cpu === "PAPER") {
      console.log("You win! Scissors beats Paper.");
      return ["WIN", "SCISSORS", "PAPER"];
    } else if (cpu === "SCISSORS") {
      console.log("Draw! Both players chose Scissors.");
      return ["DRAW", "SCISSORS"];
    }
  }
};

const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");

let player = 0;
let cpu = 0;

const playerDOM = document.querySelector('#player');
const cpuDOM = document.querySelector('#cpu');
const gameResult = document.querySelector('#gameResult')
const winner = document.querySelector('#winner');

const checkWinner = () => {
    if (player === 5) {
        winner.innerText = 'You won 5 games! YOU WIN! Please play again.';
        player = 0;
        cpu = 0;
        updatePoints();
    } else if (cpu === 5) {
        winner.innerText = 'You lost 5 games! YOU LOSE! Please try again.';
        player = 0;
        cpu = 0;
        updatePoints();
    } else {
        winner.innerText = '';
    }
}

const updateGameResult = (game) => {
    if (game[0] === "WIN") {
        gameResult.innerText = `You win! ${game[1]} beats ${game[2]}!`
    } else if (game[0] === "LOSE") {
        gameResult.innerText = `You lose! ${game[2]} beats ${game[1]}!`
    } else {
        gameResult.innerText = `Draw! Both players chose ${game[1]}!`
    }
}

const updatePoints = (game) => {
    if (game === 'WIN') {
        player++;
        playerDOM.innerText = `Player = ${player}`
        checkWinner();
    } else if (game === 'LOSE') {
        cpu++;
        cpuDOM.innerText = `CPU = ${cpu}`
        checkWinner();
    } else {
        playerDOM.innerText = `Player = ${player}`
        cpuDOM.innerText = `CPU = ${cpu}`
    }
}

rock.addEventListener("click", () => {
  const game = rockPaperScissors("ROCK", computerPlay());
  updateGameResult(game);
  updatePoints(game[0]);
});

paper.addEventListener("click", () => {
  const game = rockPaperScissors("PAPER", computerPlay());
  updateGameResult(game);
  updatePoints(game[0]);
});

scissors.addEventListener("click", () => {
  const game = rockPaperScissors("SCISSORS", computerPlay());
  updateGameResult(game);
  updatePoints(game[0]);
});
