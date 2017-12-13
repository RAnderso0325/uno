//skip logic
function skipCard(){
	turn++;
	console.log("skip card was played");
	playerTurnIs();
}

//reverse logic
function reverseCard(){
	if(reverse === false){
		reverse = true;
	}
	if(reverse === true){
		reverse = false;
	};
	console.log("reverse card was played");
	playerTurnIs();

}

//draw two logic
function drawTwo(){
	drawCard();
	drawCard();
	console.log("player has to draw two");
	playerTurnIs();
}

//wild card logic
function wildCard(){
	//player chooses color
	//show input box for color choice, maybe radio buttons
	//change color variable to the proper color choice
	//^using user input
	turn++;
	playerTurnIs();
}

//wild card draw four logic
function wildCardDrawFour(){
	drawCard();
	drawCard();
	drawCard();
	drawCard();
	wildCard();
}