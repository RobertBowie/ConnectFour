//_______________________________________________________________
//Start on click.
//_______________________________________________________________
document.querySelector('.two_player_start').onclick = function() {
  twoPlayerGame = new Game;
  twoPlayerFlow = new Flow;
  twoPlayerFlow.startGame();
};

var Flow = function(){
};

Flow.prototype.movePrompt = function() {
  this.piece = window.prompt("What color would you like to place?(RED or BLACK)", "RED");
  console.log(this.piece + " selected.");
  this.col = window.prompt("What column would you like to drop your piece into?", "1");
  console.log(this.col + " selected.");
};

Flow.prototype.startGame = function() {
  this.movePrompt();
  
};