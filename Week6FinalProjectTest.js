var expect = chai.expect;
var assert = chai.assert;


describe('MyFunction', function() {
    describe('#isRoundWinner', function() {
        it('should compare if the first parameter is > than the second parameter and return true/false', function() {
            var x = isRoundWinner(5,2);
            expect(x).to.be.a('boolean');
        }); 
    }); 
});

describe('isRoundWinner', function() {
    it('should compare if the first parameter is > than the second parameter and return true/false', function() {
        var x = isRoundWinner(5,2);
        expect(x).to.be.a('boolean');
    }); 
}); 

describe('isRoundWinner()', function(){
    it('should check if cardOne is > than cardTwo', function()
    {
        var cardOne = "10", cardTwo = "2";
        assert.strictEqual(isRoundWinner(cardOne, cardTwo), true, 'cardOne !> cardTwo')
    })
}
);

describe("Testing Deck Class", function(){
    
    //testing shuffle function
    it('shuffles a deck', function(){
        let cards = freshDeck()
        let Deck2 = new Deck(cards);
        assert.strictEqual(Deck2.shuffle(), 'deck is not shuffled')
    });
})