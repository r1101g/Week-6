//Class with an object that holds key value pair for the card ranks    
class Ranks {
    constructor() {
    this.ranks = {'ace': 14, 'king' : 13, 'queen': 12, 'jack' : 11, 'ten': 10,
                  'nine' : 9, 'eight': 8, 'seven' : 7, 'six': 6, 'five' : 5, 
                  'four': 4, 'three' : 3, 'two': 2 };
    }
}
//Class with an array that stores 52 cards.
class Cards {
    constructor() {
      this.cards = ['ace','king', 'queen', 'jack', 'ten', 
      'nine', 'eight', 'seven', 'six', 'five', 'four', 'three', 'two',
      'ace','king', 'queen', 'jack', 'ten', 
      'nine', 'eight', 'seven', 'six', 'five', 'four', 'three', 'two',
      'ace','king', 'queen', 'jack', 'ten', 
      'nine', 'eight', 'seven', 'six', 'five', 'four', 'three', 'two',
      'ace','king', 'queen', 'jack', 'ten', 
      'nine', 'eight', 'seven', 'six', 'five', 'four', 'three', 'two'];
    }
}
//Class where the game is played
class Game {
    constructor() {
    this.cards = new Cards(); // Creates an array that holds a 52 cards array
    this.ranks = new Ranks(); // Creates an object that holds an object of card values 
    }
    
    start() // function that sets up the game
    {
        let winner; // string variable for the winner
        
        //This function randomize the values in an array that is passed to it.
        //Here it is used to "shuffle" the 52 cards array
        function shuffle(array) 
         {
            let currentIndex = array.length,  randomIndex;
          
            // While there remain elements to shuffle.
            while (currentIndex != 0) {
          
              // Pick a remaining element.
              randomIndex = Math.floor(Math.random() * currentIndex);
              currentIndex--;
          
              // And swap it with the current element.
              [array[currentIndex], array[randomIndex]] = [
                array[randomIndex], array[currentIndex]];
            }
          
            return array;
          }

          // 52 cards array is passed to the shuffle function, and results is saved to 
          // deck variable
          let deck  = shuffle(this.cards.cards); 

          // Card values("ranks") saved to ranks variable
          let ranks = this.ranks.ranks;

         
         let halfTheDeck = deck.length/2; // The value of half the deck (26)
         
         //Setting up each player's hand
         let hand1 = deck; // 52 cards array
         let hand2 = hand1.slice(halfTheDeck); //Give half shuffled cards(26 cards array) to player2

         for (let i = 0; i < halfTheDeck; i++) {
            hand1.pop(); // Give Other half of shuffled cards(26 cards array) to player1
         }

         //Player1 and Player2 starting points(zero for both)
         let player1_Points = 0;
         let player2_Points = 0;

        /*Iterate through the turns where each Player plays a Card.  
         The Player who played the higher card is awarded a point. 
         Ties result in zero points for both Players.   */
         for (let i = 0; i < deck.length; i++) {
            if (ranks[hand1[i]] > ranks[hand2[i]]) {
                player1_Points++;
            } else if (ranks[hand1[i]] < ranks[hand2[i]]) {
                player2_Points++;
            } else {
                player1_Points += 0;
                player2_Points += 0;
            }
        }

        //Determines the winner
        if (player1_Points > player2_Points) {
            winner = `player 1`;
        } else {
            winner = `player 2`;
        }

        //Displays the results of the game
        let results =  `In this round: [ player 1 = ${player1_Points} points] and [ player 2
                          = ${player2_Points} points] >>  ${winner} is the winner`
        
        
        return results; //Return the resuls
    }
 
}
let play = new Game(); //Create a new game and call it "play"

//Shows result of the game
console.log(play.start());
    