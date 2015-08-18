var Game = function(){
  this.board = this.newGame();
};

Game.prototype.newGame = function() {
  return [[BLANK, BLANK, BLANK, BLANK, BLANK, BLANK, BLANK],
          [BLANK, BLANK, BLANK, BLANK, BLANK, BLANK, BLANK],
          [BLANK, BLANK, BLANK, BLANK, BLANK, BLANK, BLANK],
          [BLANK, BLANK, BLANK, BLANK, BLANK, BLANK, BLANK],
          [BLANK, BLANK, BLANK, BLANK, BLANK, BLANK, BLANK],
          [BLANK, BLANK, BLANK, BLANK, BLANK, BLANK, BLANK]]
};

Game.prototype.printBoard = function() {
  console.log(this.board[0] + "\n" + this.board[1] + "\n" + 
              this.board[2] + "\n" + this.board[3] + "\n" + 
              this.board[4] + "\n" + this.board[5]);
};

Game.prototype.placePiece = function(col, piece) {
//for col === 1 => search board[5][0], board[4][0]...
  if(!piece){
    piece = RED;
  };
  var colTrans = col - 1, rowInd, colInd;
  for(var i = 5; i >= 0; i--){ //search col for 1st empty
    if(this.board[i][colTrans] === BLANK){
      this.board[i][colTrans] = piece;
      rowInd = i;
      break;
    }
  }
  return [rowInd, colTrans, piece];
};

Game.prototype.spotCheck = function(modRow, modCol, piece) {
  this.modRow = modRow;
  this.modCol = modCol;
  this.piece = piece;
  return (this.board[modRow] !== undefined && this.board[modCol] !== undefined && this.board[modRow][modCol] === piece);
};

Game.prototype.winCheck = function(rowColPieceArr){
  var row = rowColPieceArr[0];
  var col = rowColPieceArr[1];
  var piece = rowColPieceArr[2];
  // var thisBoard = this.board;
  // var spotCheck = function(modRow, modCol){
  //   return (thisBoard[modRow] !== undefined && thisBoard[modCol] !== undefined && thisBoard[modRow][modCol] === piece);
  // };

  if(this.spotCheck(row, col + 1, piece) && this.spotCheck(row, col + 2, piece) && this.spotCheck(row, col + 3, piece)){
    console.log(piece + "'s Win!")
    return true;
  } else if(this.spotCheck(row + 1, col + 1, piece) && this.spotCheck(row + 2, col + 2, piece) && this.spotCheck(row + 3, col + 3, piece)){
    console.log(piece + "'s Win!")
    return true;
  } else if(this.spotCheck(row + 1, col, piece) && this.spotCheck(row + 2, col, piece) && this.spotCheck(row + 3, col, piece)){
    console.log(piece + "'s Win!")
    return true;
  } else if(this.spotCheck(row - 1, col + 1, piece) && this.spotCheck(row - 2, col + 2, piece) && this.spotCheck(row - 3, col + 3, piece)){
    console.log(piece + "'s Win!")
    return true;
  } else if(this.spotCheck(row, col - 1, piece) && this.spotCheck(row, col - 2, piece) && this.spotCheck(row, col - 3, piece)){
    console.log(piece + "'s Win!")
    return true;
  } else if(this.spotCheck(row - 1, col - 1, piece) && this.spotCheck(row - 2, col - 2, piece) && this.spotCheck(row - 3, col - 3, piece)){
    console.log(piece + "'s Win!")
    return true;
  } else if(this.spotCheck(row - 1, col, piece) && this.spotCheck(row - 2, col, piece) && this.spotCheck(row - 3, col, piece)){
    console.log(piece + "'s Win!")
    return true;
  } else if(this.spotCheck(row - 1, col + 1, piece) && this.spotCheck(row - 2, col + 2, piece) && this.spotCheck(row - 3, col + 3, piece)){
    console.log(piece + "'s Win!")
    return true;
  } else {
    return false;
  }
};