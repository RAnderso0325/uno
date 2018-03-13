//skip logic
// function skipCard(){
// 	playerTurnIs();
// 	changeDiscard();
// 	playerTurnIs();
// }

//reverse logic
function reverseCard(){
	if(reverse === false){
		reverse = true;
	}else if(reverse === true){
		reverse = false;
	};
}

//draw two logic
// function drawTwo(){
// 	//change to take an input of number of times to call drawCard
// 	drawCard(2);
// }

//wild card logic
function startPlayWildCard(){
	$('#wildCardModal').modal('show');
	var button = $('#submit-button')
	button.click(function(){
		$('#wildCardModal').modal('hide');
		playWildCard();
	});
}

//combine wild card functions with an if else statement
function playWildCard(){
	var userSelection = $('input[name="option"]:checked');
	cardPlayed[0].color = userSelection[0].value;
	nextTurn();
}

// //wild card draw four logic
// function startPlayWildCardDrawFour(){
// 	startPlayWildCard();
// 	playerTurnIs();
// 	playWildCardDrawFour();
// }

// function playWildCardDrawFour(){
// 	drawCard(4);
// 	// drawCard();
// 	// drawCard();
// 	// drawCard();
// }