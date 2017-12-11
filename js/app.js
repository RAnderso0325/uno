var turn = 0;

//create player hand
function dealCards(){
	console.log("player hand dealt");
}
//shuffle deck, ie randomly add seven cards from the deck to player 1 hand
//display cards for player 1

//add a card to the discard pile

//GAME PLAY:

//card must match either color or value to be played
function playerTurnIs(){
	console.log('it is this players turn');
	if(turn%2!==0){
		console.log("it is player 1 turn");
	}
	if(turn%2===0){
		console.log("it is player 2 or comp turn");
	}
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
	dealCards();
})