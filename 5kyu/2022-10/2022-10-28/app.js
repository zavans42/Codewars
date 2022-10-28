/*

Did I Finish my Sudoku?
Tags: MATHEMATICS, PUZZLES, GAMES, GAME SOLVERS

1. DESCRIPTION

Write a function done_or_not/DoneOrNot passing a board (list[list_lines]) as parameter. If the board is valid return 'Finished!', otherwise return 'Try again!'

Sudoku rules:
Complete the Sudoku puzzle so that each and every row, column, and region contains the numbers one through nine only once.

2. EXAMPLE

doneOrNot([[5, 3, 4, 6, 7, 8, 9, 1, 2], 
           [6, 7, 2, 1, 9, 5, 3, 4, 8],
           [1, 9, 8, 3, 4, 2, 5, 6, 7],
           [8, 5, 9, 7, 6, 1, 4, 2, 3],
           [4, 2, 6, 8, 5, 3, 7, 9, 1],
           [7, 1, 3, 9, 2, 4, 8, 5, 6],
           [9, 6, 1, 5, 3, 7, 2, 8, 4],
           [2, 8, 7, 4, 1, 9, 6, 3, 5],
           [3, 4, 5, 2, 8, 6, 1, 7, 9]]), "Finished!")

doneOrNot([[5, 3, 4, 6, 7, 8, 9, 1, 2], 
           [6, 7, 2, 1, 9, 0, 3, 4, 9],
           [1, 0, 0, 3, 4, 2, 5, 6, 0],
           [8, 5, 9, 7, 6, 1, 0, 2, 0],
           [4, 2, 6, 8, 5, 3, 7, 9, 1],
           [7, 1, 3, 9, 2, 4, 8, 5, 6],
           [9, 0, 1, 5, 3, 7, 2, 1, 4],
           [2, 8, 7, 4, 1, 9, 6, 3, 5],
           [3, 0, 0, 4, 8, 1, 1, 7, 9]]), "Try again!")

*/

function doneOrNot(rows) {
  const VALID = "123456789";
  let [columns, regions] = [[], []];

  for (let i = 0; i < 9; i++) {
    columns[i] = [];

    for (var j = 0; j < 9; j++) {
      let k = Math.floor(i / 3) + Math.floor(j / 3) * 3;
      regions[k] = regions[k] || [];

      regions[k].push(rows[i][j]);
      columns[i].push(rows[j][i]);
    }
  }

  const isValid = (x) => x.slice(0).sort().join("") == VALID;
  const finished =
    rows.every(isValid) && columns.every(isValid) && regions.every(isValid);

  return finished ? "Finished!" : "Try again!";
}
