console.log("Up and running!");

var cards = [
{
	rank: "queen",
	suit: "hearts",
	cardImage: "images/queen-of-hearts.png",
},
{
	rank: "queen",
	suit: "diamonds",
	cardImage: "images/queen-of-diamonds.png",
},
{
	rank: "king",
	suit: "hearts",
	cardImage: "images/king-of-hearts.png",
},
{
	rank: "king",
	suit: "diamonds",
	cardImage: "images/king-of-diamonds.png",
}
];
var cardsInPlay = [];

//Function jto check for match
function checkForMatch() {
	if (cardsInPlay.length === 2){
		if (cardsInPlay[0] === cardsInPlay[1]){
			console.log("You found a match!");
		}
		else if (cardsInPlay[0] !== cardsInPlay[1]){
			console.log("Sorry try again");
		}
	}
}

//Function to flip cards and add to array
function flipCard() {
  var cardId = this.getAttribute('data-id');
  console.log("User flipped" + " " + cards[cardId].rank);

  if (cardsInPlay.length >= 2) {
    cardsInPlay = [];
  }
  cardsInPlay.push(cards[cardId]);
  this.setAttribute('src', cards[cardId].cardImage);
  if (cardsInPlay.length === 2) {
    setTimeout(checkForMatch, 200);
  }
};


//Creating funciton for game
function createBoard(){
	for (var i = 0; i < cards.length; i++) {
		var cardElement = document.createElement('img');
		cardElement.setAttribute('src', 'images/back.png');
    	cardElement.setAttribute('data-id', i);
    	cardElement.addEventListener('click', flipCard);
    	document.getElementById('game-board').appendChild(cardElement);
  }
}

createBoard();

