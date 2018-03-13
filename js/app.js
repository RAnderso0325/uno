//GAME PLAY:
function playerTurnIs(){
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
	}
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
}

//card has been played
function playCard(){
	cardPlayed = playerArr[turn].playerHand.splice($(this).index(), 1);
	checkCard();
}

//move forward with game
function nextTurn(){
	changeDiscard();
	playerTurnIs();
}

//card must match either color or value to be played
function checkCard(){
	didSomeoneWin();
	if(weHaveAWinner === true || (weHaveAWinner === false && shuffledDeck.length === 0)){
		changeDiscard();
	}else{
		if(cardPlayed[0].color === discardPile[0].color || cardPlayed[0].value === discardPile[0].value && cardPlayed[0].value !== "wild" && cardPlayed[0].value !== "+4wild"){
			if(cardPlayed[0].value === "skip"){
				playerTurnIs();
				nextTurn();
			}else if(cardPlayed[0].value === "reverse"){
				reverseCard();
				nextTurn();
			}else if(cardPlayed[0].value === "plusTwo"){
				nextTurn();
				drawCard(2);
			}else{
				nextTurn();
			};
		}else if(cardPlayed[0].value === "wild"){
			startPlayWildCard();
		}else if(cardPlayed[0].value === "+4wild"){
			startPlayWildCard();
			drawCard(4);
		}else{
			playerArr[turn].playerHand.push(cardPlayed[0]);
		}
	}
}

//draw logic
function drawCard(num){
	if(shuffledDeck.length === 0){
		didSomeoneWin();
	}
	var drawnCard = shuffledDeck.splice(0,1);
	playerArr[turn].playerHand.push(drawnCard[0]);
	var card = document.createElement('div');
	card.setAttribute('class', 'card');
	card.classList.add(drawnCard[0].color);
	card.classList.add(drawnCard[0].value);
	card.textContent=drawnCard[0].value;
	card.style.backgroundColor = drawnCard[0].color;
	card.addEventListener('click', playCard);
	$('#hand'+turn).append(card);
	if(num>1){
		drawCard(num-1);
	}
}

function didSomeoneWin(){
	for(var i=0; i<playerArr.length; i++){
		var playerHand = playerArr[i].playerHand;
		if(playerHand.length === 0){
			weHaveAWinner = true;
			someoneWon();
		}else if(shuffledDeck.length === 0){
			someoneWon();
		}
	}
}

function someoneWon(){
	if(weHaveAWinner === false){
		$('#winnerIndex').text("Uhoh, you played through the whole deck! Would you like to play again?");
		$('#winnerModal').modal('show');
	}else if(weHaveAWinner === true){
		document.getElementById('game-page').classList.add('hidden');
		$('#winnerIndex').text("UNO! "+currentPlayer.playerName+" won!");
		$('#winnerModal').modal('show');
	}
	var button = $('#new-game-button');
	button.click(function(){
		$('#winnerModal').modal('hide');
		reset();
	});
}

function newGameModals(){
	var buttonNewGame = $('#new-game');
	buttonNewGame.click(function(){
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
		});
	});
}

function reset(){
	$('#game-board').empty();
	playerArr=[];
	reverse = false,
	shuffledDeck=[];
	discardPile=[];
	cardPlayed;
	weHaveAWinner = false,
	turn = 0;
	currentPlayer = playerArr[0];
	startGameModals();
}