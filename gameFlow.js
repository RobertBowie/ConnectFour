//---------------
//Start on click.
//---------------
document.querySelector('.singlePlayerStart').onclick = function(){
  singlePlayerGame = new Game;
  singlePlayerFlow = new Flow;
  singlePlayerAI = new Computer;
  singlePlayerGame.clearBoard();
  singlePlayerFlow.startGame(singlePlayerGame);
};

// document.querySelector('.twoPlayerStart').onclick = function(){
//   twoPlayerGame = new Game;
//   twoPlayerFlow = new Flow;
//   twoPlayerFlow.startGame(twoPlayerGame);
// };


//Test code and reference for click event and color change example
var a = "5", b = "0";
document.querySelector('[data-matrixval="'+a+'x'+b+'"]').onclick = function(){
  if(this.style.backgroundColor !== 'black'){
      this.style.backgroundColor = 'black';
    } else {
      this.style.backgroundColor = 'white';
    }
}



var Flow = function(){
  this.buildListeners();
};

Flow.prototype.movePrompt = function(){
  this.piece = window.prompt("What color would you like to place?([R]ed or [B]lack)", RED);
  console.log(this.piece + " selected.");
  this.col = window.prompt("What column would you like to drop your piece into?", "1");
  console.log(this.col + " selected.");
};

Flow.prototype.onePlayerPrompt = function(){
  this.piece = RED;
  this.col = window.prompt("What column would you like to drop your piece into?", "1");
  console.log(this.col + " selected.");
};



Flow.prototype.startGame = function(game){
  console.log(innerMoved);
  var checkInnerMoved = function(){
    if(innerMoved){
      var temp = game.placePiece(moveCol, movePiece);
      game.markBoard(temp);
      if(game.winCheck(temp)){
        clearInterval(checkTimer);
      } else {
        var aiTemp = game.placePiece(singlePlayerAI.decideMove(), RED);
        setTimeout(function(){game.markBoard(aiTemp)}, 500);
        if(game.winCheck(temp)){
          clearInterval(checkTimer);
        }
      }
      innerMoved = false;
    }
  }
  var checkTimer = setInterval(checkInnerMoved, 300);

};

var innerMoved;
var moveCol, movePiece;
//------------------------------------------------------------------------
//Consider refactoring?
//------------------------------------------------------------------------
Flow.prototype.buildListeners = function(){
  var col0 = document.getElementsByClassName('boardCol_0');
  var col1 = document.getElementsByClassName('boardCol_1');
  var col2 = document.getElementsByClassName('boardCol_2');
  var col3 = document.getElementsByClassName('boardCol_3');
  var col4 = document.getElementsByClassName('boardCol_4');
  var col5 = document.getElementsByClassName('boardCol_5');
  var col6 = document.getElementsByClassName('boardCol_6');

  innerMoved = false;

  var colClicked0 = function(){
    moveCol = 1;
    movePiece = BLACK;
    console.log('Place in 1 slot.');

    innerMoved = true;
  };
  var colClicked1 = function(){
    moveCol = 2;
    movePiece = BLACK;
    innerMoved = true;
    console.log('Place in 2 slot.');
  };
  var colClicked2 = function(){
    moveCol = 3;
    movePiece = BLACK;
    innerMoved = true;
    console.log('Place in 3 slot.');
  };
  var colClicked3 = function(){
    moveCol = 4;
    movePiece = BLACK;
    innerMoved = true;
    console.log('Place in 4 slot.');
  };
  var colClicked4 = function(){
    moveCol = 5;
    movePiece = BLACK;
    innerMoved = true;
    console.log('Place in 5 slot.');
  };
  var colClicked5 = function(){
    moveCol = 6;
    movePiece = BLACK;
    innerMoved = true;
    console.log('Place in 6 slot.');
  };
  var colClicked6 = function(){
    moveCol = 7;
    movePiece = BLACK;
    innerMoved = true;
    console.log('Place in 7 slot.');
  };

  for(var i = 0; i < col0.length; i++){
    col0[i].addEventListener('click', colClicked0);
  };
  for(var i = 0; i < col1.length; i++){
    col1[i].addEventListener('click', colClicked1);
  };
  for(var i = 0; i < col2.length; i++){
    col2[i].addEventListener('click', colClicked2);
  };
  for(var i = 0; i < col3.length; i++){
    col3[i].addEventListener('click', colClicked3);
  };
  for(var i = 0; i < col4.length; i++){
    col4[i].addEventListener('click', colClicked4);
  };
  for(var i = 0; i < col5.length; i++){
    col5[i].addEventListener('click', colClicked5);
  };
  for(var i = 0; i < col6.length; i++){
    col6[i].addEventListener('click', colClicked6);
  };
};
//------------------------------------------------------------------------
//------------------------------------------------------------------------
// Flow.prototype.startGame = function(game){
//   if(game/*needs a good check for one player vs 2 player or separate method*/){
//     for(var i = 0; i <= 42; i++){
//       game.printBoard();
//       this.movePrompt();
//       var temp = game.placePiece(this.col, this.piece);
//       if(game.winCheck(temp)){
//         game.printBoard();
//         break;
//       }
//     }
//   } else {
//     for(var i = 0; i <= 42; i++){
//       game.printBoard();
//       this.onePlayerPrompt();
//       var opTemp = game.placePiece(this.col, this.piece);
//       if(game.winCheck(opTemp)){
//         game.printBoard();
//         break;
//       }
//       var compTemp = game.placePiece(singlePlayerAI.decideMove(), BLACK);
//       if(game.winCheck(compTemp)){
//         game.printBoard();
//         break;
//       }
//     }
//   }
// };

