//GAME PLAY:
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
		if(turn<0){
			turn=playerArr.length-1;
		}
		currentPlayer = playerArr[turn];
		document.getElementById('player'+turn).style.display = "block";
		console.log("we are in the turn false function playing with turn", turn);
	}
	console.log("current turn is",playerArr[turn]);
}

//change discard card
function changeDiscard(){
	discardPile.unshift(cardPlayed[0]);
	var discardCard = document.getElementById('discardCard');
	discardCard.setAttribute('class', 'card');
	discardCard.classList.add(discardPile[0].color);
	discardCard.classList.add(discardPile[0].value);
	discardCard.textContent= discardPile[0].value;
	discardCard.style.backgroundColor = discardPile[0].color;
	addPlayerHand();
	// playerTurnIs();
}

//card has been played
function playCard(){
	cardPlayed = playerArr[turn].playerHand.splice($(this).index(), 1);
	checkCard();
}

//card must match either color or value to be played
function checkCard(){
	console.log("card is played");
	didSomeoneWin();
	if(weHaveAWinner === true){
		console.log("uno uno uno!");
		changeDiscard();
	}else{
		if(cardPlayed[0].color === discardPile[0].color || cardPlayed[0].value === discardPile[0].value && cardPlayed[0].value !== "wildCard" && cardPlayed[0].value !== "w+4WildCard"){
			console.log('card spliced', cardPlayed[0].color);
			if(cardPlayed[0].value === "skip"){
				skipCard();
				changeDiscard();
				playerTurnIs();
			}else if(cardPlayed[0].value === "reverse"){
				reverseCard();
				changeDiscard();
				playerTurnIs();
			}else if(cardPlayed[0].value === "plusTwo"){
				changeDiscard();
				playerTurnIs();
				drawTwo();
			}else{
				changeDiscard();
				playerTurnIs();
			};
		}else if(cardPlayed[0].value === "wildCard"){
			startPlayWildCard();
			playerTurnIs();
		}else if(cardPlayed[0].value === "+4WildCard"){
			// changeDiscard();
			startPlayWildCardDrawFour();
		}else{
			console.log("try again");
			playerArr[turn].playerHand.push(cardPlayed[0]);
		}
	}
}

//draw logic
function drawCard(){
	console.log("player would like to draw a card");
	var drawnCard = shuffledDeck.splice(0,1);
	playerArr[turn].playerHand.push(drawnCard[0]);
	console.log(playerArr[turn]);
	console.log(turn);
	console.log(playerArr[turn].playerHand);
	var card = document.createElement('div');
	card.setAttribute('class', 'card');
	card.classList.add(drawnCard[0].color);
	card.classList.add(drawnCard[0].value);
	card.textContent=drawnCard[0].value;
	card.style.backgroundColor = drawnCard[0].color;
	card.addEventListener('click', playCard);
	$('#hand'+turn).append(card);
	//add card to player hand
}

function didSomeoneWin(){
	for(var i=0; i<playerArr.length; i++){
		var playerHand = playerArr[i].playerHand;
		if(playerHand.length === 0){
			console.log("uno");
			weHaveAWinner = true;
			someoneWon();
		}else{
			console.log("still goin");
		}
	}
}

function someoneWon(){
	$('#winnerIndex').text(currentPlayer.playerName);
	$('#winnerModal').modal('show');
	var button = $('#new-game-button');
	button.click(function(){
		$('#winnerModal').modal('hide');
		reset();
	});
}

function reset(){
	$('#game-board').empty();
	playerArr=[];
	reverse = false,
	weHaveAWinner = false,
	turn = 0;
	currentPlayer = playerArr[0];
	function modals(){
		$('#playerNumberModal').modal('show');
    	toggleFields(); //call this first so we start out with the correct visibility depending on the selected form values
   		//this will call the toggleFields function every time the selection value of the player number field changes
    	$("#number-of-players").change(function() { 
    		toggleFields(); 
    	}); //this toggles the visibility of the additional name fields depending on the current selected value of the number field
		var buttonStart = $('#start-button');
		buttonStart.click(function(){
			setPlayerArr();
			$('#playerNumberModal').modal('hide');
		})
		var buttonBack = $('#back-button');
		buttonBack.click(function(){
			$('#playerNameModal').modal('hide');
			startGameModals();
		})
	}
}