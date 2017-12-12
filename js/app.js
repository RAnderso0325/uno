var turn = 0; //current index
var shuffledDeck;
var reverse = false;

//set game board
function setGameBoard(){
	console.log("game board is ready");
	// for (var i=0; i < playerHand.length; i++) {
	// 	var cardElement = document.getElementsByClassName('card');
		// cardElement.setAttribute('src', 'images/back.png');
		// cardElement.setAttribute('data-id', i);
		// cardElement.style.backgroundColor = "red";
		// cardElement.addEventListener('click', playCard);
		// document.getElementById('game-board').appendChild(cardElement);
	// }
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
    }
}

//add a card to the discard pile

//GAME PLAY:

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