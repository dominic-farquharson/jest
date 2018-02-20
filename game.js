function Game(player) {
 this.player = player; 
 this.turns = 0;
 this.changeTurn = function() {
   this.turns += 1;
   return this.numberOfTurns(); 
 }
 this.numberOfTurns = function() {
  return this.turns;
 }

}

module.exports = Game;
