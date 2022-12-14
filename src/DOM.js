import { AIAttackTurn } from "./game.js";

const body = document.querySelector("body");

// CreateMainDisplay is called when a new game is started.  Creates DOM elements that represent the player boards (grids) and assigns listener events to each of the grids squares, depending on the player.
export const createMainDisplay = (player1, player2, board1, board2) => {
  const display = document.createElement("div");
  body.appendChild(display);
  display.classList.add("screen-display");

  // Grid 1 / player 1.  Grid created will highlight squares where the ships are located
  const DOMgrid1 = document.createElement("div");
  DOMgrid1.classList.add("grid");
  display.appendChild(DOMgrid1);

  for (let row = 0; row < board1.grid.length; row++) {
    for (let col = 0; col < board1.grid[row].length; col++) {
      let square = document.createElement("div");
      square.classList.add("grid-square");
      square.id = `${row}by${col}`  // IMPORTANT - ID is used to target squares that the AI attacked.  Square color will be updated depending on attack outcome
      DOMgrid1.appendChild(square);
      if (board1.grid[row][col].ship) {
        square.style.backgroundColor = "orange";
      }
      square.addEventListener("click", () => {  // This Event listener will be used once custom ship placement is implemented
        console.log(board1.grid[row][col]);
      });
    }
  }

  // Grid 2 / Player 2.  Grid created will have squares that contain listener events to recieve attacks from player 1.  Ships will NOT be revealed and squares will have color indicators to indicate hits or misses.
  const DOMgrid2 = document.createElement("div");
  DOMgrid2.classList.add("grid");
  display.appendChild(DOMgrid2);

  for (let row = 0; row < board2.grid.length; row++) {
    for (let col = 0; col < board2.grid[row].length; col++) {
      let square = document.createElement("div");
      square.classList.add("grid-square");
      DOMgrid2.appendChild(square);

      // This particular event listener fucntions as the game loop, once the player selects a target square to attack, the AI then attacks in turn (AIAttackTurn method called from game.js)
      square.addEventListener("click", () => {
        console.log(row, col);
        let x = player1.attack(player2, row, col)
        if (x === "Torpedo miss...") {
          square.style.backgroundColor = "cyan";
          console.log("player", x)
        } else {
          square.style.backgroundColor = "red";
          console.log("player", x)
        }
        // AI attack turn.  Once the attack completes, player grid UI will update to represent the AI's attack target
        let attackCoor = AIAttackTurn(player1, player2);
        let target = document.getElementById(`${attackCoor[0]}by${attackCoor[1]}`)
        if (player1.grid[attackCoor[0]][attackCoor[1]].ship) {
          target.style.backgroundColor = "red"
        } else {
          target.style.backgroundColor = "cyan"
        }      
      });
    }
  }
};
