//skip logic
function skipCard(){
	var cardPlayed = playerArr[turn].playerHand.splice($(this).index(), 1);
	turn++;
	console.log("skip card was played");
	discardPile.unshift(cardPlayed[0]);
	var discardCard = document.getElementById('discardCard');
	discardCard.setAttribute('class', 'card');
	discardCard.classList.add(discardPile[0].color);
	discardCard.classList.add(discardPile[0].value);
	discardCard.textContent= discardPile[0].value;
	discardCard.style.backgroundColor = discardPile[0].color;
	addPlayerHand();
	playerTurnIs();
}

//reverse logic
function reverseCard(){
	// console.log(reverse, "in the reverse card function");
	var cardPlayed = playerArr[turn].playerHand.splice($(this).index(), 1);
	if(reverse === false){
		reverse = true;
		discardPile.unshift(cardPlayed[0]);
		var discardCard = document.getElementById('discardCard');
		discardCard.setAttribute('class', 'card');
		discardCard.classList.add(discardPile[0].color);
		discardCard.classList.add(discardPile[0].value);
		discardCard.textContent= discardPile[0].value;
		discardCard.style.backgroundColor = discardPile[0].color;
		console.log("now we in here", reverse, turn);
		addPlayerHand();
		playerTurnIs();
	}else if(reverse === true){
		console.log("inside the reverse is true condition", turn);
		reverse = false;
		discardPile.unshift(cardPlayed[0]);
		var discardCard = document.getElementById('discardCard');
		discardCard.setAttribute('class', 'card');
		discardCard.classList.add(discardPile[0].color);
		discardCard.classList.add(discardPile[0].value);
		discardCard.textContent= discardPile[0].value;
		discardCard.style.backgroundColor = discardPile[0].color;
		addPlayerHand();
		playerTurnIs();
	};
	console.log("reverse card was played");
}

//draw two logic
function drawTwo(){
	playerTurnIs();
	drawCard();
	drawCard();
	console.log("player has to draw two");
}

//wild card logic
function playWildCard(){
	//player chooses color
	//show input box for color choice, maybe radio buttons
	//change color variable to the proper color choice
	//^using user input
	console.log("user played a wild card");
	playerTurnIs();
}

//wild card draw four logic
function playWildCardDrawFour(){
	drawCard();
	drawCard();
	drawCard();
	drawCard();
	playWildCard();
	console.log("user played a wild card draw four");
}