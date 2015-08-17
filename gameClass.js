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
  var colTrans = col - 1;
  for(var i = 5; i >= 0; i--){ //search col for 1st empty
    if(this.board[i][colTrans] === BLANK){
      return this.board[i][colTrans] = piece;
    }
  }
};