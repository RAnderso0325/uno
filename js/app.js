var turn = 0; //current index
var shuffledDeck;
var reverse = false;
var discardPile = [];
var currentPlayer = playerArr[0];
// var playerInPlay;

//set game board
function setGameBoard(){
	console.log("game board is ready");
	shuffleDeck();
	dealCards();
	$('#player0').css('display', 'block');
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
    	var playerInPlay = document.createElement('div');
    	playerInPlay.setAttribute('id', 'player'+i);
    	playerInPlay.setAttribute('class', 'player');
    	var playerTitle = document.createElement('h2');
    	playerTitle.textContent = "Player "+(i+1);
    	playerInPlay.appendChild(playerTitle);
    	playerArr[i].playerHand = shuffledDeck.splice(0,7);
    	var hand = document.createElement('div');
    	hand.setAttribute('class', 'hand');
    	hand.id = "hand"+i;
    	// hand.setAttribute('id', 'player'+i);
    	playerInPlay.style.display = "none";
    	document.getElementById('game-board').appendChild(playerInPlay).appendChild(hand);
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
		$('#hand'+i).empty();
		for(var j=0; j<playerHand.length; j++){
			var card = document.createElement('div');
			card.setAttribute('class', 'card');
			card.classList.add(playerHand[j].color);
			card.classList.add(playerHand[j].value);
			card.textContent=playerHand[j].value;
			card.style.backgroundColor = playerHand[j].color;
			card.addEventListener('click', playCard);
			$('#hand'+i).append(card);
		}
	}
}

//GAME PLAY:
function createDiscardPile(){
	var discardCard = document.getElementById('discardCard');
	discardCard.classList.add(discardPile[0].color);
	discardCard.classList.add(discardPile[0].value);
	discardCard.textContent=discardPile[0].value;
	discardCard.style.backgroundColor = discardPile[0].color;
}

function playerTurnIs(){
	//set all hand divs to display: none
	$('.player').css('display', 'none');
	if(reverse === false){
		turn++;
		if(turn>=playerArr.length){
			turn=0;
		}
		currentPlayer = playerArr[turn];
		document.getElementById('player'+turn).style.display = "block";
	}else{
		turn--;
		if(turn<=0){
			turn=playerArr.length-1;
		}
		currentPlayer = playerArr[turn];
		
	}
	console.log("current turn is",playerArr[turn]);
}

//card must match either color or value to be played
function playCard(){
	console.log("card is played");
	console.log($(this).index());

	var cardPlayed = playerArr[turn].playerHand.splice($(this).index(), 1);
	if(cardPlayed[0].color === discardPile[0].color || cardPlayed[0].value === discardPile[0].value){
		console.log('card spliced', cardPlayed[0].color);
		discardPile.unshift(cardPlayed[0]);
		var discardCard = document.getElementById('discardCard');
		discardCard.setAttribute('class', 'card');
		discardCard.classList.add(cardPlayed[0].color);
		discardCard.classList.add(cardPlayed[0].value);
		discardCard.textContent= cardPlayed[0].value;
		discardCard.style.backgroundColor = cardPlayed[0].color;
		addPlayerHand();
		playerTurnIs();
		if(cardPlayed[0].value === "skip" && cardPlayed[0].color === discardPile[0].color){
			skipCard();
		}else if(cardPlayed[0].value === "reverse" && cardPlayed[0].color === discardPile[0].color){
			reverseCard();
		};
	}else if(cardPlayed[0].value === "wildCard"){
		playWildCard();
	}else if(cardPlayed[0].value === "wildCardDrawFour"){
		playWildCardDrawFour();
	}else{
		console.log("try again");
	}
	
	//check if card value or color equals that of the one in discardPile[0]
	// if(this.value === discardPile[0].value || this.color === discardPile.color){
	// 	discardPile.unshift(this);
	

	//Rerender player who just played
	//playerArr[turn].playerHand
	// addPlayerHand();

	//console.log(discardCard);
	//discardCard.style.backgroundColor = discardPile[0].color;
	// discardCard.classList.add()
	// 	console.log("this is working");
	// }
	//if it is not equal then prompt the user to play a card or draw a card

	//if it is equal...

	//push card into discard array

	//pop card from playerHand array

	//make the style display none again

	// playerTurnIs();
}


//draw logic
//include draw card button
function drawCard(){
	console.log("player would like to draw a card");
	//add card to player hand
}

function reset(){
	console.log("still need to add clear current board functionality");
	//clear current game board
	//clear player hand in player arrays
	//ask how many players from user input
	$('#game-board').empty();
	setGameBoard();
}

document.addEventListener("DOMContentLoaded", function(){
	document.getElementById('new-game').addEventListener('click', reset);
	document.getElementById('draw-card').addEventListener('click', drawCard);
	setGameBoard();
});