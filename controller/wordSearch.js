var fs = require("fs");
const util = require("util");
var HashMap = require("hashmap");
var finalwords = [];
var finalindex = [];
var dictionary = new HashMap();

function Tile(value) {
  this.tilevalue = value;
  this.used = false;
}

function getFile() {
  const readFile = util.promisify(fs.readFile);
  return readFile("usa.txt", "utf8");
}

initHash = (req, res) => {
  let dicttxt = [];
  getFile()
    .then(data => {
      dicttxt = data.split("\n");
      dicttxt.forEach(word => {
        dictionary.set(word.replace(/[\n\r]/g, ""), 1);
      });
    })
    .then(() => res.json({ success: true, HashMap: dictionary }));
};

solve = (req, res) => {
  console.log("Route works");
  let boardarray = req.body.board;
  let temp = "";
  let temp2 = [];
  console.log(temp2);
  if (dictionary.length < 1) {
    res.json({ success: false, err: "HashMap missing" });
    return;
  }
  const tileBoard = createBoard(boardarray);
  for (var i = 0; i < 4; i++) {
    for (var j = 0; j < 4; j++) {
      traverseBoard(tileBoard, i, j, temp, temp2);
    }
  }

  finalwords.sort((a, b) => b.length - a.length);
  console.log(finalwords);
  let retval = [];
  finalwords.forEach((word, i) => {
    retval.push({ word: word, index: finalindex[i] });
  });
  res.json(retval);
};

function createBoard(chararray) {
  var mainboard = [];
  var count = 0;
  for (var i = 0; i < 4; i++) {
    if (mainboard[i] == null) mainboard[i] = [];
    for (var j = 0; j < 4; j++) {
      mainboard[i].push(new Tile(chararray[count++]));
    }
  }
  console.log("Creating board");
  return mainboard;
}

traverseBoard = (board, row, col, w, ind) => {
  let tempboard = [];

  tempboard = JSON.parse(JSON.stringify(board));
  let index = [...ind, row * 4 + col];
  let word = w + tempboard[row][col].tilevalue;

  if (tempboard[row][col].used || word.length > 8) return;

  tempboard[row][col].used = true;
  if (
    dictionary.get(word) == 1 &&
    word.length > 2 &&
    finalwords.includes(word) == false
  ) {
    console.log(word);
    console.log(index);
    finalwords.push(word);
    finalindex.push(index);
  }

  if (row - 1 >= 0) traverseBoard(tempboard, row - 1, col, word, index);
  if (row + 1 < 4) traverseBoard(tempboard, row + 1, col, word, index);
  if (col - 1 >= 0) traverseBoard(tempboard, row, col - 1, word, index);
  if (col + 1 < 4) traverseBoard(tempboard, row, col + 1, word, index);
  if (row - 1 >= 0 && col - 1 >= 0)
    traverseBoard(tempboard, row - 1, col - 1, word, index);
  if (row - 1 >= 0 && col + 1 < 4)
    traverseBoard(tempboard, row - 1, col + 1, word, index);
  if (row + 1 < 4 && col - 1 >= 0)
    traverseBoard(tempboard, row + 1, col - 1, word, index);
  if (row + 1 < 4 && col + 1 < 4)
    traverseBoard(tempboard, row + 1, col + 1, word, index);
};

module.exports = { solve, initHash };
