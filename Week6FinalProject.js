/*REQUIREMENTS

-Deal 26 Cards to each Player from a Deck of 52 cards.
-Iterate through the turns where each Player plays a Card.
-The Player who played the higher card is awarded a point
-Ties result in zero points for both Players
-After all cards have been played, display the score and declare the winner.
-Write a Unit Test using Mocha and Chai for at least one of the functions you write
*/

//SETTING UP THE DECK AND CARDS

//constant variables 
const SUITS = ['♠', '♣', '♥', '♦'];
const VALUES = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];

const CARD_VALUE_MAP = { //returns a numeric value for the card VALUES 
    "2": 2,
    "3": 3,
    "4": 4,
    "5": 5,
    "6": 6,
    "7": 7,
    "8": 8,
    "9": 9,
    "10": 10,
    "J": 11,
    "Q": 12,
    "K": 13,
    "A": 14,
}

//CLASSES
class Deck { //full deck and hand or pile of cards
    constructor(cards = freshDeck()) {
        this.cards = cards; //array of cards (see freshDeck())
    }

    get numberOfCards() { //shortcut to getting the length of the Deck array (52)
        return this.cards.length;
    }

    shuffle() { //perfect shuffle. loop through the cards and flip them with other cards in the array
        for (let i = this.numberOfCards - 1; i > 0; i--) { //start with last card (52); card (0) doesn't need to be flipped; going from the back to the front (52 to 1)
            const newIndex = Math.floor(Math.random() * (i + 1)); //placement inside of the deck (an index #) that is somewhere other than where we are (i). Math.floor gives an integer
            const oldValue = this.cards[newIndex]; //swap the current card (this.cards[i]) with the new card (this.cards[newIndex])
            this.cards[newIndex] = this.cards[i]; //gets overwritten by above
            this.cards[i] = oldValue; //gets overwritten by above
        }
    }
}

class Card {
    constructor(suit, value) {
        this.suit = suit;
        this.value = value;
    }
}

//create a deck of cards, one for each suit and value combination
function freshDeck() {
    return SUITS.flatMap(suit => { //for each SUITS value, each VALUES value will return.  flatMap() combines multiple arrays into 1 array. It will return 1 array instead of 4.
        return VALUES.map(value => { //for each VALUES value, it will return a new Card(suit, value)
            return new Card(suit, value); 
        })
    })
}

const orderedDeck = new Deck(); //test to log cards in order
console.log(orderedDeck.cards)

//create a new deck object from Deck class.
const deck = new Deck();
deck.shuffle(); //shuffle new deck of cards
console.log(deck.cards); 

//setting up variables needed for the game 
let playerDeck, computerDeck; 
let turns;
let playerPoints = 0;
let computerPoints = 0;

//GAME 

startGame(); //call function immediately

function startGame() {
   
    splitDeck(); //split 52 cards into 2 decks of 26 
    console.log("Player", playerDeck); 
    console.log("Computer", computerDeck);

    //loop through 26 turns. every turn, new cards are drawn and compared
    for(turns = 1; turns <= 26; turns++){
        console.log(`Turn: ${turns}`);
        newRound();
    }

    gameOver();

}

//function to split deck in half
function splitDeck(){
    const deckMidPoint = Math.ceil(deck.numberOfCards / 2) //split into 2 equal piles of cards. ceil will give an integer if the deck is uneven
        playerDeck = new Deck(deck.cards.slice(0, deckMidPoint)) //1st 26 cards. slice of the cards from 0 to midpoint
        computerDeck = new Deck(deck.cards.slice(deckMidPoint, deck.numberOfCards)) //2nd 26 cards. start at midpoint and end at the last card
}

//function to get new card from end of deck array, compare, and console log
function newRound() {
    //get last card in the deck (top of the deck)
    let playerCard = playerDeck.cards.pop();
    let computerCard = computerDeck.cards.pop();
    
    //log drawn card
    console.log("Player", playerCard);
    console.log("Computer", computerCard);

    //determine who wins, award points, tally score
    if (isRoundWinner(playerCard, computerCard)) {
        playerPoints = playerPoints + 1;
        console.log(`
        Player wins!
        Score: Player(${playerPoints}), Computer(${computerPoints})`);
        
    } else if (isRoundWinner(computerCard, playerCard)) {
        computerPoints = computerPoints + 1;
        console.log(`
        Computer wins!
        Score: Player(${playerPoints}), Computer(${computerPoints})`);
        
    } else {
        console.log(`
        Draw
        Score: Player(${playerPoints}), Computer(${computerPoints})`);
        
    } 

}

//function to compare cards (is cardOne>cardTwo?)
function isRoundWinner(cardOne, cardTwo) {
    return CARD_VALUE_MAP[cardOne.value] > CARD_VALUE_MAP[cardTwo.value]; 
}

//function game over
function gameOver(){
    if(playerPoints > computerPoints){
        console.log(`
        *** GAME OVER ***
        Player Wins! 
        Score: Player(${playerPoints}), Computer(${computerPoints})
        `)
    } else if (playerPoints < computerPoints){
        console.log(`
        *** GAME OVER ***
        Computer Wins!
        Score: Player(${playerPoints}), Computer(${computerPoints})
        `)
    } else {
        console.log(`
        *** GAME OVER ***
        Draw!
        Score: Player(${playerPoints}), Computer(${computerPoints})
        `)
    }
}



