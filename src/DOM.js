import { AIAttackTurn, newGame } from "./game.js";
import BATTLESHIP from "./assets/battleship1.png";
import CARRIER from "./assets/carrier.png";
import DESTROYER from "./assets/destroyer.png";
import SUBMARINE from "./assets/submarine.png";
import PATROLBOAT from "./assets/patrolboat.png";

const body = document.querySelector("body");

// CreateMainDisplay is called when a new game is started.  Creates DOM elements that represent the player boards (grids) and assigns listener events to each of the grids squares, depending on the player.
export const createMainDisplay = (player1, player2, board1, board2) => {
  let timeout = [];

  const display = document.createElement("div");
  body.appendChild(display);
  display.classList.add("screen-display");
  setTimeout(() => {
    display.style.opacity = "1";
  }, 500);

  const msgbanner = document.createElement("div");
  //typeWriter("Commander, select target and fire!", msgoutput);
  msgbanner.classList.add("msg-banner");
  display.appendChild(msgbanner);

  const msgoutput = document.createElement("p");
  msgoutput.textContent =
    "Commander, enemy fleet in range. Select coordinates, fire!";
  msgoutput.classList.add("msg-output");
  msgbanner.appendChild(msgoutput);

  const placeholder = document.createElement("div");
  placeholder.classList.add("placeholder");
  msgbanner.appendChild(placeholder);
  setInterval(() => {
    placeholder.classList.toggle("black");
  }, 500);

  const gridContainer = document.createElement("div");
  gridContainer.classList.add("grid-container");
  display.appendChild(gridContainer);

  // Grid 1 / player 1.  Grid created will highlight squares where the ships are located
  const DOMgrid1 = document.createElement("div");
  DOMgrid1.classList.add("grid");
  gridContainer.appendChild(DOMgrid1);

  for (let row = 0; row < board1.grid.length; row++) {
    for (let col = 0; col < board1.grid[row].length; col++) {
      let square = document.createElement("div");
      square.classList.add("grid-square");
      square.id = `${row}by${col}`; // IMPORTANT - ID is used to target squares that the AI attacked.  Square color will be updated depending on attack outcome
      DOMgrid1.appendChild(square);
      if (board1.grid[row][col].ship) {
        square.style.backgroundColor = "green";
      }
      square.addEventListener("click", () => {
        // This Event listener will be used once custom ship placement is implemented
      });
    }
  }

  const grid1name = document.createElement("div");
  grid1name.textContent = "Allied Fleet";
  grid1name.classList.add("grid-name");
  DOMgrid1.appendChild(grid1name);

  // Create ship icons for Allied fleet
  const ships1 = document.createElement("div");
  ships1.classList.add("ships1-display");
  DOMgrid1.appendChild(ships1);

  const battleship1 = document.createElement("img");
  battleship1.classList.add("ship-icons");
  battleship1.src = BATTLESHIP;
  battleship1.id = "Battleship1";

  const carrier1 = document.createElement("img");
  carrier1.classList.add("ship-icons");
  carrier1.src = CARRIER;
  carrier1.id = "Carrier1";

  const destroyer1 = document.createElement("img");
  destroyer1.classList.add("ship-icons");
  destroyer1.src = DESTROYER;
  destroyer1.id = "Destroyer1";

  const submarine1 = document.createElement("img");
  submarine1.classList.add("ship-icons");
  submarine1.src = SUBMARINE;
  submarine1.id = "Submarine1";

  const patrolboat1 = document.createElement("img");
  patrolboat1.classList.add("ship-icons");
  patrolboat1.src = PATROLBOAT;
  patrolboat1.id = "Patrol Boat1";

  ships1.appendChild(carrier1);
  ships1.appendChild(battleship1);
  ships1.appendChild(destroyer1);
  ships1.appendChild(submarine1);
  ships1.appendChild(patrolboat1);

  // Grid 2 / Player 2 (AI player).  Grid created will have squares that contain listener events to recieve attacks from player 1.  Ships will NOT be revealed and squares will have color indicators to indicate hits or misses.
  const DOMgrid2 = document.createElement("div");
  DOMgrid2.classList.add("grid");
  gridContainer.appendChild(DOMgrid2);

  for (let row = 0; row < board2.grid.length; row++) {
    for (let col = 0; col < board2.grid[row].length; col++) {
      let square = document.createElement("div");
      square.classList.add("grid-square");
      DOMgrid2.appendChild(square);

      // This particular event listener fucntions as the game loop, once the player selects a target square to attack, the AI then attacks in turn (AIAttackTurn method called from game.js)
      square.addEventListener("click", () => {
        msgoutput.textContent = "";
        timeout.forEach((time) => clearTimeout(time)); // Clears the event queue of prior typeWriter outputs
        //console.log(timeout);

        let msg = player1.attack(player2, row, col);
        if (msg === "Target Miss...") {
          setTimeout(() => {
            addPeg(square, 1);
          }, 250);
          msgoutput.textContent = "";
          timeout = typeWriter(`Cannon Battery Fire - ${msg}`, msgoutput);
        } else if (
          msg === "Target already been fired on, select new target..."
        ) {
          msgoutput.textContent = "";
          timeout = typeWriter(msg, msgoutput);
          return;
        } else {
          addPeg(square, 2);
          shipSunk(msg, 2);
          msgoutput.textContent = "";
          timeout = typeWriter(`Cannon Battery Fire - ${msg}`, msgoutput);
          if (board2.allSunk()) {
            gameOver(1);
            return;
          }
        }

        setTimeout(() => {
          timeout.forEach((time) => clearTimeout(time));
          // AI attack turn.  Once the attack completes, player grid UI will update to represent the AI's attack target
          let attack = AIAttackTurn(player1, player2);
          // targets the square in the player's grid with the coordinate ID, then color is updated accordining to attack outcome
          let target = document.getElementById(`${attack.row}by${attack.col}`);
          if (player1.grid[attack.row][attack.col].ship) {
            addPeg(target, 2);
            shipSunk(attack.msg, 1);
            msgoutput.textContent = "";
            timeout = [
              ...timeout,
              typeWriter(`Enemy Incoming Fire - ${attack.msg}`, msgoutput),
            ];
            if (board1.allSunk()) {
              gameOver(2);
            }
          } else {
            msgoutput.textContent = "";
            timeout = [
              ...timeout,
              typeWriter(`Enemy Incoming Fire - ${attack.msg}`, msgoutput),
            ];
            addPeg(target, 1);
          }
        }, 2000);
      });
    }
  }
  const grid2name = document.createElement("div");
  grid2name.textContent = "Enemy Fleet";
  grid2name.classList.add("grid-name");
  DOMgrid2.appendChild(grid2name);

  // Create ship icons for Enemy fleet
  const ships2 = document.createElement("div");
  ships2.classList.add("ships2-display");
  DOMgrid2.appendChild(ships2);

  const battleship2 = document.createElement("img");
  battleship2.classList.add("ship-icons");
  battleship2.src = BATTLESHIP;
  battleship2.id = "Battleship2";

  const carrier2 = document.createElement("img");
  carrier2.classList.add("ship-icons");
  carrier2.src = CARRIER;
  carrier2.id = "Carrier2";

  const destroyer2 = document.createElement("img");
  destroyer2.classList.add("ship-icons");
  destroyer2.src = DESTROYER;
  destroyer2.id = "Destroyer2";

  const submarine2 = document.createElement("img");
  submarine2.classList.add("ship-icons");
  submarine2.src = SUBMARINE;
  submarine2.id = "Submarine2";

  const patrolboat2 = document.createElement("img");
  patrolboat2.classList.add("ship-icons");
  patrolboat2.src = PATROLBOAT;
  patrolboat2.id = "Patrol Boat2";

  ships2.appendChild(carrier2);
  ships2.appendChild(battleship2);
  ships2.appendChild(destroyer2);
  ships2.appendChild(submarine2);
  ships2.appendChild(patrolboat2);
};

// Game Over function.  Creates a modal overlay displaying the game outcome and a button for a new game.  Input parameter is the player number, which is used to determine if player wins or loses
const gameOver = (player) => {
  const modal = document.createElement("div");
  modal.classList.add("modal");
  body.appendChild(modal);

  const container = document.createElement("div");
  container.classList.add("modal-container");
  modal.appendChild(container);

  // Game outcome message
  const msg = document.createElement("p");
  container.appendChild(msg);
  if (player === 1) {
    msg.textContent = "Enemy Fleet Destroyed, Mission Accomplished!";
  } else {
    msg.textContent = "Fleet Destroyed, You Lose!";
  }

  // New Game button
  const nextMission = document.createElement("button");
  nextMission.textContent = "Next Mission";
  container.appendChild(nextMission);

  nextMission.addEventListener("click", () => {
    body.removeChild(body.lastChild); // remove modal
    body.removeChild(body.lastChild); // remove current game display
    newGame(); // create a new game
  });
};

// Typewriter effect for UI displayed messages to the player.  Returns an array of timeout IDs to be targeted in the event queue
const typeWriter = (text, element, index = 0, timeoutArray = []) => {
  if (index < text.length) {
    element.textContent += text.charAt(index);
    index++;
    timeoutArray.push(
      setTimeout(() => {
        typeWriter(text, element, index, timeoutArray);
      }, 20)
    );
  }
  return timeoutArray;
};

// Adds a new element to the grid squares when it's attacked, representative of the pegs in battleship boardgame
// msg === 1 indicates a white peg/miss, msg === 2 indicates a red peg/hit
const addPeg = (gridSquare, msg) => {
  const peg = document.createElement("div");
  peg.classList.add("peg");
  gridSquare.appendChild(peg);
  if (msg === 1) peg.style.backgroundColor = "white";
  else peg.style.backgroundColor = "red";
};

// Ship icon sunk function.  Will change the color of the ship icons for either player to indicate ship status.  Params will be message output from player attack function and the player that is targetted.
// player == 1 is human, player == 2 is AI
const shipSunk = (msg, player) => {
  let ships = [
    "Carrier",
    "Destroyer",
    "Battleship",
    "Submarine",
    "Patrol Boat",
  ];
  for (let i = 0; i < ships.length; i++) {
    if (msg.includes(ships[i])) {
      let targetShip = ships[i];
      let targetIcon = document.getElementById(targetShip + player); // Type coercion to add the ship name and player number to get ID of specific ship icon
      targetIcon.classList.add("shake");
      setTimeout(() => {
        targetIcon.classList.add("sink")
      }, 750)
      break;
    }
  }
};