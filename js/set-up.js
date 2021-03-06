//set up game board
function setGameBoard(){
	shuffleDeck();
	dealCards();
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
		shuffledDeck = deck.slice();
	}
}

//create player hand
function dealCards(){
    for(var i=0; i<playerArr.length; i++){
    	var playerInPlay = document.createElement('div');
    	playerInPlay.setAttribute('id', 'player'+i);
    	playerInPlay.setAttribute('class', 'player');
    	var playerTitle = document.createElement('h2');
    	playerTitle.textContent = "Player "+playerArr[i].playerName+"'s turn!";
    	playerInPlay.appendChild(playerTitle);
    	playerArr[i].playerHand = shuffledDeck.splice(0,7);
    	var hand = document.createElement('div');
    	hand.setAttribute('class', 'hand');
    	hand.id = "hand"+i;
    	playerInPlay.style.display = "none";
    	document.getElementById('game-board').appendChild(playerInPlay).appendChild(hand);
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
	$('#player0').css('display', 'block');
	if(discardPile[0].value === "wild" || discardPile[0].value === "+4wild"){
		$('#wildCardModal').modal('show');
		var button = $('#submit-button')
		button.click(function(){
			$('#wildCardModal').modal('hide');
			var userSelection = $('input[name="option"]:checked');
			discardPile[0].color = userSelection[0].value;
			discardCard.setAttribute('class', 'card');
			discardCard.classList.add(discardPile[0].color);
			discardCard.classList.add(discardPile[0].value);
			discardCard.textContent= discardPile[0].value;
			discardCard.style.backgroundColor = discardPile[0].color;
			addPlayerHand();
			if(discardPile[0].value === "+4wild"){
				drawCard(4);
			}
		});
	}else if(discardPile[0].value === "skip"){
		$('#player0').css('display', 'none');
		playerTurnIs();
	}else if(discardPile[0].value === "reverse"){
		reverse=true;
	}else if(discardPile[0].value === "plusTwo"){
		drawCard(2);
	}
}

function toggleFields(){
    if($("#number-of-players").val() > 2){
        $("#more-players").show();
        addPlayerNameFields();
    }else{
        $("#more-players").hide();
    }
}

function addPlayerNameFields(){
	var numberPlayers = $("#number-of-players").val();
	if(numberPlayers >= 3){
		$('#more-players').empty();
		for(var i=0; i < numberPlayers-2; i++){
			$('#more-players').append($('<p></p>').text('Player Name: ').append($('<input type="text" name="player_name" class="name-of-players" value="">')));
		}
	}
}

function setPlayerArr(){
	$.each($('.name-of-players'), function(index, value){
		playerArr.push({playerName: $(value).val(), playerHand: []});
	});
	setGameBoard();
}

function startGameModals(){
	var buttonInitialize = $("#initial-game");
	buttonInitialize.click(function(){
		document.getElementById('pre-game-fill').classList.add("hidden");
		toggleFields();
		$("#number-of-players").modal('show');
    	$("#number-of-players").change(function() { 
    		toggleFields(); 
    	});
		var buttonStart = $('#start-button');
		buttonStart.click(function(){
			setPlayerArr();
			$('#number-of-players').modal('hide');
			document.getElementById('game-page').classList.remove('hidden');
		});
	});
}

document.addEventListener("DOMContentLoaded", function(){
	document.getElementById('new-game').addEventListener('click', reset);
	document.getElementById('draw-card').addEventListener('click', drawCard);
	startGameModals();
});