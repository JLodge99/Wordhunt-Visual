var mainBoard;

function Tile(value) {
  this.value = falue;
  used = false;
}

function searchString(word) {}

solve = (req, res) => {
    console.log("Route works");
    console.log();
    qwert(1000000).then(console.log("actually done"));
    res.json({'success': false, 'message': 'An error has occurred.'});
}

function createBoard(chararray) {
  mainBoard = [];
  var count = 0;
  for (var i = 0; i < 4; i++) {
    for (var j = 0; j < 4; j++) {
      if (mainBoard[i] == null) mainBoard[i] = [];
      else mainBoard[i].push(new Tile(chararray[count]));
    }
  }
}

const qwert = async (num) => {
    var temp = [];
    if(num <= 1)
        return num;

    process.nextTick(() => {qwert(num - 1) + qwert(num - 2)})
}

function clone2dArray(array) {
  var retval = [];
  for (var i = 0; i < 4; i++) {
    for (var j = 0; j < 4; j++) {
      if (retval[i] == null) retval[i] = [];
      else retval[i].push(new Tile(array[i][j].value));
    }
  }

  return retval;
}

function traverseBoard(board, row, col, w) {
  var tempboard;

  tempboard = clone2dArray(board);

  var word = w + tempboard[row][col].c;

  if (tempboard[row][col].used || word.length() > 6) return;

  tempboard[row][col].used = true;

  if (search(word) && word.length() > 3) {
    //System.out.println(word);
    finalwords.add(word);
  }

  if (row - 1 >= 0) traverseBoard(tempboard, row - 1, col, word);
  if (row + 1 < 4) traverseBoard(tempboard, row + 1, col, word);
  if (col - 1 >= 0) traverseBoard(tempboard, row, col - 1, word);
  if (col + 1 < 4) traverseBoard(tempboard, row, col + 1, word);
  if (row - 1 >= 0 && col - 1 >= 0)
    traverseBoard(tempboard, row - 1, col - 1, word);
  if (row - 1 >= 0 && col + 1 < 4)
    traverseBoard(tempboard, row - 1, col + 1, word);
  if (row + 1 < 4 && col - 1 >= 0)
    traverseBoard(tempboard, row + 1, col - 1, word);
  if (row + 1 < 4 && col + 1 < 4)
    traverseBoard(tempboard, row + 1, col + 1, word);
}

module.exports = {solve};