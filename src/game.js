import * as objects from "./objects.js";
import * as DOM from "./DOM.js"

// createFleet will create a fleet of ships and place them randomly on the passed gameboard parameter.  The logic ensures that the ships do not overlap and also randomizes whether the ships are placed
// horizontally or vertically
export const createFleet = (board) => {
  const fleetHps = [2, 3, 3, 4, 5]; // fleet array.  Standard Battleship game has 5 ships with the following hps values: 2, 3, 3, 4, 5.
  fleetHps.forEach((hps) => {
    let dir = Math.random() * 100; // Random number generator to determine whether the ship is placed vertically or horizontally
    if (dir >= 50) {
      let row = Math.round(Math.random() * 9);
      let col = Math.round(Math.random() * (10 - hps));
      switch (hps) {
        case 2:
          while (board.grid[row][col].ship || board.grid[row][col + 1].ship) {
            row = Math.round(Math.random() * 9);
            col = Math.round(Math.random() * (10 - hps));
          }
          break;
        case 3:
          while (
            board.grid[row][col].ship ||
            board.grid[row][col + 1].ship ||
            board.grid[row][col + 2].ship
          ) {
            row = Math.round(Math.random() * 9);
            col = Math.round(Math.random() * (10 - hps));
          }
          break;
        case 4:
          while (
            board.grid[row][col].ship ||
            board.grid[row][col + 1].ship ||
            board.grid[row][col + 2].ship ||
            board.grid[row][col + 3].ship
          ) {
            row = Math.round(Math.random() * 9);
            col = Math.round(Math.random() * (10 - hps));
          }
          break;
        case 5:
          while (
            board.grid[row][col].ship ||
            board.grid[row][col + 1].ship ||
            board.grid[row][col + 2].ship ||
            board.grid[row][col + 3].ship ||
            board.grid[row][col + 4].ship
          ) {
            row = Math.round(Math.random() * 9);
            col = Math.round(Math.random() * (10 - hps));
          }
          break;
      }
      console.log(row, col, dir);
      board.newShip(row, col, hps, "x");
    } else {
      let row = Math.round(Math.random() * (10 - hps));
      let col = Math.round(Math.random() * 9);
      switch (hps) {
        case 2:
          while (board.grid[row][col].ship || board.grid[row + 1][col].ship) {
            row = Math.round(Math.random() * (10 - hps));
            col = Math.round(Math.random() * 9);
          }
          break;
        case 3:
          while (
            board.grid[row][col].ship ||
            board.grid[row + 1][col].ship ||
            board.grid[row + 2][col].ship
          ) {
            row = Math.round(Math.random() * (10 - hps));
            col = Math.round(Math.random() * 9);
          }
          break;
        case 4:
          while (
            board.grid[row][col].ship ||
            board.grid[row + 1][col].ship ||
            board.grid[row + 2][col].ship ||
            board.grid[row + 3][col].ship
          ) {
            row = Math.round(Math.random() * (10 - hps));
            col = Math.round(Math.random() * 9);
          }
          break;
        case 5:
          while (
            board.grid[row][col].ship ||
            board.grid[row + 1][col].ship ||
            board.grid[row + 2][col].ship ||
            board.grid[row + 3][col].ship ||
            board.grid[row + 4][col].ship
          ) {
            row = Math.round(Math.random() * (10 - hps));
            col = Math.round(Math.random() * 9);
          }
          break;
      }
      console.log(row, col, dir);
      board.newShip(row, col, hps, "y");
    }
  });
};

// New Game Method.  Initalizes all game UI and logic by calling methods from DOM.js and main game objects from the factories in Object.js.
export const newGame = () => {
    const board1 = objects.gameboard(10);
    const board2 = objects.gameboard(10);
  
    const player1 = objects.player(board1);
    const player2 = objects.player(board2);
  
    createFleet(board1);
    createFleet(board2);

    DOM.createMainDisplay(player1, player2, board1, board2)

}

export const AIAttackTurn = (player, ai) => {
    let row = Math.round(Math.random() * 9)
    let col = Math.round(Math.random() * 9)

    while(player.grid[row][col].attacked) {
        row = Math.round(Math.random() * 9)
        col = Math.round(Math.random() * 9)
    }
    let x = ai.attack(player, row, col)
    console.log("ai", x)
    return [row,col]
}