var Computer = function(){
};

Computer.prototype.decideMove = function() {
  // Random move for now...
  return Math.floor(Math.random() * 7 + 1);
};