console.log("Up and running!");

var cards = ["queen", "queen", "king", "king"];
var cardsInPlay = [];


// Creating values for cards
var cardOne = cards[0];
var cardTwo = cards[2];
var cardThree = "king"
var cardFour = "queen";



cardsInPlay.push(cardOne);
cardsInPlay.push(cardTwo);
console.log("User has flipped " + cardOne);
console.log("User has flipped " + cardTwo);


//Creating the check for the match
if (cardsInPlay.length === 2){
	if (cardsInPlay[0] === cardsInPlay[1]){
		alert("You found a match!");
	}
	else if (cardsInPlay[0] !== cardsInPlay[1]){
		alert("Sorry try again");
	}
}