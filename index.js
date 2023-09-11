/**
 * B-I-N-G-O
 *
 * A Bingo card contain 25 squares arranged in a 5x5 grid (five columns
 * and five rows). Each space in the grid contains a number between 1
 * and 75. The center space is marked "FREE" and is automatically filled.
 *
 * As the game is played, numbers are drawn. If the player's card has
 * that number, that space on the grid is filled.
 *
 * A player wins BINGO by completing a row, column, or diagonal of filled
 * spaces.
 *
 * Your job is to complete the function that takes a bingo card and array
 * of drawn numbers and return 'true' if that card has achieved a win.
 *
 * A bingo card will be 25 element array. With the string 'FREE' as the
 * center element (index 12). Although developers are unscrupulous, they
 * will pass valid data to your function.
 */

// Helper function to check if an array contains all drawn numbers
function hasAllDrawnNumbers(arr, drawnNumbers) {
  return drawnNumbers.every((number) => arr.includes(number));
}


// Helper function to check for a win in a row, column, or diagonal
function checkForWin(arr, drawnNumbers) {
    return hasAllDrawnNumbers(arr, drawnNumbers);
}



function checkForBingo(bingoCard, drawnNumbers) {
  // Makes the board as a 2D matrix
  const board = [];
  for (let i = 0; i < 5; i++) {
    board.push(bingoCard.slice(i * 5, (i + 1) * 5));
  }

  // Check for rows, columns, and diagonals if there's a win
  for (let i = 0; i < 5; i++) {
    // Check rows
    if (checkForWin(board[i], drawnNumbers)) return true;
    // Check for columns
    const column = [];
    for (let j = 0; j < 5; j++) {
      column.push(board[j][i]);
    }
    if (checkForWin(column, drawnNumbers)) return true;

    // Check the diagonals 
    if (i === 2) {
      // Center the element, check both diagonals
      const diagonal1 = [board[0][0], board[1][1], board[3][3], board[4][4]];
      const diagonal2 = [board[0][4], board[1][3], board[3][1], board[4][0]];
      // Check the wins after making the diagonals
      if (checkForWin(diagonal1, drawnNumbers) || checkForWin(diagonal2, drawnNumbers)) return true;
    }
  }

  return false;
}



// this should return true with diagonal + free
console.log(checkForBingo(
  [
    8, 29, 35, 54, 65,
    13, 24, 44, 48, 67,
    9, 21, 'FREE', 59, 63,
    7, 19, 34, 53, 61,
    1, 20, 33, 46, 72
  ],
  [
    8, 24, 53, 72
  ]
)
);

// this should return false
console.log(checkForBingo(
  [
   8, 29, 35, 54, 65,
   13, 24, 44, 48, 67,
   9, 21, 'FREE', 59, 63,
   7, 19, 34, 53, 61,
   1, 20, 33, 46, 72
  ],
  [
    1, 33, 53, 65, 29, 75
  ]
)
);

module.exports = checkForBingo;
