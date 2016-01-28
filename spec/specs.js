describe("Player", function() {
  describe("initialize", function() {
    it("starts a player with a symbol of X or O", function() {
      var testPlayer = new Player("X");
      expect(testPlayer.symbol).to.equal("X");
    });
  });
});

describe('Space', function(){
	it("returns the player's mark", function() {
      var testSpace = new Space(1,2);
      expect(testSpace.xCoordinate).to.equal(1);
   });
});

describe('Space', function(){
	it("returns the player's mark", function() {
      var testSpace = new Space(1,2);
      expect(testSpace.yCoordinate).to.equal(2);
   	});

	it("lets a player mark a space", function() {
      var testPlayer = new Player("X")      
      var testSpace = new Space(1,2);
      testSpace.markedBy(testPlayer)
      expect(testSpace.player).to.equal(testPlayer);
   	});
});



