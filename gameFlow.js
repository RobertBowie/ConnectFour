//---------------
//Start on click.
//---------------
document.querySelector('.twoPlayerStart').onclick = function() {
  twoPlayerGame = new Game;
  twoPlayerFlow = new Flow;
  twoPlayerFlow.startGame(twoPlayerGame);
};

var Flow = function(){
};

Flow.prototype.movePrompt = function() {
  this.piece = window.prompt("What color would you like to place?([R]ed or [B]lack)", RED);
  console.log(this.piece + " selected.");
  this.col = window.prompt("What column would you like to drop your piece into?", "1");
  console.log(this.col + " selected.");
};

Flow.prototype.startGame = function(game) {
  for(var i = 0; i <= 42; i++){
    game.printBoard();
    this.movePrompt();
    var temp = game.placePiece(this.col, this.piece);
    if(game.winCheck(temp)){
      game.printBoard();
      break;
    }
  }
};
