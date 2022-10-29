/*

Tic-Tac-Toe Checker
Tags: ARRAYS, ALGORITHMS

1. DESCRIPTION

If we were to set up a Tic-Tac-Toe game, we would want to know whether the board's current state is solved, wouldn't we? Our goal is to create a function that will check that for us!

Assume that the board comes in the form of a 3x3 array, where the value is 0 if a spot is empty, 1 if it is an "X", or 2 if it is an "O"

We want our function to return:
-1 if the board is not yet finished AND no one has won yet (there are empty spots),
1 if "X" won,
2 if "O" won,
0 if it's a cat's game (i.e. a draw).

You may assume that the board passed in is valid in the context of a game of Tic-Tac-Toe.

2. EXAMPLE

isSolved([[0,0,1],
          [0,1,2],
          [2,1,0]]) === -1)

*/

function isSolved(board) {
  for (let i = 1; i <= 2; i++) {
    let horizontal = board.some((row) => row.join("") === `${i}${i}${i}`);
    if (horizontal) {
      return i;
    }

    if (
      (board[0][0] == i && board[1][1] == i && board[2][2] == i) ||
      (board[0][3] == i && board[1][1] == i && board[2][0] == i)
    ) {
      return i;
    }
  }

  return board.some((row) => row.includes(0)) ? -1 : 0;
}
