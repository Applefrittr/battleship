import {ship, gameboard, player} from './objects.js'

const newShip = ship(3)

test('Create a new ship (factory function)', () => {
    expect(newShip).toBeInstanceOf(Object)
})

test('Determine if ship is sunk (no hits)', () => {
    expect(newShip.isSunk()).toBe(false)
})

test('Determine if ship is sunk (1 hit)', () => {
    expect(newShip.hit().isSunk()).toBe(false)
})

test('Determine if ship is sunk (2 more hits)', () => {
    expect(newShip.hit().hit().isSunk()).toBe(true)
})


test("Create a new Gameboard (factory function)", () => {
    const board = gameboard()
    expect(board).toBeInstanceOf(Object)
})

const board = gameboard(5)
test("Gameboard is an row x col grid of objects based on input paramater", () => {
    expect(board.grid).toStrictEqual([[{}, {}, {}, {}, {}], [{}, {}, {}, {}, {}], [{}, {}, {}, {}, {}], [{}, {}, {}, {}, {}], [{}, {}, {}, {}, {}]])
})

test("Gameboard can create new Ships and place it on grid along either axis", () => {
    const ship1 = board.newShip(0, 0, 3)
    const ship2 = board.newShip(1, 0, 2, 'y')
    expect(board.grid).toStrictEqual([[{"ship": ship1}, {"ship": ship1}, {"ship": ship1}, {}, {}], [{"ship": ship2}, {}, {}, {}, {}], [{"ship": ship2}, {}, {}, {}, {}], [{}, {}, {}, {}, {}], [{}, {}, {}, {}, {}]])
})

test("Gameboard reports a miss on an empty square when attacked", () => {
    expect(board.recieveAttack(0,4)).toBe("Torpedo miss...")
})

test("Gameboard reports a hit on a ship within a square when attacked", () => {
    expect(board.recieveAttack(0,0)).toBe("Direct hit!")
})

test("Gameboard reports if a square has already been attacked", () => {
    expect(board.recieveAttack(0,0)).toBe("Location has already been attacked...")
})

test("Ship can be sunk with gameboard attack method" , () => {
    let ship1 = board.grid[0][0].ship
    board.recieveAttack(0,1)
    board.recieveAttack(0,2)
    expect(ship1.isSunk()).toBe(true)
})

test("Gameboard records total number of ship hitpoints on grid", () => {
    expect(board.totalhps).toBe(5)
})

test("Gameboard records total number of misses on the grid", () => {
    expect(board.misses).toBe(1)
})

test("Gameboard records total number of hits on the grid", () => {
    expect(board.hits).toBe(3)
})

test ("Gameboard can report if all ships have been sunk (not sunk)", () => {
    expect(board.allSunk()).toBe(false)
})

test ("Gameboard can report if all ships have been sunk (sunk)", () => {
    board.recieveAttack(1,0)
    board.recieveAttack(2,0)
    expect(board.allSunk()).toBe(true)
})

test ("Create a new player", () => {
    const newPlayer = player(board)
    expect(newPlayer).toBeInstanceOf(Object)
})

test("Create player and assign it a gameboard", () => {
    const newBoard = gameboard(5)
    const player1 = player(newBoard)
    expect(player1.grid).toStrictEqual([[{}, {}, {}, {}, {}], [{}, {}, {}, {}, {}], [{}, {}, {}, {}, {}], [{}, {}, {}, {}, {}], [{}, {}, {}, {}, {}]])
})

const board1 = gameboard(5)
const board2 = gameboard(5)

const player1 = player(board1)
const player2 = player(board2)
test("Player can attack the other player, resulting in a miss", () => {
    expect(player1.attack(player2, 0, 0)).toBe("Torpedo miss...")
})

test("Player can attack the other player, resulting in a hit", () => {
    board2.newShip(0, 0, 3)
    expect(player1.attack(player2, 0, 1)).toBe("Direct hit!")
})

test("Player attacks same sqaure twice, resulting in error", () => {
    expect(player1.attack(player2, 0, 1)).toBe("Location has already been attacked...")
})