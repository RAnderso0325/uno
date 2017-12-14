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
function startPlayWildCard(){
	$('#wildCardModal').modal('show');
	var button = $('#submit-button')
	button.click(function(){
		$('#wildCardModal').modal('hide');
		playWildCard();
	});
}

function playWildCard(){
	var userSelection = $('input[name="option"]:checked');
	cardPlayed[0].color = userSelection[0].value;
	changeDiscard();
}

//wild card draw four logic
function playWildCardDrawFour(){
	playWildCard();
	drawCard();
	drawCard();
	drawCard();
	drawCard();
	console.log("user played a wild card draw four");
}