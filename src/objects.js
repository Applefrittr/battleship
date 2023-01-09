
// ship factory function, will be used to create ship objects to be used on the gameboard.  2 public methods to be used by gameboard
export const ship = (input, name) => {
    let hps = input,
        dmg = 0

    return {
        hps,
        name,
        hit() {
            dmg++
            return this
        },
        isSunk() {
            return hps <= dmg ? true : false
        }

    }
}

// gameboard factory function, will create a square grid of objects based on parameter dim.  Each square object of the grid will initailly have no properties but properties will be added depending
// on gamestate.  Example, if a ship is placed in the square, "ship" will be added.  Or if a square is hit, "hit" property will be added
export const gameboard = (dim) => {
    
    // build gameboard grid
    const grid = []
    for (let a = 0; a < dim; a++) {
        let row = []
        grid.push(row)
        for (let b = 0; b < dim; b++) {
            row.push({})
        }
    }

    // variables to record number of hits and misses as well as keep track of total ship hitpoints on gameboard
    let misses = 0,
        hits = 0,
        totalhps = 0

    return {
        grid,
        misses,
        hits,
        totalhps,
        // places a new ship() object on the grid using the provided row and col parameters as the start postion.  hps determines the type of ship placed and defaults
        // the palcement along the x-axis
        newShip(row, col, hps, name, axis = 'x') {
            const ship1 = ship(hps, name)
            this.totalhps += hps

            if (axis === 'x') {
                for (let a = 0; a < ship1.hps; a++) {
                    let square = this.grid[row][col + a]
                    square.ship = ship1
                }
            } else {
                for (let a = 0; a < ship1.hps; a++) {
                    let square = this.grid[row + a][col]
                    square.ship = ship1
                }
            }
            return ship1
        },
        // attack method, called when a square on the grid is chosen for an attack.  If no ship occupies the space, returns a "missed" string while also alos assigning an attacked
        // property to that square object.  If a ship is found, call the hit() on that ship as well as assigned an attacked property to that square while returning a "hit" string
        recieveAttack(row, col) {
            const square = this.grid[row][col]
            if (square.attacked) return "Target already been fired on, select new target..."
            else if (square.ship) {
                square.attacked = true
                square.ship.hit()
                this.hits++
                if (square.ship.isSunk()) return `Direct Hit - ${square.ship.name} Destroyed!`
                else return "Direct Hit!"
            }
            else {
                square.attacked = true
                this.misses++
                return "Target Miss..."
            }
        },
        // method to determine if all ships on grid have been sunk, resulting in a game end
        allSunk() {
            return this.totalhps === this.hits ? true : false
        }
    }
}

// player factory function that accepts a gameboard object as a parameter.  This effectively asigns the gamebaord to the player and enables methods within the player object to effect the gameboard
export const player = (board) => {
    const grid = board.grid
    return {
        grid,
        board,
        attack(player, row, col) {
            return player.board.recieveAttack(row, col)
        },
    }
}