var Player = function(symbol){
	this.symbol = symbol;
};
var Space = function(x, y){
	this.xCoordinate = x;
    this.yCoordinate = y;
    this.player= "";
}

Space.prototype.markedBy = function(player){
	this.player = player;
};