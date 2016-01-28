function Player(symbol){
	this.symbol = symbol;
};
function Space(x, y){
	this.xCoordinate = x;
    this.yCoordinate = y;
    this.player= "";
}

Space.prototype.markedBy = function(player){
	this.markedBy = player;
};

function Board(){
	this.spaces = [new Space(1,1), new Space(1,2), new Space(1,3), new Space(2,1), new Space(2,2), new Space(2,3), new Space(3,1), new Space(3,2), new Space(3,3) ]
}

Board.prototype.findSpace = function(x,y) {
  for (var index in this.spaces) {
    if (this.spaces[index].xCoordinate === x && this.spaces[index].yCoordinate === y) {
      return this.spaces[index];
    }
  }
}