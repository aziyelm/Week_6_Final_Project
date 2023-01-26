var assert = chai.assert;

//testing isRoundWinner function
describe('isRoundWinner function', function(){
    it('should compare cards and return true/false if testingEnabled=true', function()
    {
        var cardOne = 10;
        var cardTwo = 2;
        var testingEnabled = true;
        
        //test to make sure testingEnabled will console.log "testing is enabled" if set to true
        console.log(isRoundWinner(cardOne, cardTwo, testingEnabled));

        //actual test
        assert.strictEqual(isRoundWinner(cardOne, cardTwo, testingEnabled), true, 'cardOne !> cardTwo or testingEnabled is false')
    })
}
);


