var turn = 0; //current index
var shuffledDeck;
var reverse = false;
var discardPile = [];

//set game board
function setGameBoard(){
	console.log("game board is ready");
	shuffleDeck();
	dealCards();
}

//shuffle function
function shuffleDeck(){
	var currentIndex = deck.length, temporaryValue, randomIndex;
	while(0 < currentIndex){
		randomIndex = Math.floor(Math.random()*currentIndex);
		currentIndex -= 1;
		temporaryValue = deck[currentIndex];
		deck[currentIndex]= deck[randomIndex];
		deck[randomIndex] = temporaryValue;
		shuffledDeck = deck;
	}
}

//create player hand
function dealCards(){
	console.log("player hand dealt");
    for(var i=0; i<playerArr.length; i++){
    	playerArr[i].playerHand = shuffledDeck.splice(0,7);
    	var hand = document.createElement('div');
    	hand.setAttribute('class', 'hand');
    	hand.setAttribute('id', 'player'+i);
    	document.getElementById('game-board').appendChild(hand);
    	// playerHand();
    }
    discardPile = shuffledDeck.splice(0,1);
    createDiscardPile();
    addPlayerHand();
}

//add player hand to game board
function addPlayerHand(){
	for(var i=0; i<playerArr.length; i++){
		var playerHand = playerArr[i].playerHand;
		for(var j=0; j<playerHand.length; j++){
			var card = document.createElement('div');
			console.log(playerHand[j].color);
			card.setAttribute('class', 'card');
			card.classList.add(playerHand[j].color);
			card.classList.add(playerHand[j].value);
			card.textContent=playerHand[j].value;
			card.style.backgroundColor = playerHand[j].color;
			document.getElementById('player'+i).appendChild(card);
		}
		console.log("I am trying to add cards");
	}
	console.log("tryin to add");
}

//GAME PLAY:
function createDiscardPile(){
	var discardCard = document.createElement('div');
	discardCard.setAttribute('class', 'card');
	discardCard.classList.add(discardPile[0].color);
	discardCard.classList.add(discardPile[0].value);
	discardCard.textContent=discardPile[0].value;
	discardCard.style.backgroundColor = discardPile[0].color;
	document.getElementById('game-board').appendChild(discardCard);
}

function playerTurnIs(){
	if(reverse === false){
		turn++;
		if(turn>playerArr.length){
			turn=0;
		}
	}else{
		turn--;
		if(turn<0){
			turn=playerArr.length-1;
		}
	}
	console.log("current turn is",playerArr[turn]);
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