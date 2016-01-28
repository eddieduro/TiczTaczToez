//create player symbol
function Player(symbol){
	this.symbol = symbol;
};

//create coordinates for spaces
function Space(x, y){
	this.xCoordinate = x;
    this.yCoordinate = y;
    this.player= "";
};

//let player mark a spot
Space.prototype.markedBy = function(player){
	this.markedBy = player;
};
//create board
function Board(){
	this.spaces = [new Space(1,1), new Space(1,2), new Space(1,3), new Space(2,1), new Space(2,2), new Space(2,3), new Space(3,1), new Space(3,2), new Space(3,3) ]
}
//find a spot on the board
Board.prototype.findSpot = function(x,y) {
//for index in board.spaces [array] if x and y are equal to the index return that space index
  for (var index in this.spaces) {
    if (this.spaces[index].xCoordinate === x && this.spaces[index].yCoordinate === y) {
      return this.spaces[index];
    }
  }
}