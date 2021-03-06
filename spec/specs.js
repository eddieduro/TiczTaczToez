describe("Player", function() {
  describe("initialize", function() {
    it("starts a player with a symbol of X or O", function() {
      var testPlayer = new Player("X");
      expect(testPlayer.symbol).to.equal("X");
    });
  });
});

describe('Space', function(){
	it("returns the player's symbol", function() {
      var testSpace = new Space(1,2);
      expect(testSpace.xCoordinate).to.equal(1);
   });
});

describe('Space', function(){
	it("returns the player's symbol", function() {
      var testSpace = new Space(1,2);
      expect(testSpace.yCoordinate).to.equal(2);
   	});

	it("lets a player mark symbol on space", function() {
      var testPlayer = new Player("X")      
      var testSpace = new Space(1,2);
      testSpace.markedBy(testPlayer)
      expect(testSpace.markedBy).to.equal(testPlayer);
   	});
});

describe('Board', function() {
  it("creates a board with 9 spots", function() {
  	var testBoard = new Board ();
   });

   it("will find a spot on the board by coordinates", function() {
    var testBoard = new Board();
    expect(testBoard.findSpot(1,1).yCoordinate).to.equal(1);
  });
});



