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

Game.prototype.winCheck = function(rowColPieceArr){
  this.row = rowColPieceArr[0];
  this.col = rowColPieceArr[1];
  this.piece = rowColPieceArr[2];
  var row = this.row, col = this.col, piece = this.piece;
  var thisBoard = this.board;
  var spotCheck = function(modRow, modCol){
    return (thisBoard[modRow] !== undefined && thisBoard[modCol] !== undefined && thisBoard[modRow][modCol] === piece);
  };

  if(spotCheck(row, col + 1) && spotCheck(row, col + 2) && spotCheck(row, col + 3)){
    console.log(piece + "'s Win!")
    return true;
  } else if(spotCheck(row + 1, col + 1) && spotCheck(row + 2, col + 2) && spotCheck(row + 3, col + 3)){
    console.log(piece + "'s Win!")
    return true;
  } else if(spotCheck(row + 1, col) && spotCheck(row + 2, col) && spotCheck(row + 3, col)){
    console.log(piece + "'s Win!")
    return true;
  } else if(spotCheck(row - 1, col + 1) && spotCheck(row - 2, col + 2) && spotCheck(row - 3, col + 3)){
    console.log(piece + "'s Win!")
    return true;
  } else if(spotCheck(row, col - 1) && spotCheck(row, col - 2) && spotCheck(row, col - 3)){
    console.log(piece + "'s Win!")
    return true;
  } else if(spotCheck(row - 1, col - 1) && spotCheck(row - 2, col - 2) && spotCheck(row - 3, col - 3)){
    console.log(piece + "'s Win!")
    return true;
  } else if(spotCheck(row - 1, col) && spotCheck(row - 2, col) && spotCheck(row - 3, col)){
    console.log(piece + "'s Win!")
    return true;
  } else if(spotCheck(row - 1, col + 1) && spotCheck(row - 2, col + 2) && spotCheck(row - 3, col + 3)){
    console.log(piece + "'s Win!")
    return true;
  } else {
    return false;
  }
};