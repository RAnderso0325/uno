//set up game board
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

//create discard pile
function createDiscardPile(){
	var discardCard = document.getElementById('discardCard');
	discardCard.classList.add(discardPile[0].color);
	discardCard.classList.add(discardPile[0].value);
	discardCard.textContent=discardPile[0].value;
	discardCard.style.backgroundColor = discardPile[0].color;
}

function setPlayerArr(){
	setGameBoard();
}

document.addEventListener("DOMContentLoaded", function(){
	document.getElementById('new-game').addEventListener('click', reset);
	document.getElementById('draw-card').addEventListener('click', drawCard);
	$('#playerNumberModal').modal('show');
	var button = $('#start-button');
	button.click(function(){
		$('#winnerModal').modal('hide');
		setPlayerArr();
	})
});