//---------------
//Start on click.
//---------------
document.querySelector('.singlePlayerStart').onclick = function() {
  singlePlayerGame = new Game;
  singlePlayerFlow = new Flow;
  singlePlayerAI = new Computer;
  singlePlayerFlow.startGame(singlePlayerGame);
};

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

Flow.prototype.onePlayerPrompt = function() {
  this.piece = RED;
  this.col = window.prompt("What column would you like to drop your piece into?", "1");
  console.log(this.col + " selected.");
};

Flow.prototype.startGame = function(game) {
  if(game/*needs a good check for one player vs 2 player or separate method*/){
    for(var i = 0; i <= 42; i++){
      game.printBoard();
      this.movePrompt();
      var temp = game.placePiece(this.col, this.piece);
      if(game.winCheck(temp)){
        game.printBoard();
        break;
      }
    }
  } else {
    for(var i = 0; i <= 42; i++){
      game.printBoard();
      this.onePlayerPrompt();
      var opTemp = game.placePiece(this.col, this.piece);
      if(game.winCheck(opTemp)){
        game.printBoard();
        break;
      }
      var compTemp = game.placePiece(singlePlayerAI.decideMove(), BLACK);
      if(game.winCheck(compTemp)){
        game.printBoard();
        break;
      }
    }
  }
};

