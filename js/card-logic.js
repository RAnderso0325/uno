//skip logic
function skipCard(){
	turn++;
	turn++;
	console.log("skip card was played");
	playerTurnIs();
}

//reverse logic
function reverseCard(){
	//if card played is skip card,
	turn--;
	console.log("reverse card was played");
	playerTurnIs();

}

//draw two logic
function drawTwo(){
	turn++;
	drawCard();
	drawCard();
	console.log("player has to draw two");
}

//wild card logic

//wild card draw four logic