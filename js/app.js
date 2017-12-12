var turn = 0;
var shuffledDeck;
var playerHand = [];


//set game board
function setGameBoard(){
	console.log("game board is ready");
	for (var i=0; i < playerHand.length; i++) {
		var cardElement = document.getElementsByClassName('card');
		// cardElement.setAttribute('src', 'images/back.png');
		// cardElement.setAttribute('data-id', i);
		// cardElement.style.backgroundColor = "red";
		// cardElement.addEventListener('click', playCard);
		document.getElementById('game-board').appendChild(cardElement);
	}
	dealCards();
};

//shuffle function
function shuffleDeck(deck){
	var currentIndex = deck.length, temporaryValue, randomIndex;
	while(0 !== currentIndex){
		randomIndex = Math.floor(Math.random()*currentIndex);
		currentIndex -= 1;

		temporaryValue = deck[currentIndex];
		deck[currentIndex]= deck[randomIndex];
		deck[randomIndex] = temporaryValue;
	}
	return deck;
}

//create player hand
function dealCards(){
	console.log("player hand dealt");
    // var  = Math.floor((Math.random() *6)+1);
    // var thisCard = deck[index];
    // var p = 
    // playerHand.push(cards[card]);
}

//shuffle deck, ie randomly add seven cards from the deck to player 1 hand
//display cards for player 1

//add a card to the discard pile

//GAME PLAY:

function playerTurnIs(){
	console.log('it is this players turn');
	if(turn%2!==0){
		console.log("it is player 1 turn");
	}
	if(turn%2===0){
		console.log("it is player 2 or comp turn");
	}
}
//card must match either color or value to be played
function playCard(){
	console.log("card is played");
	//move card to discard pile
}

//draw logic
//include draw card button
//prompt user to draw a card if they try to play a card that doesn't match the value or color requirements
function drawCard(){
	console.log("player would like to draw a card");
	//add card to player hand
}

function reset(){
	console.log("play a new game");
}

document.addEventListener("DOMContentLoaded", function(){
	document.getElementById('new-game').addEventListener('click', reset);
	document.getElementById('draw-card').addEventListener('click', drawCard);
	setGameBoard();
})