//skip logic
function skipCard(){
	playerTurnIs();
	console.log("skip card was played");
}

//reverse logic
function reverseCard(){
	if(reverse === false){
		reverse = true;
	}else if(reverse === true){
		console.log("inside the reverse is true condition", turn);
		reverse = false;
	};
	console.log("reverse card was played");
}

//draw two logic
function drawTwo(){
	// playerTurnIs();
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